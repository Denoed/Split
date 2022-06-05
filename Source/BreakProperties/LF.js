
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [

];

const codepoints = [
	0x0000A , // <control-000a>
];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
