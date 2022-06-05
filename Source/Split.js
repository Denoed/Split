
import hasBreak from './Break.js'


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



const Extended_Pictographic = 0;

const Regional_Indicator = 1;

const Zero_Width_Joiner = 2;

const Carriage_Return = 3;

const Spacing_Mark = 4;

const Line_Feed = 5;

const Prepend = 6;

const Extend = 7;

const LVT = 8;

const LV = 9;

const L = 10;

const V = 11;

const T = 12;

const Control = 13;

import isPrepend from './BreakProperties/Prepend.js';
import isControl from './BreakProperties/Control.js';
import isCarriageReturn from './BreakProperties/CR.js';
import isExtend from './BreakProperties/Extend.js';
import isL from './BreakProperties/L.js';
import isLVT from './BreakProperties/LVT.js';
import isLineFeed from './BreakProperties/LF.js';
import isLV from './BreakProperties/LV.js';
import isRegionalIndicator from './BreakProperties/Regional_Indicator.js';
import isSpacingMark from './BreakProperties/SpacingMark.js';
import isT from './BreakProperties/T.js';
import isV from './BreakProperties/V.js';
import isZeroWidthJoiner from './BreakProperties/ZWJ.js';

function determineType(codepoint){
    
    if(isPrepend(codepoint))
        return Prepend;
    
    if(isControl(codepoint))
        return Control;
        
    if(isCarriageReturn(codepoint))
        return Carriage_Return;
    
    if(isExtend(codepoint))
        return Extend;
    
    if(isL(codepoint))
        return L;
    
    if(isLVT(codepoint))
        return LVT;
    
    if(isLineFeed(codepoint))
        return Line_Feed;
        
    if(isLV(codepoint))
        return LV;
    
    if(isRegionalIndicator(codepoint))
        return Regional_Indicator;
        
    if(isSpacingMark(codepoint))
        return SpacingMark;
    
    if(isT(codepoint))
        return T;
        
    if(isV(codepoint))
        return V;
    
    if(isZeroWidthJoiner(codepoint))
        return Zero_Width_Joiner;
            
    
    return -1;
}