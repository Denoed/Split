
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [
	range(0x00600,0x00605) , // Arabic Number Sign ➞ Arabic Number Mark Above
	range(0x00890,0x00891) , // Arabic Pound Mark Above ➞ Arabic Piastre Mark Above
	range(0x111C2,0x111C3) , // Sharada Sign Jihvamuliya ➞ Sharada Sign Upadhmaniya
	range(0x11A84,0x11A89) , // Soyombo Sign Jihvamuliya ➞ Soyombo Cluster-initial Letter Sa
];

const codepoints = [
	0x006DD , // Arabic End Of Ayah
	0x0070F , // Syriac Abbreviation Mark
	0x008E2 , // Arabic Disputed End Of Ayah
	0x00D4E , // Malayalam Letter Dot Reph
	0x110BD , // Kaithi Number Sign
	0x110CD , // Kaithi Number Sign Above
	0x1193F , // Dives Akuru Prefixed Nasal Sign
	0x11941 , // Dives Akuru Initial Ra
	0x11A3A , // Zanabazar Square Cluster-initial Letter Ra
	0x11D46 , // Masaram Gondi Repha
	0x11F02 , // Kawi Sign Repha
];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
