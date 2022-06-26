
import { hasBreak , determineType } from './Break.js'


const 
    High_Surrogate_First = 0xD800 ,
    High_Surrogate_Last = 0xDBFF ;
    
const
    Low_Surrogate_First = 0xDC00 ,
    Low_Surrogate_Last = 0xDFFF ;


function isHighSurrogate(codepoint){
    return High_Surrogate_First <= codepoint && codepoint <= High_Surrogate_Last;
}

function isLowSuggorate(codepoint){
    return Low_Surrogate_First <= codepoint && codepoint <= Low_Surrogate_Last;
}


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

        if(isHighSurrogate(string[index - 1]) && isLowSuggorate(string[index]))
            continue;
    
        addNext();
        
        if(hasBreak(sequence))
            return index;
    }
}


function calculateSurrogate(high,low){
    
    high -= High_Surrogate_First;
    low -= Low_Surrogate_First;
    
    return high << 10 + 0x10000;
}


function trySurrogate(high,low){
    if(isHighSurrogate(high) && isLowSuggorate(low))
        return calculateSurrogate(high,low); 
}


function codePointFrom(string,index = 0){

    const codepoint = string[index];
    
    return trySurrogate(codepoint,string[index + 1])
        ?? trySurrogate(string[index - 1],codepoint)
        ?? codepoint;
}

