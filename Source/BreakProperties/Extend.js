
function range(first,last){
    return (codepoint) => first <= codepoint && codepoint <= last;
}


const ranges = [
	range(0x00300,0x0036F) , // Combining Grave Accent ➞ Combining Latin Small Letter X
	range(0x00483,0x00487) , // Combining Cyrillic Titlo ➞ Combining Cyrillic Pokrytie
	range(0x00488,0x00489) , // Combining Cyrillic Hundred Thousands Sign ➞ Combining Cyrillic Millions Sign
	range(0x00591,0x005BD) , // Hebrew Accent Etnahta ➞ Hebrew Point Meteg
	range(0x005C1,0x005C2) , // Hebrew Point Shin Dot ➞ Hebrew Point Sin Dot
	range(0x005C4,0x005C5) , // Hebrew Mark Upper Dot ➞ Hebrew Mark Lower Dot
	range(0x00610,0x0061A) , // Arabic Sign Sallallahou Alayhe Wassallam ➞ Arabic Small Kasra
	range(0x0064B,0x0065F) , // Arabic Fathatan ➞ Arabic Wavy Hamza Below
	range(0x006D6,0x006DC) , // Arabic Small High Ligature Sad With Lam With Alef Maksura ➞ Arabic Small High Seen
	range(0x006DF,0x006E4) , // Arabic Small High Rounded Zero ➞ Arabic Small High Madda
	range(0x006E7,0x006E8) , // Arabic Small High Yeh ➞ Arabic Small High Noon
	range(0x006EA,0x006ED) , // Arabic Empty Centre Low Stop ➞ Arabic Small Low Meem
	range(0x00730,0x0074A) , // Syriac Pthaha Above ➞ Syriac Barrekh
	range(0x007A6,0x007B0) , // Thaana Abafili ➞ Thaana Sukun
	range(0x007EB,0x007F3) , // Nko Combining Short High Tone ➞ Nko Combining Double Dot Above
	range(0x00816,0x00819) , // Samaritan Mark In ➞ Samaritan Mark Dagesh
	range(0x0081B,0x00823) , // Samaritan Mark Epenthetic Yut ➞ Samaritan Vowel Sign A
	range(0x00825,0x00827) , // Samaritan Vowel Sign Short A ➞ Samaritan Vowel Sign U
	range(0x00829,0x0082D) , // Samaritan Vowel Sign Long I ➞ Samaritan Mark Nequdaa
	range(0x00859,0x0085B) , // Mandaic Affrication Mark ➞ Mandaic Gemination Mark
	range(0x00898,0x0089F) , // Arabic Small High Word Al-juz ➞ Arabic Half Madda Over Madda
	range(0x008CA,0x008E1) , // Arabic Small High Farsi Yeh ➞ Arabic Small High Sign Safha
	range(0x008E3,0x00902) , // Arabic Turned Damma Below ➞ Devanagari Sign Anusvara
	range(0x00941,0x00948) , // Devanagari Vowel Sign U ➞ Devanagari Vowel Sign Ai
	range(0x00951,0x00957) , // Devanagari Stress Sign Udatta ➞ Devanagari Vowel Sign Uue
	range(0x00962,0x00963) , // Devanagari Vowel Sign Vocalic L ➞ Devanagari Vowel Sign Vocalic Ll
	range(0x009C1,0x009C4) , // Bengali Vowel Sign U ➞ Bengali Vowel Sign Vocalic Rr
	range(0x009E2,0x009E3) , // Bengali Vowel Sign Vocalic L ➞ Bengali Vowel Sign Vocalic Ll
	range(0x00A01,0x00A02) , // Gurmukhi Sign Adak Bindi ➞ Gurmukhi Sign Bindi
	range(0x00A41,0x00A42) , // Gurmukhi Vowel Sign U ➞ Gurmukhi Vowel Sign Uu
	range(0x00A47,0x00A48) , // Gurmukhi Vowel Sign Ee ➞ Gurmukhi Vowel Sign Ai
	range(0x00A4B,0x00A4D) , // Gurmukhi Vowel Sign Oo ➞ Gurmukhi Sign Virama
	range(0x00A70,0x00A71) , // Gurmukhi Tippi ➞ Gurmukhi Addak
	range(0x00A81,0x00A82) , // Gujarati Sign Candrabindu ➞ Gujarati Sign Anusvara
	range(0x00AC1,0x00AC5) , // Gujarati Vowel Sign U ➞ Gujarati Vowel Sign Candra E
	range(0x00AC7,0x00AC8) , // Gujarati Vowel Sign E ➞ Gujarati Vowel Sign Ai
	range(0x00AE2,0x00AE3) , // Gujarati Vowel Sign Vocalic L ➞ Gujarati Vowel Sign Vocalic Ll
	range(0x00AFA,0x00AFF) , // Gujarati Sign Sukun ➞ Gujarati Sign Two-circle Nukta Above
	range(0x00B41,0x00B44) , // Oriya Vowel Sign U ➞ Oriya Vowel Sign Vocalic Rr
	range(0x00B55,0x00B56) , // Oriya Sign Overline ➞ Oriya Ai Length Mark
	range(0x00B62,0x00B63) , // Oriya Vowel Sign Vocalic L ➞ Oriya Vowel Sign Vocalic Ll
	range(0x00C3E,0x00C40) , // Telugu Vowel Sign Aa ➞ Telugu Vowel Sign Ii
	range(0x00C46,0x00C48) , // Telugu Vowel Sign E ➞ Telugu Vowel Sign Ai
	range(0x00C4A,0x00C4D) , // Telugu Vowel Sign O ➞ Telugu Sign Virama
	range(0x00C55,0x00C56) , // Telugu Length Mark ➞ Telugu Ai Length Mark
	range(0x00C62,0x00C63) , // Telugu Vowel Sign Vocalic L ➞ Telugu Vowel Sign Vocalic Ll
	range(0x00CCC,0x00CCD) , // Kannada Vowel Sign Au ➞ Kannada Sign Virama
	range(0x00CD5,0x00CD6) , // Kannada Length Mark ➞ Kannada Ai Length Mark
	range(0x00CE2,0x00CE3) , // Kannada Vowel Sign Vocalic L ➞ Kannada Vowel Sign Vocalic Ll
	range(0x00D00,0x00D01) , // Malayalam Sign Combining Anusvara Above ➞ Malayalam Sign Candrabindu
	range(0x00D3B,0x00D3C) , // Malayalam Sign Vertical Bar Virama ➞ Malayalam Sign Circular Virama
	range(0x00D41,0x00D44) , // Malayalam Vowel Sign U ➞ Malayalam Vowel Sign Vocalic Rr
	range(0x00D62,0x00D63) , // Malayalam Vowel Sign Vocalic L ➞ Malayalam Vowel Sign Vocalic Ll
	range(0x00DD2,0x00DD4) , // Sinhala Vowel Sign Ketti Is-pilla ➞ Sinhala Vowel Sign Ketti Paa-pilla
	range(0x00E34,0x00E3A) , // Thai Character Sara I ➞ Thai Character Phinthu
	range(0x00E47,0x00E4E) , // Thai Character Maitaikhu ➞ Thai Character Yamakkan
	range(0x00EB4,0x00EBC) , // Lao Vowel Sign I ➞ Lao Semivowel Sign Lo
	range(0x00EC8,0x00ECE) , // Lao Tone Mai Ek ➞ Lao Yamakkan
	range(0x00F18,0x00F19) , // Tibetan Astrological Sign -khyud Pa ➞ Tibetan Astrological Sign Sdong Tshugs
	range(0x00F71,0x00F7E) , // Tibetan Vowel Sign Aa ➞ Tibetan Sign Rjes Su Nga Ro
	range(0x00F80,0x00F84) , // Tibetan Vowel Sign Reversed I ➞ Tibetan Mark Halanta
	range(0x00F86,0x00F87) , // Tibetan Sign Lci Rtags ➞ Tibetan Sign Yang Rtags
	range(0x00F8D,0x00F97) , // Tibetan Subjoined Sign Lce Tsa Can ➞ Tibetan Subjoined Letter Ja
	range(0x00F99,0x00FBC) , // Tibetan Subjoined Letter Nya ➞ Tibetan Subjoined Letter Fixed-form Ra
	range(0x0102D,0x01030) , // Myanmar Vowel Sign I ➞ Myanmar Vowel Sign Uu
	range(0x01032,0x01037) , // Myanmar Vowel Sign Ai ➞ Myanmar Sign Dot Below
	range(0x01039,0x0103A) , // Myanmar Sign Virama ➞ Myanmar Sign Asat
	range(0x0103D,0x0103E) , // Myanmar Consonant Sign Medial Wa ➞ Myanmar Consonant Sign Medial Ha
	range(0x01058,0x01059) , // Myanmar Vowel Sign Vocalic L ➞ Myanmar Vowel Sign Vocalic Ll
	range(0x0105E,0x01060) , // Myanmar Consonant Sign Mon Medial Na ➞ Myanmar Consonant Sign Mon Medial La
	range(0x01071,0x01074) , // Myanmar Vowel Sign Geba Karen I ➞ Myanmar Vowel Sign Kayah Ee
	range(0x01085,0x01086) , // Myanmar Vowel Sign Shan E Above ➞ Myanmar Vowel Sign Shan Final Y
	range(0x0135D,0x0135F) , // Ethiopic Combining Gemination And Vowel Length Mark ➞ Ethiopic Combining Gemination Mark
	range(0x01712,0x01714) , // Tagalog Vowel Sign I ➞ Tagalog Sign Virama
	range(0x01732,0x01733) , // Hanunoo Vowel Sign I ➞ Hanunoo Vowel Sign U
	range(0x01752,0x01753) , // Buhid Vowel Sign I ➞ Buhid Vowel Sign U
	range(0x01772,0x01773) , // Tagbanwa Vowel Sign I ➞ Tagbanwa Vowel Sign U
	range(0x017B4,0x017B5) , // Khmer Vowel Inherent Aq ➞ Khmer Vowel Inherent Aa
	range(0x017B7,0x017BD) , // Khmer Vowel Sign I ➞ Khmer Vowel Sign Ua
	range(0x017C9,0x017D3) , // Khmer Sign Muusikatoan ➞ Khmer Sign Bathamasat
	range(0x0180B,0x0180D) , // Mongolian Free Variation Selector One ➞ Mongolian Free Variation Selector Three
	range(0x01885,0x01886) , // Mongolian Letter Ali Gali Baluda ➞ Mongolian Letter Ali Gali Three Baluda
	range(0x01920,0x01922) , // Limbu Vowel Sign A ➞ Limbu Vowel Sign U
	range(0x01927,0x01928) , // Limbu Vowel Sign E ➞ Limbu Vowel Sign O
	range(0x01939,0x0193B) , // Limbu Sign Mukphreng ➞ Limbu Sign Sa-i
	range(0x01A17,0x01A18) , // Buginese Vowel Sign I ➞ Buginese Vowel Sign U
	range(0x01A58,0x01A5E) , // Tai Tham Sign Mai Kang Lai ➞ Tai Tham Consonant Sign Sa
	range(0x01A65,0x01A6C) , // Tai Tham Vowel Sign I ➞ Tai Tham Vowel Sign Oa Below
	range(0x01A73,0x01A7C) , // Tai Tham Vowel Sign Oa Above ➞ Tai Tham Sign Khuen-lue Karan
	range(0x01AB0,0x01ABD) , // Combining Doubled Circumflex Accent ➞ Combining Parentheses Below
	range(0x01ABF,0x01ACE) , // Combining Latin Small Letter W Below ➞ Combining Latin Small Letter Insular T
	range(0x01B00,0x01B03) , // Balinese Sign Ulu Ricem ➞ Balinese Sign Surang
	range(0x01B36,0x01B3A) , // Balinese Vowel Sign Ulu ➞ Balinese Vowel Sign Ra Repa
	range(0x01B6B,0x01B73) , // Balinese Musical Symbol Combining Tegeh ➞ Balinese Musical Symbol Combining Gong
	range(0x01B80,0x01B81) , // Sundanese Sign Panyecek ➞ Sundanese Sign Panglayar
	range(0x01BA2,0x01BA5) , // Sundanese Consonant Sign Panyakra ➞ Sundanese Vowel Sign Panyuku
	range(0x01BA8,0x01BA9) , // Sundanese Vowel Sign Pamepet ➞ Sundanese Vowel Sign Paneuleung
	range(0x01BAB,0x01BAD) , // Sundanese Sign Virama ➞ Sundanese Consonant Sign Pasangan Wa
	range(0x01BE8,0x01BE9) , // Batak Vowel Sign Pakpak E ➞ Batak Vowel Sign Ee
	range(0x01BEF,0x01BF1) , // Batak Vowel Sign U For Simalungun Sa ➞ Batak Consonant Sign H
	range(0x01C2C,0x01C33) , // Lepcha Vowel Sign E ➞ Lepcha Consonant Sign T
	range(0x01C36,0x01C37) , // Lepcha Sign Ran ➞ Lepcha Sign Nukta
	range(0x01CD0,0x01CD2) , // Vedic Tone Karshana ➞ Vedic Tone Prenkha
	range(0x01CD4,0x01CE0) , // Vedic Sign Yajurvedic Midline Svarita ➞ Vedic Tone Rigvedic Kashmiri Independent Svarita
	range(0x01CE2,0x01CE8) , // Vedic Sign Visarga Svarita ➞ Vedic Sign Visarga Anudatta With Tail
	range(0x01CF8,0x01CF9) , // Vedic Tone Ring Above ➞ Vedic Tone Double Ring Above
	range(0x01DC0,0x01DFF) , // Combining Dotted Grave Accent ➞ Combining Right Arrowhead And Down Arrowhead Below
	range(0x020D0,0x020DC) , // Combining Left Harpoon Above ➞ Combining Four Dots Above
	range(0x020DD,0x020E0) , // Combining Enclosing Circle ➞ Combining Enclosing Circle Backslash
	range(0x020E2,0x020E4) , // Combining Enclosing Screen ➞ Combining Enclosing Upward Pointing Triangle
	range(0x020E5,0x020F0) , // Combining Reverse Solidus Overlay ➞ Combining Asterisk Above
	range(0x02CEF,0x02CF1) , // Coptic Combining Ni Above ➞ Coptic Combining Spiritus Lenis
	range(0x02DE0,0x02DFF) , // Combining Cyrillic Letter Be ➞ Combining Cyrillic Letter Iotified Big Yus
	range(0x0302A,0x0302D) , // Ideographic Level Tone Mark ➞ Ideographic Entering Tone Mark
	range(0x0302E,0x0302F) , // Hangul Single Dot Tone Mark ➞ Hangul Double Dot Tone Mark
	range(0x03099,0x0309A) , // Combining Katakana-hiragana Voiced Sound Mark ➞ Combining Katakana-hiragana Semi-voiced Sound Mark
	range(0x0A670,0x0A672) , // Combining Cyrillic Ten Millions Sign ➞ Combining Cyrillic Thousand Millions Sign
	range(0x0A674,0x0A67D) , // Combining Cyrillic Letter Ukrainian Ie ➞ Combining Cyrillic Payerok
	range(0x0A69E,0x0A69F) , // Combining Cyrillic Letter Ef ➞ Combining Cyrillic Letter Iotified E
	range(0x0A6F0,0x0A6F1) , // Bamum Combining Mark Koqndon ➞ Bamum Combining Mark Tukwentis
	range(0x0A825,0x0A826) , // Syloti Nagri Vowel Sign U ➞ Syloti Nagri Vowel Sign E
	range(0x0A8C4,0x0A8C5) , // Saurashtra Sign Virama ➞ Saurashtra Sign Candrabindu
	range(0x0A8E0,0x0A8F1) , // Combining Devanagari Digit Zero ➞ Combining Devanagari Sign Avagraha
	range(0x0A926,0x0A92D) , // Kayah Li Vowel Ue ➞ Kayah Li Tone Calya Plophu
	range(0x0A947,0x0A951) , // Rejang Vowel Sign I ➞ Rejang Consonant Sign R
	range(0x0A980,0x0A982) , // Javanese Sign Panyangga ➞ Javanese Sign Layar
	range(0x0A9B6,0x0A9B9) , // Javanese Vowel Sign Wulu ➞ Javanese Vowel Sign Suku Mendut
	range(0x0A9BC,0x0A9BD) , // Javanese Vowel Sign Pepet ➞ Javanese Consonant Sign Keret
	range(0x0AA29,0x0AA2E) , // Cham Vowel Sign Aa ➞ Cham Vowel Sign Oe
	range(0x0AA31,0x0AA32) , // Cham Vowel Sign Au ➞ Cham Vowel Sign Ue
	range(0x0AA35,0x0AA36) , // Cham Consonant Sign La ➞ Cham Consonant Sign Wa
	range(0x0AAB2,0x0AAB4) , // Tai Viet Vowel I ➞ Tai Viet Vowel U
	range(0x0AAB7,0x0AAB8) , // Tai Viet Mai Khit ➞ Tai Viet Vowel Ia
	range(0x0AABE,0x0AABF) , // Tai Viet Vowel Am ➞ Tai Viet Tone Mai Ek
	range(0x0AAEC,0x0AAED) , // Meetei Mayek Vowel Sign Uu ➞ Meetei Mayek Vowel Sign Aai
	range(0x0FE00,0x0FE0F) , // Variation Selector-1 ➞ Variation Selector-16
	range(0x0FE20,0x0FE2F) , // Combining Ligature Left Half ➞ Combining Cyrillic Titlo Right Half
	range(0x0FF9E,0x0FF9F) , // Halfwidth Katakana Voiced Sound Mark ➞ Halfwidth Katakana Semi-voiced Sound Mark
	range(0x10376,0x1037A) , // Combining Old Permic Letter An ➞ Combining Old Permic Letter Sii
	range(0x10A01,0x10A03) , // Kharoshthi Vowel Sign I ➞ Kharoshthi Vowel Sign Vocalic R
	range(0x10A05,0x10A06) , // Kharoshthi Vowel Sign E ➞ Kharoshthi Vowel Sign O
	range(0x10A0C,0x10A0F) , // Kharoshthi Vowel Length Mark ➞ Kharoshthi Sign Visarga
	range(0x10A38,0x10A3A) , // Kharoshthi Sign Bar Above ➞ Kharoshthi Sign Dot Below
	range(0x10AE5,0x10AE6) , // Manichaean Abbreviation Mark Above ➞ Manichaean Abbreviation Mark Below
	range(0x10D24,0x10D27) , // Hanifi Rohingya Sign Harbahay ➞ Hanifi Rohingya Sign Tassi
	range(0x10EAB,0x10EAC) , // Yezidi Combining Hamza Mark ➞ Yezidi Combining Madda Mark
	range(0x10EFD,0x10EFF) , // Arabic Small Low Word Sakta ➞ Arabic Small Low Word Madda
	range(0x10F46,0x10F50) , // Sogdian Combining Dot Below ➞ Sogdian Combining Stroke Below
	range(0x10F82,0x10F85) , // Old Uyghur Combining Dot Above ➞ Old Uyghur Combining Two Dots Below
	range(0x11038,0x11046) , // Brahmi Vowel Sign Aa ➞ Brahmi Virama
	range(0x11073,0x11074) , // Brahmi Vowel Sign Old Tamil Short E ➞ Brahmi Vowel Sign Old Tamil Short O
	range(0x1107F,0x11081) , // Brahmi Number Joiner ➞ Kaithi Sign Anusvara
	range(0x110B3,0x110B6) , // Kaithi Vowel Sign U ➞ Kaithi Vowel Sign Ai
	range(0x110B9,0x110BA) , // Kaithi Sign Virama ➞ Kaithi Sign Nukta
	range(0x11100,0x11102) , // Chakma Sign Candrabindu ➞ Chakma Sign Visarga
	range(0x11127,0x1112B) , // Chakma Vowel Sign A ➞ Chakma Vowel Sign Uu
	range(0x1112D,0x11134) , // Chakma Vowel Sign Ai ➞ Chakma Maayyaa
	range(0x11180,0x11181) , // Sharada Sign Candrabindu ➞ Sharada Sign Anusvara
	range(0x111B6,0x111BE) , // Sharada Vowel Sign U ➞ Sharada Vowel Sign O
	range(0x111C9,0x111CC) , // Sharada Sandhi Mark ➞ Sharada Extra Short Vowel Mark
	range(0x1122F,0x11231) , // Khojki Vowel Sign U ➞ Khojki Vowel Sign Ai
	range(0x11236,0x11237) , // Khojki Sign Nukta ➞ Khojki Sign Shadda
	range(0x112E3,0x112EA) , // Khudawadi Vowel Sign U ➞ Khudawadi Sign Virama
	range(0x11300,0x11301) , // Grantha Sign Combining Anusvara Above ➞ Grantha Sign Candrabindu
	range(0x1133B,0x1133C) , // Combining Bindu Below ➞ Grantha Sign Nukta
	range(0x11366,0x1136C) , // Combining Grantha Digit Zero ➞ Combining Grantha Digit Six
	range(0x11370,0x11374) , // Combining Grantha Letter A ➞ Combining Grantha Letter Pa
	range(0x11438,0x1143F) , // Newa Vowel Sign U ➞ Newa Vowel Sign Ai
	range(0x11442,0x11444) , // Newa Sign Virama ➞ Newa Sign Anusvara
	range(0x114B3,0x114B8) , // Tirhuta Vowel Sign U ➞ Tirhuta Vowel Sign Vocalic Ll
	range(0x114BF,0x114C0) , // Tirhuta Sign Candrabindu ➞ Tirhuta Sign Anusvara
	range(0x114C2,0x114C3) , // Tirhuta Sign Virama ➞ Tirhuta Sign Nukta
	range(0x115B2,0x115B5) , // Siddham Vowel Sign U ➞ Siddham Vowel Sign Vocalic Rr
	range(0x115BC,0x115BD) , // Siddham Sign Candrabindu ➞ Siddham Sign Anusvara
	range(0x115BF,0x115C0) , // Siddham Sign Virama ➞ Siddham Sign Nukta
	range(0x115DC,0x115DD) , // Siddham Vowel Sign Alternate U ➞ Siddham Vowel Sign Alternate Uu
	range(0x11633,0x1163A) , // Modi Vowel Sign U ➞ Modi Vowel Sign Ai
	range(0x1163F,0x11640) , // Modi Sign Virama ➞ Modi Sign Ardhacandra
	range(0x116B0,0x116B5) , // Takri Vowel Sign U ➞ Takri Vowel Sign Au
	range(0x1171D,0x1171F) , // Ahom Consonant Sign Medial La ➞ Ahom Consonant Sign Medial Ligating Ra
	range(0x11722,0x11725) , // Ahom Vowel Sign I ➞ Ahom Vowel Sign Uu
	range(0x11727,0x1172B) , // Ahom Vowel Sign Aw ➞ Ahom Sign Killer
	range(0x1182F,0x11837) , // Dogra Vowel Sign U ➞ Dogra Sign Anusvara
	range(0x11839,0x1183A) , // Dogra Sign Virama ➞ Dogra Sign Nukta
	range(0x1193B,0x1193C) , // Dives Akuru Sign Anusvara ➞ Dives Akuru Sign Candrabindu
	range(0x119D4,0x119D7) , // Nandinagari Vowel Sign U ➞ Nandinagari Vowel Sign Vocalic Rr
	range(0x119DA,0x119DB) , // Nandinagari Vowel Sign E ➞ Nandinagari Vowel Sign Ai
	range(0x11A01,0x11A0A) , // Zanabazar Square Vowel Sign I ➞ Zanabazar Square Vowel Length Mark
	range(0x11A33,0x11A38) , // Zanabazar Square Final Consonant Mark ➞ Zanabazar Square Sign Anusvara
	range(0x11A3B,0x11A3E) , // Zanabazar Square Cluster-final Letter Ya ➞ Zanabazar Square Cluster-final Letter Va
	range(0x11A51,0x11A56) , // Soyombo Vowel Sign I ➞ Soyombo Vowel Sign Oe
	range(0x11A59,0x11A5B) , // Soyombo Vowel Sign Vocalic R ➞ Soyombo Vowel Length Mark
	range(0x11A8A,0x11A96) , // Soyombo Final Consonant Sign G ➞ Soyombo Sign Anusvara
	range(0x11A98,0x11A99) , // Soyombo Gemination Mark ➞ Soyombo Subjoiner
	range(0x11C30,0x11C36) , // Bhaiksuki Vowel Sign I ➞ Bhaiksuki Vowel Sign Vocalic L
	range(0x11C38,0x11C3D) , // Bhaiksuki Vowel Sign E ➞ Bhaiksuki Sign Anusvara
	range(0x11C92,0x11CA7) , // Marchen Subjoined Letter Ka ➞ Marchen Subjoined Letter Za
	range(0x11CAA,0x11CB0) , // Marchen Subjoined Letter Ra ➞ Marchen Vowel Sign Aa
	range(0x11CB2,0x11CB3) , // Marchen Vowel Sign U ➞ Marchen Vowel Sign E
	range(0x11CB5,0x11CB6) , // Marchen Sign Anusvara ➞ Marchen Sign Candrabindu
	range(0x11D31,0x11D36) , // Masaram Gondi Vowel Sign Aa ➞ Masaram Gondi Vowel Sign Vocalic R
	range(0x11D3C,0x11D3D) , // Masaram Gondi Vowel Sign Ai ➞ Masaram Gondi Vowel Sign O
	range(0x11D3F,0x11D45) , // Masaram Gondi Vowel Sign Au ➞ Masaram Gondi Virama
	range(0x11D90,0x11D91) , // Gunjala Gondi Vowel Sign Ee ➞ Gunjala Gondi Vowel Sign Ai
	range(0x11EF3,0x11EF4) , // Makasar Vowel Sign I ➞ Makasar Vowel Sign U
	range(0x11F00,0x11F01) , // Kawi Sign Candrabindu ➞ Kawi Sign Anusvara
	range(0x11F36,0x11F3A) , // Kawi Vowel Sign I ➞ Kawi Vowel Sign Vocalic R
	range(0x13447,0x13455) , // Egyptian Hieroglyph Modifier Damaged At Top Start ➞ Egyptian Hieroglyph Modifier Damaged
	range(0x16AF0,0x16AF4) , // Bassa Vah Combining High Tone ➞ Bassa Vah Combining High-low Tone
	range(0x16B30,0x16B36) , // Pahawh Hmong Mark Cim Tub ➞ Pahawh Hmong Mark Cim Taum
	range(0x16F8F,0x16F92) , // Miao Tone Right ➞ Miao Tone Below
	range(0x1BC9D,0x1BC9E) , // Duployan Thick Letter Selector ➞ Duployan Double Mark
	range(0x1CF00,0x1CF2D) , // Znamenny Combining Mark Gorazdo Nizko S Kryzhem On Left ➞ Znamenny Combining Mark Kryzh On Left
	range(0x1CF30,0x1CF46) , // Znamenny Combining Tonal Range Mark Mrachno ➞ Znamenny Priznak Modifier Rog
	range(0x1D167,0x1D169) , // Musical Symbol Combining Tremolo-1 ➞ Musical Symbol Combining Tremolo-3
	range(0x1D16E,0x1D172) , // Musical Symbol Combining Flag-1 ➞ Musical Symbol Combining Flag-5
	range(0x1D17B,0x1D182) , // Musical Symbol Combining Accent ➞ Musical Symbol Combining Loure
	range(0x1D185,0x1D18B) , // Musical Symbol Combining Doit ➞ Musical Symbol Combining Triple Tongue
	range(0x1D1AA,0x1D1AD) , // Musical Symbol Combining Down Bow ➞ Musical Symbol Combining Snap Pizzicato
	range(0x1D242,0x1D244) , // Combining Greek Musical Triseme ➞ Combining Greek Musical Pentaseme
	range(0x1DA00,0x1DA36) , // Signwriting Head Rim ➞ Signwriting Air Sucking In
	range(0x1DA3B,0x1DA6C) , // Signwriting Mouth Closed Neutral ➞ Signwriting Excitement
	range(0x1DA9B,0x1DA9F) , // Signwriting Fill Modifier-2 ➞ Signwriting Fill Modifier-6
	range(0x1DAA1,0x1DAAF) , // Signwriting Rotation Modifier-2 ➞ Signwriting Rotation Modifier-16
	range(0x1E000,0x1E006) , // Combining Glagolitic Letter Azu ➞ Combining Glagolitic Letter Zhivete
	range(0x1E008,0x1E018) , // Combining Glagolitic Letter Zemlja ➞ Combining Glagolitic Letter Heru
	range(0x1E01B,0x1E021) , // Combining Glagolitic Letter Shta ➞ Combining Glagolitic Letter Yati
	range(0x1E023,0x1E024) , // Combining Glagolitic Letter Yu ➞ Combining Glagolitic Letter Small Yus
	range(0x1E026,0x1E02A) , // Combining Glagolitic Letter Yo ➞ Combining Glagolitic Letter Fita
	range(0x1E130,0x1E136) , // Nyiakeng Puachue Hmong Tone-b ➞ Nyiakeng Puachue Hmong Tone-d
	range(0x1E2EC,0x1E2EF) , // Wancho Tone Tup ➞ Wancho Tone Koini
	range(0x1E4EC,0x1E4EF) , // Nag Mundari Sign Muhor ➞ Nag Mundari Sign Sutuh
	range(0x1E8D0,0x1E8D6) , // Mende Kikakui Combining Number Teens ➞ Mende Kikakui Combining Number Millions
	range(0x1E944,0x1E94A) , // Adlam Alif Lengthener ➞ Adlam Nukta
	range(0x1F3FB,0x1F3FF) , // Emoji Modifier Fitzpatrick Type-1-2 ➞ Emoji Modifier Fitzpatrick Type-6
	range(0xE0020,0xE007F) , // Tag Space ➞ Cancel Tag
	range(0xE0100,0xE01EF) , // Variation Selector-17 ➞ Variation Selector-256
];

