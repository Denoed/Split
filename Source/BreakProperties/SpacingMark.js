
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [
	range(0x0093E,0x00940) , // Devanagari Vowel Sign Aa ➞ Devanagari Vowel Sign Ii
	range(0x00949,0x0094C) , // Devanagari Vowel Sign Candra O ➞ Devanagari Vowel Sign Au
	range(0x0094E,0x0094F) , // Devanagari Vowel Sign Prishthamatra E ➞ Devanagari Vowel Sign Aw
	range(0x00982,0x00983) , // Bengali Sign Anusvara ➞ Bengali Sign Visarga
	range(0x009BF,0x009C0) , // Bengali Vowel Sign I ➞ Bengali Vowel Sign Ii
	range(0x009C7,0x009C8) , // Bengali Vowel Sign E ➞ Bengali Vowel Sign Ai
	range(0x009CB,0x009CC) , // Bengali Vowel Sign O ➞ Bengali Vowel Sign Au
	range(0x00A3E,0x00A40) , // Gurmukhi Vowel Sign Aa ➞ Gurmukhi Vowel Sign Ii
	range(0x00ABE,0x00AC0) , // Gujarati Vowel Sign Aa ➞ Gujarati Vowel Sign Ii
	range(0x00ACB,0x00ACC) , // Gujarati Vowel Sign O ➞ Gujarati Vowel Sign Au
	range(0x00B02,0x00B03) , // Oriya Sign Anusvara ➞ Oriya Sign Visarga
	range(0x00B47,0x00B48) , // Oriya Vowel Sign E ➞ Oriya Vowel Sign Ai
	range(0x00B4B,0x00B4C) , // Oriya Vowel Sign O ➞ Oriya Vowel Sign Au
	range(0x00BC1,0x00BC2) , // Tamil Vowel Sign U ➞ Tamil Vowel Sign Uu
	range(0x00BC6,0x00BC8) , // Tamil Vowel Sign E ➞ Tamil Vowel Sign Ai
	range(0x00BCA,0x00BCC) , // Tamil Vowel Sign O ➞ Tamil Vowel Sign Au
	range(0x00C01,0x00C03) , // Telugu Sign Candrabindu ➞ Telugu Sign Visarga
	range(0x00C41,0x00C44) , // Telugu Vowel Sign U ➞ Telugu Vowel Sign Vocalic Rr
	range(0x00C82,0x00C83) , // Kannada Sign Anusvara ➞ Kannada Sign Visarga
	range(0x00CC0,0x00CC1) , // Kannada Vowel Sign Ii ➞ Kannada Vowel Sign U
	range(0x00CC3,0x00CC4) , // Kannada Vowel Sign Vocalic R ➞ Kannada Vowel Sign Vocalic Rr
	range(0x00CC7,0x00CC8) , // Kannada Vowel Sign Ee ➞ Kannada Vowel Sign Ai
	range(0x00CCA,0x00CCB) , // Kannada Vowel Sign O ➞ Kannada Vowel Sign Oo
	range(0x00D02,0x00D03) , // Malayalam Sign Anusvara ➞ Malayalam Sign Visarga
	range(0x00D3F,0x00D40) , // Malayalam Vowel Sign I ➞ Malayalam Vowel Sign Ii
	range(0x00D46,0x00D48) , // Malayalam Vowel Sign E ➞ Malayalam Vowel Sign Ai
	range(0x00D4A,0x00D4C) , // Malayalam Vowel Sign O ➞ Malayalam Vowel Sign Au
	range(0x00D82,0x00D83) , // Sinhala Sign Anusvaraya ➞ Sinhala Sign Visargaya
	range(0x00DD0,0x00DD1) , // Sinhala Vowel Sign Ketti Aeda-pilla ➞ Sinhala Vowel Sign Diga Aeda-pilla
	range(0x00DD8,0x00DDE) , // Sinhala Vowel Sign Gaetta-pilla ➞ Sinhala Vowel Sign Kombuva Haa Gayanukitta
	range(0x00DF2,0x00DF3) , // Sinhala Vowel Sign Diga Gaetta-pilla ➞ Sinhala Vowel Sign Diga Gayanukitta
	range(0x00F3E,0x00F3F) , // Tibetan Sign Yar Tshes ➞ Tibetan Sign Mar Tshes
	range(0x0103B,0x0103C) , // Myanmar Consonant Sign Medial Ya ➞ Myanmar Consonant Sign Medial Ra
	range(0x01056,0x01057) , // Myanmar Vowel Sign Vocalic R ➞ Myanmar Vowel Sign Vocalic Rr
	range(0x017BE,0x017C5) , // Khmer Vowel Sign Oe ➞ Khmer Vowel Sign Au
	range(0x017C7,0x017C8) , // Khmer Sign Reahmuk ➞ Khmer Sign Yuukaleapintu
	range(0x01923,0x01926) , // Limbu Vowel Sign Ee ➞ Limbu Vowel Sign Au
	range(0x01929,0x0192B) , // Limbu Subjoined Letter Ya ➞ Limbu Subjoined Letter Wa
	range(0x01930,0x01931) , // Limbu Small Letter Ka ➞ Limbu Small Letter Nga
	range(0x01933,0x01938) , // Limbu Small Letter Ta ➞ Limbu Small Letter La
	range(0x01A19,0x01A1A) , // Buginese Vowel Sign E ➞ Buginese Vowel Sign O
	range(0x01A6D,0x01A72) , // Tai Tham Vowel Sign Oy ➞ Tai Tham Vowel Sign Tham Ai
	range(0x01B3D,0x01B41) , // Balinese Vowel Sign La Lenga Tedung ➞ Balinese Vowel Sign Taling Repa Tedung
	range(0x01B43,0x01B44) , // Balinese Vowel Sign Pepet Tedung ➞ Balinese Adeg Adeg
	range(0x01BA6,0x01BA7) , // Sundanese Vowel Sign Panaelaeng ➞ Sundanese Vowel Sign Panolong
	range(0x01BEA,0x01BEC) , // Batak Vowel Sign I ➞ Batak Vowel Sign O
	range(0x01BF2,0x01BF3) , // Batak Pangolat ➞ Batak Panongonan
	range(0x01C24,0x01C2B) , // Lepcha Subjoined Letter Ya ➞ Lepcha Vowel Sign Uu
	range(0x01C34,0x01C35) , // Lepcha Consonant Sign Nyin-do ➞ Lepcha Consonant Sign Kang
	range(0x0A823,0x0A824) , // Syloti Nagri Vowel Sign A ➞ Syloti Nagri Vowel Sign I
	range(0x0A880,0x0A881) , // Saurashtra Sign Anusvara ➞ Saurashtra Sign Visarga
	range(0x0A8B4,0x0A8C3) , // Saurashtra Consonant Sign Haaru ➞ Saurashtra Vowel Sign Au
	range(0x0A952,0x0A953) , // Rejang Consonant Sign H ➞ Rejang Virama
	range(0x0A9B4,0x0A9B5) , // Javanese Vowel Sign Tarung ➞ Javanese Vowel Sign Tolong
	range(0x0A9BA,0x0A9BB) , // Javanese Vowel Sign Taling ➞ Javanese Vowel Sign Dirga Mure
	range(0x0A9BE,0x0A9C0) , // Javanese Consonant Sign Pengkal ➞ Javanese Pangkon
	range(0x0AA2F,0x0AA30) , // Cham Vowel Sign O ➞ Cham Vowel Sign Ai
	range(0x0AA33,0x0AA34) , // Cham Consonant Sign Ya ➞ Cham Consonant Sign Ra
	range(0x0AAEE,0x0AAEF) , // Meetei Mayek Vowel Sign Au ➞ Meetei Mayek Vowel Sign Aau
	range(0x0ABE3,0x0ABE4) , // Meetei Mayek Vowel Sign Onap ➞ Meetei Mayek Vowel Sign Inap
	range(0x0ABE6,0x0ABE7) , // Meetei Mayek Vowel Sign Yenap ➞ Meetei Mayek Vowel Sign Sounap
	range(0x0ABE9,0x0ABEA) , // Meetei Mayek Vowel Sign Cheinap ➞ Meetei Mayek Vowel Sign Nung
	range(0x110B0,0x110B2) , // Kaithi Vowel Sign Aa ➞ Kaithi Vowel Sign Ii
	range(0x110B7,0x110B8) , // Kaithi Vowel Sign O ➞ Kaithi Vowel Sign Au
	range(0x11145,0x11146) , // Chakma Vowel Sign Aa ➞ Chakma Vowel Sign Ei
	range(0x111B3,0x111B5) , // Sharada Vowel Sign Aa ➞ Sharada Vowel Sign Ii
	range(0x111BF,0x111C0) , // Sharada Vowel Sign Au ➞ Sharada Sign Virama
	range(0x1122C,0x1122E) , // Khojki Vowel Sign Aa ➞ Khojki Vowel Sign Ii
	range(0x11232,0x11233) , // Khojki Vowel Sign O ➞ Khojki Vowel Sign Au
	range(0x112E0,0x112E2) , // Khudawadi Vowel Sign Aa ➞ Khudawadi Vowel Sign Ii
	range(0x11302,0x11303) , // Grantha Sign Anusvara ➞ Grantha Sign Visarga
	range(0x11341,0x11344) , // Grantha Vowel Sign U ➞ Grantha Vowel Sign Vocalic Rr
	range(0x11347,0x11348) , // Grantha Vowel Sign Ee ➞ Grantha Vowel Sign Ai
	range(0x1134B,0x1134D) , // Grantha Vowel Sign Oo ➞ Grantha Sign Virama
	range(0x11362,0x11363) , // Grantha Vowel Sign Vocalic L ➞ Grantha Vowel Sign Vocalic Ll
	range(0x11435,0x11437) , // Newa Vowel Sign Aa ➞ Newa Vowel Sign Ii
	range(0x11440,0x11441) , // Newa Vowel Sign O ➞ Newa Vowel Sign Au
	range(0x114B1,0x114B2) , // Tirhuta Vowel Sign I ➞ Tirhuta Vowel Sign Ii
	range(0x114BB,0x114BC) , // Tirhuta Vowel Sign Ai ➞ Tirhuta Vowel Sign O
	range(0x115B0,0x115B1) , // Siddham Vowel Sign I ➞ Siddham Vowel Sign Ii
	range(0x115B8,0x115BB) , // Siddham Vowel Sign E ➞ Siddham Vowel Sign Au
	range(0x11630,0x11632) , // Modi Vowel Sign Aa ➞ Modi Vowel Sign Ii
	range(0x1163B,0x1163C) , // Modi Vowel Sign O ➞ Modi Vowel Sign Au
	range(0x116AE,0x116AF) , // Takri Vowel Sign I ➞ Takri Vowel Sign Ii
	range(0x1182C,0x1182E) , // Dogra Vowel Sign Aa ➞ Dogra Vowel Sign Ii
	range(0x11931,0x11935) , // Dives Akuru Vowel Sign I ➞ Dives Akuru Vowel Sign E
	range(0x11937,0x11938) , // Dives Akuru Vowel Sign Ai ➞ Dives Akuru Vowel Sign O
	range(0x119D1,0x119D3) , // Nandinagari Vowel Sign Aa ➞ Nandinagari Vowel Sign Ii
	range(0x119DC,0x119DF) , // Nandinagari Vowel Sign O ➞ Nandinagari Sign Visarga
	range(0x11A57,0x11A58) , // Soyombo Vowel Sign Ai ➞ Soyombo Vowel Sign Au
	range(0x11D8A,0x11D8E) , // Gunjala Gondi Vowel Sign Aa ➞ Gunjala Gondi Vowel Sign Uu
	range(0x11D93,0x11D94) , // Gunjala Gondi Vowel Sign Oo ➞ Gunjala Gondi Vowel Sign Au
	range(0x11EF5,0x11EF6) , // Makasar Vowel Sign E ➞ Makasar Vowel Sign O
	range(0x11F34,0x11F35) , // Kawi Vowel Sign Aa ➞ Kawi Vowel Sign Alternate Aa
	range(0x11F3E,0x11F3F) , // Kawi Vowel Sign E ➞ Kawi Vowel Sign Ai
	range(0x16F51,0x16F87) , // Miao Sign Aspiration ➞ Miao Vowel Sign Ui
	range(0x16FF0,0x16FF1) , // Vietnamese Alternate Reading Mark Ca ➞ Vietnamese Alternate Reading Mark Nhay
];

