#!/usr/bin/env -S deno run --allow-read --allow-write --allow-run --unstable

import { dirname , fromFileUrl , join } from 'https://deno.land/std/path/mod.ts';


const folder = dirname(fromFileUrl(import.meta.url));
const source = join(folder,'Source.txt');

const { log } = console;


const text = await Deno.readTextFile(source);

const lines = text
    .split('\n')
    .map((line) => line.trim());



const types = new Map;


for(const line of lines){
    
    if(line.length < 1)
        continue;
    
    if(line.startsWith('#'))
        continue;
        
    const [ range , back ] = line.split(';');
    
    const [ type , info ] = back.split('#');
    
    const [ specifier , count , ... name ] = info
        .trim()
        .split(/ +/g);
    
    const entry = preprocess({ range , type , specifier , count , name });    
    
    // log(entry);
    
    {
        const { type } = entry;

        delete entry.type;
        delete entry.count;

        const list = types.get(type) ?? [];
        list.push(entry);
        types.set(type,list);
    }
}


for(const [ type , entries ] of types.entries()){
    
    const ranges = entries
        .filter((entry) => entry.range.length > 1)
        .map((entry) => {
            
            const { range , name } = entry;
            const [ start , end ] = range;
            const [ from , to ] = name;
            
            return `\trange(${ start },${ end }) , // ${ from } ➞ ${ to }`;
        })
        .join('\n');
        
    const points = entries
        .filter((entry) => entry.range.length < 2)
        .map((entry) => {
            
            const { range , name } = entry;
            
            return `\t${ range } , // ${ name }`;
        })
        .join('\n');
    
    
    const content = 

`
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [\n${ ranges }\n];

const codepoints = [\n${ points }\n];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
`
    
    
    const path = join(folder,'..','Source','BreakProperties',`${ type }.js`);
    
    log(path)
    
    await Deno.writeTextFile(path,content);
}


function preprocess(data){
    
    let { range } = data;
    
    range = range
        .trim()
        .split('..')
        .map((value) => value.padStart(5,'0'))
        .map((value) => `0x${ value }`);
        
    
    let { type } = data;
    
    type = type
        .trim();
        
    
    // const { specifier } = data;
    
    
    let { count , name } = data;

    if(!count.includes('['))
        [ count , name ] = [ '[1]' , [ count , ...name ] ];


    count = count
        .slice(1,-1);
        
    count = parseInt(count);
    

    name = name
        .join(' ')
        .split('..')
        .map((string) => string.split(' '))
        .map((parts) => parts.map(capitalize))
        .map((parts) => parts.join(' '));
    
    
    return { range , type , count , name };
}


function capitalize(string){
    return string.charAt(0).toUpperCase() + 
           string.slice(1).toLowerCase() ;
}
