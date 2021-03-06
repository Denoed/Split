
import Split from './Split.js';


/**
 *  Split a string into it's perceived characters.
 *
 *  ```javascript
 *  import { split } from 'https://deno.land/x/split/mod.ts';
 *  
 *  split('๐ฉ๐งถ๐ฎ'); // [ '๐ฉ' , '๐งถ' , '๐ฎ' ]
 */

export function split( string : string ) : string [] {
    return Split(string);
}


/**
 *  Count the number of perceived characters.
 *
 *  ```javascript
 *  import { count } from 'https://deno.land/x/split/mod.ts';
 *  
 *  count('โณHi๐'); // 4
 */

export function count( string : string ) : number {
    return Split(string).length;
}
