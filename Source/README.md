
# Split

*Separate strings into their perceived characters.*

<br>

## Status

**Generally works, but not guaranteed.**

<br>

## Module

```
https://deno.land/x/split@v0.0.0/mod.ts
```

## Usage

### Split

```js
import { split } from 'https://deno.land/x/split/mod.ts';

const { log } = console;

const characters = split('D̵̢͇̼͕͚̪̎̑e̴̝̝͕̖̽̀͑̾͐ǹ̷̛̻͇͆̋ȍ̵͓̽͐̂̐̆ ̶̪̋̃̇̉m̷̱̙̳̙̤̎̇͂̚a̸̩̳̞͖̍k̵͎͈͇̦̜̝̐̂̎͠͠ę̶̲̪͎̉́͝ŝ̵̗͈̀ ̵͎̥͎͎́c̴̠̤̫̘̏̾͆̌͠o̶̫̦͎͍͙͐̑̏̈͊d̶̠̙͈̼͙͛i̴̟̠͕͋̄͂̕n̸̨̦̳̺̰̗͋̐͛͒͋͝g̶̢͔̃̊̀ ̸̢̡͕͕̤̜͆́̄̓͝f̷͙͍̦͉̳͈̃̇̈́̉̆̀ų̴̲̭̭̰̍̀̄͝ņ̴̥̱̲̤͌̏͘͠ͅ');

log(characters);
```

<br>

### Count

```js
import { count } from 'https://deno.land/x/split/mod.ts';

const { log } = console;

const characters = count('D̵̢͇̼͕͚̪̎̑e̴̝̝͕̖̽̀͑̾͐ǹ̷̛̻͇͆̋ȍ̵͓̽͐̂̐̆ ̶̪̋̃̇̉m̷̱̙̳̙̤̎̇͂̚a̸̩̳̞͖̍k̵͎͈͇̦̜̝̐̂̎͠͠ę̶̲̪͎̉́͝ŝ̵̗͈̀ ̵͎̥͎͎́c̴̠̤̫̘̏̾͆̌͠o̶̫̦͎͍͙͐̑̏̈͊d̶̠̙͈̼͙͛i̴̟̠͕͋̄͂̕n̸̨̦̳̺̰̗͋̐͛͒͋͝g̶̢͔̃̊̀ ̸̢̡͕͕̤̜͆́̄̓͝f̷͙͍̦͉̳͈̃̇̈́̉̆̀ų̴̲̭̭̰̍̀̄͝ņ̴̥̱̲̤͌̏͘͠ͅ');

log(characters);
```

<br>
