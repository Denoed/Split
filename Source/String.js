

const { fromCodePoint } = String;


const toCharCode = (char) =>
    char.charCodeAt(0);

const toChars = (string) =>
    [ ... string ];


export function toCharcodes (string) {
    return toChars(string)
        .map(toCharCode);
}

export function toUnicode (codepoints) {
    return fromCodePoint(...codepoints);
}