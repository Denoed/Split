
import Split from './Split.js';


/**
 *  Split a string into it's perceived characters.
 *
 *  ```javascript
 *  import { split } from "https://deno.land/x/split@v0.0.2/mod.ts";
 *  
 *  split('🎩🧶🎮'); // [ '🎩' , '🧶' , '🎮' ]
 */

export function split( string : string ) : string [] {
    return Split(string);
}


/**
 *  Count the number of perceived characters.
 *
 *  ```javascript
 *  import { count } from "https://deno.land/x/split@v0.0.2/mod.ts";
 *  
 *  split('⛳Hi🏀'); // 4
 */

export function count( string : string ) : number {
    return Split(string).length;
}
