
import { hasBreak , determineType } from './Break.js'

import * as Surrogate from './Surrogates.js'


function toCharCode(char){
    return char.charCodeAt(0);
}

function toChars(string){
    return [ ... string ];
}

function charcodes(string){
    return toChars(string)
        .map(toCharCode);
}

function toUnicode(codepoints){
    return String.fromCodePoint(...codepoints);
}


export default function split(string = ''){
    
    const graphemes = [];
    
    const { length } = string;
    
    let breakIndex , 
        index = 0;
        
    
    string = charcodes(string);
    
    
    while(true){
        
        breakIndex = findNextBreak(string,index);
        
        if(!breakIndex)
            break;
            
        graphemes.push(string.slice(index,breakIndex));
        index = breakIndex;
    }
    
    if(index < length)
        graphemes.push(string.slice(index));
        
    return graphemes.map(toUnicode);
}


function findNextBreak(string,index){
    
    const sequence = [];
    
    const addNext = () =>
        sequence.push(determineType(codePointFrom(string,index)));
    
    addNext();
        
    while(true){
        
        index++;
        
        if(index >= string.length)
            return;

        if(Surrogate.isHigh(string[index - 1]) && Surrogate.isLow(string[index]))
            continue;
    
        addNext();
        
        if(hasBreak(sequence))
            return index;
    }
}


function trySurrogate(high,low){
    if(Surrogate.isHigh(high) && Surrogate.isLow(low))
        return calculateSurrogate(high,low); 
}


function codePointFrom(string,index = 0){

    const codepoint = string[index];
    
    return trySurrogate(codepoint,string[index + 1])
        ?? trySurrogate(string[index - 1],codepoint)
        ?? codepoint;
}

