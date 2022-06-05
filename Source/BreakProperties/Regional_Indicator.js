
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [
	range(0x1F1E6,0x1F1FF) , // Regional Indicator Symbol Letter A ➞ Regional Indicator Symbol Letter Z
];

const codepoints = [

];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