const codepoints = [
	0x00903 , // Devanagari Sign Visarga
	0x0093B , // Devanagari Vowel Sign Ooe
	0x00A03 , // Gurmukhi Sign Visarga
	0x00A83 , // Gujarati Sign Visarga
	0x00AC9 , // Gujarati Vowel Sign Candra O
	0x00B40 , // Oriya Vowel Sign Ii
	0x00BBF , // Tamil Vowel Sign I
	0x00CBE , // Kannada Vowel Sign Aa
	0x00CF3 , // Kannada Sign Combining Anusvara Above Right
	0x00E33 , // Thai Character Sara Am
	0x00EB3 , // Lao Vowel Sign Am
	0x00F7F , // Tibetan Sign Rnam Bcad
	0x01031 , // Myanmar Vowel Sign E
	0x01084 , // Myanmar Vowel Sign Shan E
	0x01715 , // Tagalog Sign Pamudpod
	0x01734 , // Hanunoo Sign Pamudpod
	0x017B6 , // Khmer Vowel Sign Aa
	0x01A55 , // Tai Tham Consonant Sign Medial Ra
	0x01A57 , // Tai Tham Consonant Sign La Tang Lai
	0x01B04 , // Balinese Sign Bisah
	0x01B3B , // Balinese Vowel Sign Ra Repa Tedung
	0x01B82 , // Sundanese Sign Pangwisad
	0x01BA1 , // Sundanese Consonant Sign Pamingkal
	0x01BAA , // Sundanese Sign Pamaaeh
	0x01BE7 , // Batak Vowel Sign E
	0x01BEE , // Batak Vowel Sign U
	0x01CE1 , // Vedic Tone Atharvavedic Independent Svarita
	0x01CF7 , // Vedic Sign Atikrama
	0x0A827 , // Syloti Nagri Vowel Sign Oo
	0x0A983 , // Javanese Sign Wignyan
	0x0AA4D , // Cham Consonant Sign Final H
	0x0AAEB , // Meetei Mayek Vowel Sign Ii
	0x0AAF5 , // Meetei Mayek Vowel Sign Visarga
	0x0ABEC , // Meetei Mayek Lum Iyek
	0x11000 , // Brahmi Sign Candrabindu
	0x11002 , // Brahmi Sign Visarga
	0x11082 , // Kaithi Sign Visarga
	0x1112C , // Chakma Vowel Sign E
	0x11182 , // Sharada Sign Visarga
	0x111CE , // Sharada Vowel Sign Prishthamatra E
	0x11235 , // Khojki Sign Virama
	0x1133F , // Grantha Vowel Sign I
	0x11445 , // Newa Sign Visarga
	0x114B9 , // Tirhuta Vowel Sign E
	0x114BE , // Tirhuta Vowel Sign Au
	0x114C1 , // Tirhuta Sign Visarga
	0x115BE , // Siddham Sign Visarga
	0x1163E , // Modi Sign Visarga
	0x116AC , // Takri Sign Visarga
	0x116B6 , // Takri Sign Virama
	0x11726 , // Ahom Vowel Sign E
	0x11838 , // Dogra Sign Visarga
	0x1193D , // Dives Akuru Sign Halanta
	0x11940 , // Dives Akuru Medial Ya
	0x11942 , // Dives Akuru Medial Ra
	0x119E4 , // Nandinagari Vowel Sign Prishthamatra E
	0x11A39 , // Zanabazar Square Sign Visarga
	0x11A97 , // Soyombo Sign Visarga
	0x11C2F , // Bhaiksuki Vowel Sign Aa
	0x11C3E , // Bhaiksuki Sign Visarga
	0x11CA9 , // Marchen Subjoined Letter Ya
	0x11CB1 , // Marchen Vowel Sign I
	0x11CB4 , // Marchen Vowel Sign O
	0x11D96 , // Gunjala Gondi Sign Visarga
	0x11F03 , // Kawi Sign Visarga
	0x11F41 , // Kawi Sign Killer
	0x1D166 , // Musical Symbol Combining Sprechgesang Stem
	0x1D16D , // Musical Symbol Combining Augmentation Dot
];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
