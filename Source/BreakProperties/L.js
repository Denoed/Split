
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [
	range(0x01100,0x0115F) , // Hangul Choseong Kiyeok ➞ Hangul Choseong Filler
	range(0x0A960,0x0A97C) , // Hangul Choseong Tikeut-mieum ➞ Hangul Choseong Ssangyeorinhieuh
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