const codepoints = [
	0x005BF , // Hebrew Point Rafe
	0x005C7 , // Hebrew Point Qamats Qatan
	0x00670 , // Arabic Letter Superscript Alef
	0x00711 , // Syriac Letter Superscript Alaph
	0x007FD , // Nko Dantayalan
	0x0093A , // Devanagari Vowel Sign Oe
	0x0093C , // Devanagari Sign Nukta
	0x0094D , // Devanagari Sign Virama
	0x00981 , // Bengali Sign Candrabindu
	0x009BC , // Bengali Sign Nukta
	0x009BE , // Bengali Vowel Sign Aa
	0x009CD , // Bengali Sign Virama
	0x009D7 , // Bengali Au Length Mark
	0x009FE , // Bengali Sandhi Mark
	0x00A3C , // Gurmukhi Sign Nukta
	0x00A51 , // Gurmukhi Sign Udaat
	0x00A75 , // Gurmukhi Sign Yakash
	0x00ABC , // Gujarati Sign Nukta
	0x00ACD , // Gujarati Sign Virama
	0x00B01 , // Oriya Sign Candrabindu
	0x00B3C , // Oriya Sign Nukta
	0x00B3E , // Oriya Vowel Sign Aa
	0x00B3F , // Oriya Vowel Sign I
	0x00B4D , // Oriya Sign Virama
	0x00B57 , // Oriya Au Length Mark
	0x00B82 , // Tamil Sign Anusvara
	0x00BBE , // Tamil Vowel Sign Aa
	0x00BC0 , // Tamil Vowel Sign Ii
	0x00BCD , // Tamil Sign Virama
	0x00BD7 , // Tamil Au Length Mark
	0x00C00 , // Telugu Sign Combining Candrabindu Above
	0x00C04 , // Telugu Sign Combining Anusvara Above
	0x00C3C , // Telugu Sign Nukta
	0x00C81 , // Kannada Sign Candrabindu
	0x00CBC , // Kannada Sign Nukta
	0x00CBF , // Kannada Vowel Sign I
	0x00CC2 , // Kannada Vowel Sign Uu
	0x00CC6 , // Kannada Vowel Sign E
	0x00D3E , // Malayalam Vowel Sign Aa
	0x00D4D , // Malayalam Sign Virama
	0x00D57 , // Malayalam Au Length Mark
	0x00D81 , // Sinhala Sign Candrabindu
	0x00DCA , // Sinhala Sign Al-lakuna
	0x00DCF , // Sinhala Vowel Sign Aela-pilla
	0x00DD6 , // Sinhala Vowel Sign Diga Paa-pilla
	0x00DDF , // Sinhala Vowel Sign Gayanukitta
	0x00E31 , // Thai Character Mai Han-akat
	0x00EB1 , // Lao Vowel Sign Mai Kan
	0x00F35 , // Tibetan Mark Ngas Bzung Nyi Zla
	0x00F37 , // Tibetan Mark Ngas Bzung Sgor Rtags
	0x00F39 , // Tibetan Mark Tsa -phru
	0x00FC6 , // Tibetan Symbol Padma Gdan
	0x01082 , // Myanmar Consonant Sign Shan Medial Wa
	0x0108D , // Myanmar Sign Shan Council Emphatic Tone
	0x0109D , // Myanmar Vowel Sign Aiton Ai
	0x017C6 , // Khmer Sign Nikahit
	0x017DD , // Khmer Sign Atthacan
	0x0180F , // Mongolian Free Variation Selector Four
	0x018A9 , // Mongolian Letter Ali Gali Dagalga
	0x01932 , // Limbu Small Letter Anusvara
	0x01A1B , // Buginese Vowel Sign Ae
	0x01A56 , // Tai Tham Consonant Sign Medial La
	0x01A60 , // Tai Tham Sign Sakot
	0x01A62 , // Tai Tham Vowel Sign Mai Sat
	0x01A7F , // Tai Tham Combining Cryptogrammic Dot
	0x01ABE , // Combining Parentheses Overlay
	0x01B34 , // Balinese Sign Rerekan
	0x01B35 , // Balinese Vowel Sign Tedung
	0x01B3C , // Balinese Vowel Sign La Lenga
	0x01B42 , // Balinese Vowel Sign Pepet
	0x01BE6 , // Batak Sign Tompi
	0x01BED , // Batak Vowel Sign Karo O
	0x01CED , // Vedic Sign Tiryak
	0x01CF4 , // Vedic Tone Candra Above
	0x0200C , // Zero Width Non-joiner
	0x020E1 , // Combining Left Right Arrow Above
	0x02D7F , // Tifinagh Consonant Joiner
	0x0A66F , // Combining Cyrillic Vzmet
	0x0A802 , // Syloti Nagri Sign Dvisvara
	0x0A806 , // Syloti Nagri Sign Hasanta
	0x0A80B , // Syloti Nagri Sign Anusvara
	0x0A82C , // Syloti Nagri Sign Alternate Hasanta
	0x0A8FF , // Devanagari Vowel Sign Ay
	0x0A9B3 , // Javanese Sign Cecak Telu
	0x0A9E5 , // Myanmar Sign Shan Saw
	0x0AA43 , // Cham Consonant Sign Final Ng
	0x0AA4C , // Cham Consonant Sign Final M
	0x0AA7C , // Myanmar Sign Tai Laing Tone-2
	0x0AAB0 , // Tai Viet Mai Kang
	0x0AAC1 , // Tai Viet Tone Mai Tho
	0x0AAF6 , // Meetei Mayek Virama
	0x0ABE5 , // Meetei Mayek Vowel Sign Anap
	0x0ABE8 , // Meetei Mayek Vowel Sign Unap
	0x0ABED , // Meetei Mayek Apun Iyek
	0x0FB1E , // Hebrew Point Judeo-spanish Varika
	0x101FD , // Phaistos Disc Sign Combining Oblique Stroke
	0x102E0 , // Coptic Epact Thousands Mark
	0x10A3F , // Kharoshthi Virama
	0x11001 , // Brahmi Sign Anusvara
	0x11070 , // Brahmi Sign Old Tamil Virama
	0x110C2 , // Kaithi Vowel Sign Vocalic R
	0x11173 , // Mahajani Sign Nukta
	0x111CF , // Sharada Sign Inverted Candrabindu
	0x11234 , // Khojki Sign Anusvara
	0x1123E , // Khojki Sign Sukun
	0x11241 , // Khojki Vowel Sign Vocalic R
	0x112DF , // Khudawadi Sign Anusvara
	0x1133E , // Grantha Vowel Sign Aa
	0x11340 , // Grantha Vowel Sign Ii
	0x11357 , // Grantha Au Length Mark
	0x11446 , // Newa Sign Nukta
	0x1145E , // Newa Sandhi Mark
	0x114B0 , // Tirhuta Vowel Sign Aa
	0x114BA , // Tirhuta Vowel Sign Short E
	0x114BD , // Tirhuta Vowel Sign Short O
	0x115AF , // Siddham Vowel Sign Aa
	0x1163D , // Modi Sign Anusvara
	0x116AB , // Takri Sign Anusvara
	0x116AD , // Takri Vowel Sign Aa
	0x116B7 , // Takri Sign Nukta
	0x11930 , // Dives Akuru Vowel Sign Aa
	0x1193E , // Dives Akuru Virama
	0x11943 , // Dives Akuru Sign Nukta
	0x119E0 , // Nandinagari Sign Virama
	0x11A47 , // Zanabazar Square Subjoiner
	0x11C3F , // Bhaiksuki Sign Virama
	0x11D3A , // Masaram Gondi Vowel Sign E
	0x11D47 , // Masaram Gondi Ra-kara
	0x11D95 , // Gunjala Gondi Sign Anusvara
	0x11D97 , // Gunjala Gondi Virama
	0x11F40 , // Kawi Vowel Sign Eu
	0x11F42 , // Kawi Conjoiner
	0x13440 , // Egyptian Hieroglyph Mirror Horizontally
	0x16F4F , // Miao Sign Consonant Modifier Bar
	0x16FE4 , // Khitan Small Script Filler
	0x1D165 , // Musical Symbol Combining Stem
	0x1DA75 , // Signwriting Upper Body Tilting From Hip Joints
	0x1DA84 , // Signwriting Location Head Neck
	0x1E08F , // Combining Cyrillic Small Letter Byelorussian-ukrainian I
	0x1E2AE , // Toto Sign Rising Tone
];




export default function inRange(codepoint){
    
    if(codepoints.includes(codepoint))
        return true;
    
    if(ranges.find((test) => test(codepoint)))
        return true;
        
    return false;
}
