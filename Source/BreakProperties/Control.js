
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [
	range(0x00000,0x00009) , // <control-0000> ➞ <control-0009>
	range(0x0000B,0x0000C) , // <control-000b> ➞ <control-000c>
	range(0x0000E,0x0001F) , // <control-000e> ➞ <control-001f>
	range(0x0007F,0x0009F) , // <control-007f> ➞ <control-009f>
	range(0x0200E,0x0200F) , // Left-to-right Mark ➞ Right-to-left Mark
	range(0x0202A,0x0202E) , // Left-to-right Embedding ➞ Right-to-left Override
	range(0x02060,0x02064) , // Word Joiner ➞ Invisible Plus
	range(0x02066,0x0206F) , // Left-to-right Isolate ➞ Nominal Digit Shapes
	range(0x0FFF0,0x0FFF8) , // <reserved-fff0> ➞ <reserved-fff8>
	range(0x0FFF9,0x0FFFB) , // Interlinear Annotation Anchor ➞ Interlinear Annotation Terminator
	range(0x13430,0x1343F) , // Egyptian Hieroglyph Vertical Joiner ➞ Egyptian Hieroglyph End Walled Enclosure
	range(0x1BCA0,0x1BCA3) , // Shorthand Format Letter Overlap ➞ Shorthand Format Up Step
	range(0x1D173,0x1D17A) , // Musical Symbol Begin Beam ➞ Musical Symbol End Phrase
	range(0xE0002,0xE001F) , // <reserved-e0002> ➞ <reserved-e001f>
	range(0xE0080,0xE00FF) , // <reserved-e0080> ➞ <reserved-e00ff>
	range(0xE01F0,0xE0FFF) , // <reserved-e01f0> ➞ <reserved-e0fff>
];

const codepoints = [
	0x000AD , // Soft Hyphen
	0x0061C , // Arabic Letter Mark
	0x0180E , // Mongolian Vowel Separator
	0x0200B , // Zero Width Space
	0x02028 , // Line Separator
	0x02029 , // Paragraph Separator
	0x02065 , // <reserved-2065>
	0x0FEFF , // Zero Width No-break Space
	0xE0000 , // <reserved-e0000>
	0xE0001 , // Language Tag
];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
