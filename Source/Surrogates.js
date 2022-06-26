

const 
    High_First = 0xD800 ,
    High_Last = 0xDBFF ;
    
const
    Low_First = 0xDC00 ,
    Low_Last = 0xDFFF ;
    
    
export function isHigh(codepoint){
    return High_First <= codepoint && codepoint <= High_Last;
}

export function isLow(codepoint){
    return Low_First <= codepoint && codepoint <= Low_Last;
}

export function calculate(high,low){
    
    high -= High_First;
    low -= Low_First;
    
    return high << 10 + 0x10000;
}