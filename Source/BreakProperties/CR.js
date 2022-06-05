
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [

];

const codepoints = [
	0x0000D , // <control-000d>
];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
