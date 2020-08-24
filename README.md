# deno_is_unc_path

[![tag](https://img.shields.io/github/release/justjavac/deno_is_unc_path)](https://github.com/justjavac/deno_is_unc_path/releases)
[![Build Status](https://github.com/justjavac/deno_is_unc_path/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_is_unc_path/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_is_unc_path)](https://github.com/justjavac/deno_is_unc_path/blob/master/LICENSE)

Whether the filepath is a windows [UNC](https://msdn.microsoft.com/en-us/library/gg465305.aspx) file path.

ABNF syntax:

```plain
UNC                = "\\" host-name "\" share-name  [ "\" object-name ]
 host-name          = "[" IPv6address "]" / IPv4address / reg-name  
    ; IPv6address, IPv4address, and reg-name as specified in [RFC3986] 
 share-name         = 1*80pchar
 pchar              = %x20-21 / %x23-29 / %x2D-2E / %x30-39 / %x40-5A / %x5E-7B / %x7D-FF  
 object-name        = *path-name [ "\" file-name ]
 path-name          = 1*255pchar
 file-name          = 1*255fchar [ ":" stream-name [ ":" stream-type ] ]
 fchar              = %x20-21 / %x23-29 / %x2B-2E / %x30-39 / %x3B / %x3D / %x40-5B / %x5D-7B / %x7D-FF 
 stream-name        = *schar
 schar              = %x01-2E / %x30-39 / %x3B-5B /%x5D-FF
 stream-type        = 1*schar
 ```

## Usage

```ts
import isUncPath from "https://deno.land/x/is_unc_path/mod.ts";

// return `true`
isUncPath('\\/foo/bar');
isUncPath('\\\\foo/bar');
isUncPath('\\\\foo\\admin$');
isUncPath('\\\\foo\\admin$\\system32');
isUncPath('\\\\foo\\temp');
isUncPath('\\\\/foo/bar');
isUncPath('\\\\\\/foo/bar');

// return `false`
isUncPath('/foo/bar');
isUncPath('/');
isUncPath('/foo');
isUncPath('/foo/');
isUncPath('c:');
isUncPath('c:.');
isUncPath('c:./');
isUncPath('c:./file');
isUncPath('c:/');
isUncPath('c:/file');
```

## License

[deno_is_unc_path](https://github.com/justjavac/deno_is_unc_path) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
