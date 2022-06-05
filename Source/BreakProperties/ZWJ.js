
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [

];

const codepoints = [
	0x0200D , // Zero Width Joiner
];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
