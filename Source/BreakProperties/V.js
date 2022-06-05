
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [
	range(0x01160,0x011A7) , // Hangul Jungseong Filler ➞ Hangul Jungseong O-yae
	range(0x0D7B0,0x0D7C6) , // Hangul Jungseong O-yeo ➞ Hangul Jungseong Araea-e
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
