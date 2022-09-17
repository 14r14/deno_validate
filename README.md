## deno_validate

### A simple validation library for Deno

## Usage

```ts
import { * as denoValidate } from "https://deno.land/x/deno_validate/mod.ts";

const { isEmail } = denoValidate;

isEmail("test1@test.com"); // true

```

## API

| Function                   | Description                                                                                                            |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `isEmail(str)`             | Checks if the string is an email. `str` the string to check.                                                           |
| `isEmpty(str)`             | Checks if the string is empty. `str` the string to check.                                                              |
| `isLength(str [,options])` | Checks if the string's length falls in a range. `str` string to check. `options` defaults to `{min: 0, max:undefined}` |
| ```equals(str, comparison)```                     | Checks if ```str``` is equal to its ```comparision```.                                                                       |
| ```contains(str, seed [,options])```                     | Checks if ```str``` contains the ```seed```. ```options``` defaults to ```{ignoreCase:false,minOccurrences:1}```                                                             |
| ```matches(str, pattern)```                     | Checks if ```str``` matches the ```pattern```.                                                              |
| ```isBase32(str)```                     | Checks if ```str``` is base32 encoded.                                                              |
| ```isBase58(str)```                     | Checks if ```str``` is base58 encoded.                                                              |
| ```isBase64(str)```                     | Checks if ```str``` is base64 encoded.                                                              |
| ```isAlpha(str [,locale] [,options])```                     | Checks if ```str``` contains only letters (a-zA-Z). ```locale``` defaults to ```en-US```.  ```options``` which can be either strings or Regex will be ignored.                                                            |

