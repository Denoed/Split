
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [
	range(0x011A8,0x011FF) , // Hangul Jongseong Kiyeok ➞ Hangul Jongseong Ssangnieun
	range(0x0D7CB,0x0D7FB) , // Hangul Jongseong Nieun-rieul ➞ Hangul Jongseong Phieuph-thieuth
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
