var Defs = function(){
  var ternBasicDefs = [];
  ternBasicDefs[0] = ({
    "!name": "ecma5",
    "!define": {"Error.prototype": "Error.prototype"},
    "Infinity": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Infinity",
      "!doc": "A numeric value representing infinity."
    },
    "undefined": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/undefined",
      "!doc": "The value undefined."
    },
    "NaN": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/NaN",
      "!doc": "A value representing Not-A-Number."
    },
    "Object": {
      "!type": "fn()",
      "getPrototypeOf": {
        "!type": "fn(obj: ?) -> ?",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/getPrototypeOf",
        "!doc": "Returns the prototype (i.e. the internal prototype) of the specified object."
      },
      "create": {
        "!type": "fn(proto: ?) -> !custom:Object_create",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create",
        "!doc": "Creates a new object with the specified prototype object and properties."
      },
      "defineProperty": {
        "!type": "fn(obj: ?, prop: string, desc: ?)",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/defineProperty",
        "!doc": "Defines a new property directly on an object, or modifies an existing property on an object, and returns the object. If you want to see how to use the Object.defineProperty method with a binary-flags-like syntax, see this article."
      },
      "defineProperties": {
        "!type": "fn(obj: ?, props: ?)",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/defineProperty",
        "!doc": "Defines a new property directly on an object, or modifies an existing property on an object, and returns the object. If you want to see how to use the Object.defineProperty method with a binary-flags-like syntax, see this article."
      },
      "getOwnPropertyDescriptor": {
        "!type": "fn(obj: ?, prop: string) -> ?",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor",
        "!doc": "Returns a property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object."
      },
      "keys": {
        "!type": "fn(obj: ?) -> [string]",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys",
        "!doc": "Returns an array of a given object's own enumerable properties, in the same order as that provided by a for-in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well)."
      },
      "getOwnPropertyNames": {
        "!type": "fn(obj: ?) -> [string]",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",
        "!doc": "Returns an array of all properties (enumerable or not) found directly upon a given object."
      },
      "seal": {
        "!type": "fn(obj: ?)",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/seal",
        "!doc": "Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable."
      },
      "isSealed": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/isSealed",
        "!doc": "Determine if an object is sealed."
      },
      "freeze": {
        "!type": "fn(obj: ?)",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/freeze",
        "!doc": "Freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. The method returns the object being frozen."
      },
      "isFrozen": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/isFrozen",
        "!doc": "Determine if an object is frozen."
      },
      "prototype": {
        "!stdProto": "Object",
        "toString": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/toString",
          "!doc": "Returns a string representing the object."
        },
        "toLocaleString": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/toLocaleString",
          "!doc": "Returns a string representing the object. This method is meant to be overriden by derived objects for locale-specific purposes."
        },
        "valueOf": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/valueOf",
          "!doc": "Returns the primitive value of the specified object"
        },
        "hasOwnProperty": {
          "!type": "fn(prop: string) -> bool",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",
          "!doc": "Returns a boolean indicating whether the object has the specified property."
        },
        "propertyIsEnumerable": {
          "!type": "fn(prop: string) -> bool",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable",
          "!doc": "Returns a Boolean indicating whether the specified property is enumerable."
        }
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object",
      "!doc": "Creates an object wrapper."
    },
    "Function": {
      "!type": "fn(body: string) -> fn()",
      "prototype": {
        "!stdProto": "Function",
        "apply": {
          "!type": "fn(this: ?, args: [?])",
          "!effects": [
            "call and return !this this=!0 !1.<i> !1.<i> !1.<i>"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/apply",
          "!doc": "Calls a function with a given this value and arguments provided as an array (or an array like object)."
        },
        "call": {
          "!type": "fn(this: ?, args?: ?) -> !this.!ret",
          "!effects": [
            "call and return !this this=!0 !1 !2 !3 !4"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/call",
          "!doc": "Calls a function with a given this value and arguments provided individually."
        },
        "bind": {
          "!type": "fn(this: ?, args?: ?) -> !custom:Function_bind",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind",
          "!doc": "Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function was called."
        },
        "prototype": "?"
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function",
      "!doc": "Every function in JavaScript is actually a Function object."
    },
    "Array": {
      "!type": "fn(size: number) -> !custom:Array_ctor",
      "isArray": {
        "!type": "fn(value: ?) -> bool",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/isArray",
        "!doc": "Returns true if an object is an array, false if it is not."
      },
      "prototype": {
        "!stdProto": "Array",
        "length": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/length",
          "!doc": "An unsigned, 32-bit integer that specifies the number of elements in an array."
        },
        "concat": {
          "!type": "fn(other: [?]) -> !this",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/concat",
          "!doc": "Returns a new array comprised of this array joined with other array(s) and/or value(s)."
        },
        "join": {
          "!type": "fn(separator?: string) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/join",
          "!doc": "Joins all elements of an array into a string."
        },
        "splice": {
          "!type": "fn(pos: number, amount: number)",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/splice",
          "!doc": "Changes the content of an array, adding new elements while removing old elements."
        },
        "pop": {
          "!type": "fn() -> !this.<i>",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/pop",
          "!doc": "Removes the last element from an array and returns that element."
        },
        "push": {
          "!type": "fn(newelt: ?) -> number",
          "!effects": [
            "propagate !0 !this.<i>"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/push",
          "!doc": "Mutates an array by appending the given elements and returning the new length of the array."
        },
        "shift": {
          "!type": "fn() -> !this.<i>",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/shift",
          "!doc": "Removes the first element from an array and returns that element. This method changes the length of the array."
        },
        "unshift": {
          "!type": "fn(newelt: ?) -> number",
          "!effects": [
            "propagate !0 !this.<i>"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/unshift",
          "!doc": "Adds one or more elements to the beginning of an array and returns the new length of the array."
        },
        "slice": {
          "!type": "fn(from: number, to?: number) -> !this",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/slice",
          "!doc": "Returns a shallow copy of a portion of an array."
        },
        "reverse": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/reverse",
          "!doc": "Reverses an array in place.  The first array element becomes the last and the last becomes the first."
        },
        "sort": {
          "!type": "fn(compare?: fn(a: ?, b: ?) -> number)",
          "!effects": [
            "call !0 !this.<i> !this.<i>"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/sort",
          "!doc": "Sorts the elements of an array in place and returns the array."
        },
        "indexOf": {
          "!type": "fn(elt: ?, from?: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf",
          "!doc": "Returns the first index at which a given element can be found in the array, or -1 if it is not present."
        },
        "lastIndexOf": {
          "!type": "fn(elt: ?, from?: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
          "!doc": "Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."
        },
        "every": {
          "!type": "fn(test: fn(elt: ?, i: number) -> bool, context?: ?) -> bool",
          "!effects": [
            "call !0 this=!1 !this.<i> number"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/every",
          "!doc": "Tests whether all elements in the array pass the test implemented by the provided function."
        },
        "some": {
          "!type": "fn(test: fn(elt: ?, i: number) -> bool, context?: ?) -> bool",
          "!effects": [
            "call !0 this=!1 !this.<i> number"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/some",
          "!doc": "Tests whether some element in the array passes the test implemented by the provided function."
        },
        "filter": {
          "!type": "fn(test: fn(elt: ?, i: number) -> bool, context?: ?) -> !this",
          "!effects": [
            "call !0 this=!1 !this.<i> number"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/filter",
          "!doc": "Creates a new array with all elements that pass the test implemented by the provided function."
        },
        "forEach": {
          "!type": "fn(f: fn(elt: ?, i: number), context?: ?)",
          "!effects": [
            "call !0 this=!1 !this.<i> number"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach",
          "!doc": "Executes a provided function once per array element."
        },
        "map": {
          "!type": "fn(f: fn(elt: ?, i: number) -> ?, context?: ?) -> [!0.!ret]",
          "!effects": [
            "call !0 this=!1 !this.<i> number"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map",
          "!doc": "Creates a new array with the results of calling a provided function on every element in this array."
        },
        "reduce": {
          "!type": "fn(combine: fn(sum: ?, elt: ?, i: number) -> ?, init?: ?) -> !0.!ret",
          "!effects": [
            "call !0 !1 !this.<i> number"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/Reduce",
          "!doc": "Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value."
        },
        "reduceRight": {
          "!type": "fn(combine: fn(sum: ?, elt: ?, i: number) -> ?, init?: ?) -> !0.!ret",
          "!effects": [
            "call !0 !1 !this.<i> number"
          ],
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/ReduceRight",
          "!doc": "Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value."
        }
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array",
      "!doc": "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
    },
    "String": {
      "!type": "fn(value: ?) -> string",
      "fromCharCode": {
        "!type": "fn(code: number) -> string",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode",
        "!doc": "Returns a string created by using the specified sequence of Unicode values."
      },
      "prototype": {
        "!stdProto": "String",
        "length": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/String/length",
          "!doc": "Represents the length of a string."
        },
        "<i>": "string",
        "charAt": {
          "!type": "fn(i: number) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/charAt",
          "!doc": "Returns the specified character from a string."
        },
        "charCodeAt": {
          "!type": "fn(i: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/charCodeAt",
          "!doc": "Returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000)."
        },
        "indexOf": {
          "!type": "fn(char: string, from?: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/indexOf",
          "!doc": "Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex,\nreturns -1 if the value is not found."
        },
        "lastIndexOf": {
          "!type": "fn(char: string, from?: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/lastIndexOf",
          "!doc": "Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found. The calling string is searched backward, starting at fromIndex."
        },
        "substring": {
          "!type": "fn(from: number, to?: number) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/substring",
          "!doc": "Returns a subset of a string between one index and another, or through the end of the string."
        },
        "substr": {
          "!type": "fn(from: number, length?: number) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/substr",
          "!doc": "Returns the characters in a string beginning at the specified location through the specified number of characters."
        },
        "slice": {
          "!type": "fn(from: number, to?: number) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/slice",
          "!doc": "Extracts a section of a string and returns a new string."
        },
        "trim": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/Trim",
          "!doc": "Removes whitespace from both ends of the string."
        },
        "trimLeft": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/TrimLeft",
          "!doc": "Removes whitespace from the left end of the string."
        },
        "trimRight": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/TrimRight",
          "!doc": "Removes whitespace from the right end of the string."
        },
        "toUpperCase": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/toUpperCase",
          "!doc": "Returns the calling string value converted to uppercase."
        },
        "toLowerCase": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/toLowerCase",
          "!doc": "Returns the calling string value converted to lowercase."
        },
        "toLocaleUpperCase": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase",
          "!doc": "Returns the calling string value converted to upper case, according to any locale-specific case mappings."
        },
        "toLocaleLowerCase": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase",
          "!doc": "Returns the calling string value converted to lower case, according to any locale-specific case mappings."
        },
        "split": {
          "!type": "fn(pattern: string) -> [string]",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/split",
          "!doc": "Splits a String object into an array of strings by separating the string into substrings."
        },
        "concat": {
          "!type": "fn(other: string) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/concat",
          "!doc": "Combines the text of two or more strings and returns a new string."
        },
        "localeCompare": {
          "!type": "fn(other: string) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/localeCompare",
          "!doc": "Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order."
        },
        "match": {
          "!type": "fn(pattern: +RegExp) -> [string]",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/match",
          "!doc": "Used to retrieve the matches when matching a string against a regular expression."
        },
        "replace": {
          "!type": "fn(pattern: +RegExp, replacement: string) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/replace",
          "!doc": "Returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."
        },
        "search": {
          "!type": "fn(pattern: +RegExp) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/search",
          "!doc": "Executes the search for a match between a regular expression and this String object."
        }
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String",
      "!doc": "The String global object is a constructor for strings, or a sequence of characters."
    },
    "Number": {
      "!type": "fn(value: ?) -> number",
      "MAX_VALUE": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/MAX_VALUE",
        "!doc": "The maximum numeric value representable in JavaScript."
      },
      "MIN_VALUE": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/MIN_VALUE",
        "!doc": "The smallest positive numeric value representable in JavaScript."
      },
      "POSITIVE_INFINITY": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY",
        "!doc": "A value representing the positive Infinity value."
      },
      "NEGATIVE_INFINITY": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY",
        "!doc": "A value representing the negative Infinity value."
      },
      "prototype": {
        "!stdProto": "Number",
        "toString": {
          "!type": "fn(radix?: number) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toString",
          "!doc": "Returns a string representing the specified Number object"
        },
        "toFixed": {
          "!type": "fn(digits: number) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toFixed",
          "!doc": "Formats a number using fixed-point notation"
        },
        "toExponential": {
          "!type": "fn(digits: number) -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toExponential",
          "!doc": "Returns a string representing the Number object in exponential notation"
        }
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number",
      "!doc": "The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor."
    },
    "Boolean": {
      "!type": "fn(value: ?) -> bool",
      "prototype": {
        "!stdProto": "Boolean"
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Boolean",
      "!doc": "The Boolean object is an object wrapper for a boolean value."
    },
    "RegExp": {
      "!type": "fn(source: string, flags?: string)",
      "prototype": {
        "!stdProto": "RegExp",
        "exec": {
          "!type": "fn(input: string) -> [string]",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/exec",
          "!doc": "Executes a search for a match in a specified string. Returns a result array, or null."
        },
        "compile": {
          "!type": "fn(source: string, flags?: string)",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp",
          "!doc": "Creates a regular expression object for matching text with a pattern."
        },
        "test": {
          "!type": "fn(input: string) -> bool",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/test",
          "!doc": "Executes the search for a match between a regular expression and a specified string. Returns true or false."
        },
        "global": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp",
          "!doc": "Creates a regular expression object for matching text with a pattern."
        },
        "ignoreCase": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp",
          "!doc": "Creates a regular expression object for matching text with a pattern."
        },
        "multiline": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/multiline",
          "!doc": "Reflects whether or not to search in strings across multiple lines.\n"
        },
        "source": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/source",
          "!doc": "A read-only property that contains the text of the pattern, excluding the forward slashes.\n"
        },
        "lastIndex": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/lastIndex",
          "!doc": "A read/write integer property that specifies the index at which to start the next match."
        }
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp",
      "!doc": "Creates a regular expression object for matching text with a pattern."
    },
    "Date": {
      "!type": "fn(ms: number)",
      "parse": {
        "!type": "fn(source: string) -> +Date",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/parse",
        "!doc": "Parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC."
      },
      "UTC": {
        "!type": "fn(year: number, month: number, date: number, hour?: number, min?: number, sec?: number, ms?: number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/UTC",
        "!doc": "Accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time."
      },
      "now": {
        "!type": "fn() -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/now",
        "!doc": "Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC."
      },
      "prototype": {
        "toUTCString": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toUTCString",
          "!doc": "Converts a date to a string, using the universal time convention."
        },
        "toISOString": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toISOString",
          "!doc": "JavaScript provides a direct way to convert a date object into a string in ISO format, the ISO 8601 Extended Format."
        },
        "toDateString": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toDateString",
          "!doc": "Returns the date portion of a Date object in human readable form in American English."
        },
        "toTimeString": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toTimeString",
          "!doc": "Returns the time portion of a Date object in human readable form in American English."
        },
        "toLocaleDateString": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toLocaleDateString",
          "!doc": "Converts a date to a string, returning the \"date\" portion using the operating system's locale's conventions.\n"
        },
        "toLocaleTimeString": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString",
          "!doc": "Converts a date to a string, returning the \"time\" portion using the current locale's conventions."
        },
        "getTime": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getTime",
          "!doc": "Returns the numeric value corresponding to the time for the specified date according to universal time."
        },
        "getFullYear": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getFullYear",
          "!doc": "Returns the year of the specified date according to local time."
        },
        "getYear": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getYear",
          "!doc": "Returns the year in the specified date according to local time."
        },
        "getMonth": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getMonth",
          "!doc": "Returns the month in the specified date according to local time."
        },
        "getUTCMonth": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getUTCMonth",
          "!doc": "Returns the month of the specified date according to universal time.\n"
        },
        "getDate": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getDate",
          "!doc": "Returns the day of the month for the specified date according to local time."
        },
        "getUTCDate": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getUTCDate",
          "!doc": "Returns the day (date) of the month in the specified date according to universal time.\n"
        },
        "getDay": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getDay",
          "!doc": "Returns the day of the week for the specified date according to local time."
        },
        "getUTCDay": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getUTCDay",
          "!doc": "Returns the day of the week in the specified date according to universal time.\n"
        },
        "getHours": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getHours",
          "!doc": "Returns the hour for the specified date according to local time."
        },
        "getUTCHours": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getUTCHours",
          "!doc": "Returns the hours in the specified date according to universal time.\n"
        },
        "getMinutes": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getMinutes",
          "!doc": "Returns the minutes in the specified date according to local time."
        },
        "getUTCMinutes": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date",
          "!doc": "Creates JavaScript Date instances which let you work with dates and times."
        },
        "getSeconds": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getSeconds",
          "!doc": "Returns the seconds in the specified date according to local time."
        },
        "getUTCSeconds": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getUTCSeconds",
          "!doc": "Returns the seconds in the specified date according to universal time.\n"
        },
        "getMilliseconds": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getMilliseconds",
          "!doc": "Returns the milliseconds in the specified date according to local time."
        },
        "getUTCMilliseconds": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds",
          "!doc": "Returns the milliseconds in the specified date according to universal time.\n"
        },
        "getTimezoneOffset": {
          "!type": "fn() -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset",
          "!doc": "Returns the time-zone offset from UTC, in minutes, for the current locale."
        },
        "setTime": {
          "!type": "fn(date: +Date) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setTime",
          "!doc": "Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.\n"
        },
        "setFullYear": {
          "!type": "fn(year: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setFullYear",
          "!doc": "Sets the full year for a specified date according to local time.\n"
        },
        "setUTCFullYear": {
          "!type": "fn(year: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCFullYear",
          "!doc": "Sets the full year for a specified date according to universal time.\n"
        },
        "setMonth": {
          "!type": "fn(month: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setMonth",
          "!doc": "Set the month for a specified date according to local time."
        },
        "setUTCMonth": {
          "!type": "fn(month: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCMonth",
          "!doc": "Sets the month for a specified date according to universal time.\n"
        },
        "setDate": {
          "!type": "fn(day: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setDate",
          "!doc": "Sets the day of the month for a specified date according to local time."
        },
        "setUTCDate": {
          "!type": "fn(day: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCDate",
          "!doc": "Sets the day of the month for a specified date according to universal time.\n"
        },
        "setHours": {
          "!type": "fn(hour: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setHours",
          "!doc": "Sets the hours for a specified date according to local time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance."
        },
        "setUTCHours": {
          "!type": "fn(hour: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCHours",
          "!doc": "Sets the hour for a specified date according to universal time.\n"
        },
        "setMinutes": {
          "!type": "fn(min: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setMinutes",
          "!doc": "Sets the minutes for a specified date according to local time."
        },
        "setUTCMinutes": {
          "!type": "fn(min: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCMinutes",
          "!doc": "Sets the minutes for a specified date according to universal time.\n"
        },
        "setSeconds": {
          "!type": "fn(sec: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setSeconds",
          "!doc": "Sets the seconds for a specified date according to local time."
        },
        "setUTCSeconds": {
          "!type": "fn(sec: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCSeconds",
          "!doc": "Sets the seconds for a specified date according to universal time.\n"
        },
        "setMilliseconds": {
          "!type": "fn(ms: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setMilliseconds",
          "!doc": "Sets the milliseconds for a specified date according to local time.\n"
        },
        "setUTCMilliseconds": {
          "!type": "fn(ms: number) -> number",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds",
          "!doc": "Sets the milliseconds for a specified date according to universal time.\n"
        }
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date",
      "!doc": "Creates JavaScript Date instances which let you work with dates and times."
    },
    "Error": {
      "!type": "fn(message: string)",
      "prototype": {
        "name": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Error/name",
          "!doc": "A name for the type of error."
        },
        "message": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Error/message",
          "!doc": "A human-readable description of the error."
        }
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Error",
      "!doc": "Creates an error object."
    },
    "SyntaxError": {
      "!type": "fn(message: string)",
      "prototype": "Error.prototype",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/SyntaxError",
      "!doc": "Represents an error when trying to interpret syntactically invalid code."
    },
    "ReferenceError": {
      "!type": "fn(message: string)",
      "prototype": "Error.prototype",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/ReferenceError",
      "!doc": "Represents an error when a non-existent variable is referenced."
    },
    "URIError": {
      "!type": "fn(message: string)",
      "prototype": "Error.prototype",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/URIError",
      "!doc": "Represents an error when a malformed URI is encountered."
    },
    "EvalError": {
      "!type": "fn(message: string)",
      "prototype": "Error.prototype",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/EvalError",
      "!doc": "Represents an error regarding the eval function."
    },
    "RangeError": {
      "!type": "fn(message: string)",
      "prototype": "Error.prototype",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RangeError",
      "!doc": "Represents an error when a number is not within the correct range allowed."
    },
    "parseInt": {
      "!type": "fn(string: string, radix?: number) -> number",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseInt",
      "!doc": "Parses a string argument and returns an integer of the specified radix or base."
    },
    "parseFloat": {
      "!type": "fn(string: string) -> number",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseFloat",
      "!doc": "Parses a string argument and returns a floating point number."
    },
    "isNaN": {
      "!type": "fn(value: number) -> bool",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isNaN",
      "!doc": "Determines whether a value is NaN or not. Be careful, this function is broken. You may be interested in ECMAScript 6 Number.isNaN."
    },
    "eval": {
      "!type": "fn(code: string) -> ?",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/eval",
      "!doc": "Evaluates JavaScript code represented as a string."
    },
    "encodeURI": {
      "!type": "fn(uri: string) -> string",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURI",
      "!doc": "Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two \"surrogate\" characters)."
    },
    "encodeURIComponent": {
      "!type": "fn(uri: string) -> string",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent",
      "!doc": "Encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two \"surrogate\" characters)."
    },
    "decodeURI": {
      "!type": "fn(uri: string) -> string",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/decodeURI",
      "!doc": "Decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine."
    },
    "decodeURIComponent": {
      "!type": "fn(uri: string) -> string",
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/decodeURIComponent",
      "!doc": "Decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine."
    },
    "Math": {
      "E": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/E",
        "!doc": "The base of natural logarithms, e, approximately 2.718."
      },
      "LN2": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/LN2",
        "!doc": "The natural logarithm of 2, approximately 0.693."
      },
      "LN10": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/LN10",
        "!doc": "The natural logarithm of 10, approximately 2.302."
      },
      "LOG2E": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/LOG2E",
        "!doc": "The base 2 logarithm of E (approximately 1.442)."
      },
      "LOG10E": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/LOG10E",
        "!doc": "The base 10 logarithm of E (approximately 0.434)."
      },
      "SQRT1_2": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/SQRT1_2",
        "!doc": "The square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707."
      },
      "SQRT2": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/SQRT2",
        "!doc": "The square root of 2, approximately 1.414."
      },
      "PI": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/PI",
        "!doc": "The ratio of the circumference of a circle to its diameter, approximately 3.14159."
      },
      "abs": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/abs",
        "!doc": "Returns the absolute value of a number."
      },
      "cos": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/cos",
        "!doc": "Returns the cosine of a number."
      },
      "sin": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/sin",
        "!doc": "Returns the sine of a number."
      },
      "tan": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/tan",
        "!doc": "Returns the tangent of a number."
      },
      "acos": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/acos",
        "!doc": "Returns the arccosine (in radians) of a number."
      },
      "asin": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/asin",
        "!doc": "Returns the arcsine (in radians) of a number."
      },
      "atan": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/atan",
        "!doc": "Returns the arctangent (in radians) of a number."
      },
      "atan2": {
        "!type": "fn(number, number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/atan2",
        "!doc": "Returns the arctangent of the quotient of its arguments."
      },
      "ceil": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/ceil",
        "!doc": "Returns the smallest integer greater than or equal to a number."
      },
      "floor": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/floor",
        "!doc": "Returns the largest integer less than or equal to a number."
      },
      "round": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/round",
        "!doc": "Returns the value of a number rounded to the nearest integer."
      },
      "exp": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/exp",
        "!doc": "Returns Ex, where x is the argument, and E is Euler's constant, the base of the natural logarithms."
      },
      "log": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/log",
        "!doc": "Returns the natural logarithm (base E) of a number."
      },
      "sqrt": {
        "!type": "fn(number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/sqrt",
        "!doc": "Returns the square root of a number."
      },
      "pow": {
        "!type": "fn(number, number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/pow",
        "!doc": "Returns base to the exponent power, that is, baseexponent."
      },
      "max": {
        "!type": "fn(number, number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/max",
        "!doc": "Returns the largest of zero or more numbers."
      },
      "min": {
        "!type": "fn(number, number) -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/min",
        "!doc": "Returns the smallest of zero or more numbers."
      },
      "random": {
        "!type": "fn() -> number",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random",
        "!doc": "Returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range."
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math",
      "!doc": "A built-in object that has properties and methods for mathematical constants and functions."
    },
    "JSON": {
      "parse": {
        "!type": "fn(json: string) -> ?",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/parse",
        "!doc": "Parse a string as JSON, optionally transforming the value produced by parsing."
      },
      "stringify": {
        "!type": "fn(value: ?) -> string",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify",
        "!doc": "Convert a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified."
      },
      "!url": "https://developer.mozilla.org/en-US/docs/JSON",
      "!doc": "JSON (JavaScript Object Notation) is a data-interchange format.  It closely resembles a subset of JavaScript syntax, although it is not a strict subset. (See JSON in the JavaScript Reference for full details.)  It is useful when writing any kind of JavaScript-based application, including websites and browser extensions.  For example, you might store user information in JSON format in a cookie, or you might store extension preferences in JSON in a string-valued browser preference."
    }
  });
  ternBasicDefs[1] = ({
    "!name": "browser",
    "location": {
      "assign": {
        "!type": "fn(url: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "Load the document at the provided URL."
      },
      "replace": {
        "!type": "fn(url: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "Replace the current document with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session history, meaning the user won't be able to use the Back button to navigate to it."
      },
      "reload": {
        "!type": "fn()",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "Reload the document from the current URL. forceget is a boolean, which, when it is true, causes the page to always be reloaded from the server. If it is false or not specified, the browser may reload the page from its cache."
      },
      "origin": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The origin of the URL."
      },
      "hash": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The part of the URL that follows the # symbol, including the # symbol."
      },
      "search": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The part of the URL that follows the ? symbol, including the ? symbol."
      },
      "pathname": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The path (relative to the host)."
      },
      "port": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The port number of the URL."
      },
      "hostname": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The host name (without the port number or square brackets)."
      },
      "host": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The host name and port number."
      },
      "protocol": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The protocol of the URL."
      },
      "href": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
        "!doc": "The entire URL."
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.location",
      "!doc": "Returns a location object with information about the current location of the document. Assigning to the location property changes the current page to the new address."
    },
    "Node": {
      "!type": "fn()",
      "prototype": {
        "parentElement": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.parentElement",
          "!doc": "Returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element."
        },
        "textContent": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.textContent",
          "!doc": "Gets or sets the text content of a node and its descendants."
        },
        "baseURI": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.baseURI",
          "!doc": "The absolute base URI of a node or null if unable to obtain an absolute URI."
        },
        "localName": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.localName",
          "!doc": "Returns the local part of the qualified name of this node."
        },
        "prefix": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.prefix",
          "!doc": "Returns the namespace prefix of the specified node, or null if no prefix is specified. This property is read only."
        },
        "namespaceURI": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.namespaceURI",
          "!doc": "The namespace URI of the node, or null if the node is not in a namespace (read-only). When the node is a document, it returns the XML namespace for the current document."
        },
        "ownerDocument": {
          "!type": "+Document",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.ownerDocument",
          "!doc": "The ownerDocument property returns the top-level document object for this node."
        },
        "attributes": {
          "!type": "+NamedNodeMap",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.attributes",
          "!doc": "A collection of all attribute nodes registered to the specified node. It is a NamedNodeMap,not an Array, so it has no Array methods and the Attr nodes' indexes may differ among browsers."
        },
        "nextSibling": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.nextSibling",
          "!doc": "Returns the node immediately following the specified one in its parent's childNodes list, or null if the specified node is the last node in that list."
        },
        "previousSibling": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.previousSibling",
          "!doc": "Returns the node immediately preceding the specified one in its parent's childNodes list, null if the specified node is the first in that list."
        },
        "lastChild": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.lastChild",
          "!doc": "Returns the last child of a node."
        },
        "firstChild": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.firstChild",
          "!doc": "Returns the node's first child in the tree, or null if the node is childless. If the node is a Document, it returns the first node in the list of its direct children."
        },
        "childNodes": {
          "!type": "+NodeList",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.childNodes",
          "!doc": "Returns a collection of child nodes of the given element."
        },
        "parentNode": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.parentNode",
          "!doc": "Returns the parent of the specified node in the DOM tree."
        },
        "nodeType": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.nodeType",
          "!doc": "Returns an integer code representing the type of the node."
        },
        "nodeValue": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.nodeValue",
          "!doc": "Returns or sets the value of the current node."
        },
        "nodeName": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.nodeName",
          "!doc": "Returns the name of the current node as a string."
        },
        "tagName": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.nodeName",
          "!doc": "Returns the name of the current node as a string."
        },
        "insertBefore": {
          "!type": "fn(newElt: +Element, before: +Element) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.insertBefore",
          "!doc": "Inserts the specified node before a reference element as a child of the current node."
        },
        "replaceChild": {
          "!type": "fn(newElt: +Element, oldElt: +Element) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.replaceChild",
          "!doc": "Replaces one child node of the specified element with another."
        },
        "removeChild": {
          "!type": "fn(oldElt: +Element) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.removeChild",
          "!doc": "Removes a child node from the DOM. Returns removed node."
        },
        "appendChild": {
          "!type": "fn(newElt: +Element) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.appendChild",
          "!doc": "Adds a node to the end of the list of children of a specified parent node. If the node already exists it is removed from current parent node, then added to new parent node."
        },
        "hasChildNodes": {
          "!type": "fn() -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.hasChildNodes",
          "!doc": "Returns a Boolean value indicating whether the current Node has child nodes or not."
        },
        "cloneNode": {
          "!type": "fn(deep: bool) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.cloneNode",
          "!doc": "Returns a duplicate of the node on which this method was called."
        },
        "normalize": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.normalize",
          "!doc": "Puts the specified node and all of its subtree into a \"normalized\" form. In a normalized subtree, no text nodes in the subtree are empty and there are no adjacent text nodes."
        },
        "isSupported": {
          "!type": "fn(features: string, version: number) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.isSupported",
          "!doc": "Tests whether the DOM implementation implements a specific feature and that feature is supported by this node."
        },
        "hasAttributes": {
          "!type": "fn() -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.hasAttributes",
          "!doc": "Returns a boolean value of true or false, indicating if the current element has any attributes or not."
        },
        "lookupPrefix": {
          "!type": "fn(uri: string) -> string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.lookupPrefix",
          "!doc": "Returns the prefix for a given namespaceURI if present, and null if not. When multiple prefixes are possible, the result is implementation-dependent."
        },
        "isDefaultNamespace": {
          "!type": "fn(uri: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.isDefaultNamespace",
          "!doc": "Accepts a namespace URI as an argument and returns true if the namespace is the default namespace on the given node or false if not."
        },
        "lookupNamespaceURI": {
          "!type": "fn(uri: string) -> string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.lookupNamespaceURI",
          "!doc": "Takes a prefix and returns the namespaceURI associated with it on the given node if found (and null if not). Supplying null for the prefix will return the default namespace."
        },
        "addEventListener": {
          "!type": "fn(type: string, listener: fn(e: +Event), capture: bool)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/EventTarget.addEventListener",
          "!doc": "Registers a single event listener on a single target. The event target may be a single element in a document, the document itself, a window, or an XMLHttpRequest."
        },
        "removeEventListener": {
          "!type": "fn(type: string, listener: fn(), capture: bool)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/EventTarget.removeEventListener",
          "!doc": "Allows the removal of event listeners from the event target."
        },
        "isSameNode": {
          "!type": "fn(other: +Node) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.isSameNode",
          "!doc": "Tests whether two nodes are the same, that is they reference the same object."
        },
        "isEqualNode": {
          "!type": "fn(other: +Node) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.isEqualNode",
          "!doc": "Tests whether two nodes are equal."
        },
        "compareDocumentPosition": {
          "!type": "fn(other: +Node) -> number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.compareDocumentPosition",
          "!doc": "Compares the position of the current node against another node in any other document."
        },
        "contains": {
          "!type": "fn(other: +Node) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Node.contains",
          "!doc": "Indicates whether a node is a descendent of a given node."
        },
        "dispatchEvent": {
          "!type": "fn(event: +Event) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/EventTarget.dispatchEvent",
          "!doc": "Dispatches an event into the event system. The event is subject to the same capturing and bubbling behavior as directly dispatched events."
        },
        "ELEMENT_NODE": "number",
        "ATTRIBUTE_NODE": "number",
        "TEXT_NODE": "number",
        "CDATA_SECTION_NODE": "number",
        "ENTITY_REFERENCE_NODE": "number",
        "ENTITY_NODE": "number",
        "PROCESSING_INSTRUCTION_NODE": "number",
        "COMMENT_NODE": "number",
        "DOCUMENT_NODE": "number",
        "DOCUMENT_TYPE_NODE": "number",
        "DOCUMENT_FRAGMENT_NODE": "number",
        "NOTATION_NODE": "number",
        "DOCUMENT_POSITION_DISCONNECTED": "number",
        "DOCUMENT_POSITION_PRECEDING": "number",
        "DOCUMENT_POSITION_FOLLOWING": "number",
        "DOCUMENT_POSITION_CONTAINS": "number",
        "DOCUMENT_POSITION_CONTAINED_BY": "number",
        "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC": "number"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Node",
      "!doc": "A Node is an interface from which a number of DOM types inherit, and allows these various types to be treated (or tested) similarly."
    },
    "Element": {
      "!type": "fn()",
      "prototype": {
        "!proto": "Node.prototype",
        "getAttribute": {
          "!type": "fn(name: string) -> string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getAttribute",
          "!doc": "Returns the value of the named attribute on the specified element. If the named attribute does not exist, the value returned will either be null or \"\" (the empty string)."
        },
        "setAttribute": {
          "!type": "fn(name: string, value: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.setAttribute",
          "!doc": "Adds a new attribute or changes the value of an existing attribute on the specified element."
        },
        "removeAttribute": {
          "!type": "fn(name: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.removeAttribute",
          "!doc": "Removes an attribute from the specified element."
        },
        "getAttributeNode": {
          "!type": "fn(name: string) -> +Attr",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getAttributeNode",
          "!doc": "Returns the specified attribute of the specified element, as an Attr node."
        },
        "getElementsByTagName": {
          "!type": "fn(tagName: string) -> +NodeList",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getElementsByTagName",
          "!doc": "Returns a list of elements with the given tag name. The subtree underneath the specified element is searched, excluding the element itself. The returned list is live, meaning that it updates itself with the DOM tree automatically. Consequently, there is no need to call several times element.getElementsByTagName with the same element and arguments."
        },
        "getElementsByTagNameNS": {
          "!type": "fn(ns: string, tagName: string) -> +NodeList",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getElementsByTagNameNS",
          "!doc": "Returns a list of elements with the given tag name belonging to the given namespace."
        },
        "getAttributeNS": {
          "!type": "fn(ns: string, name: string) -> string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getAttributeNS",
          "!doc": "Returns the string value of the attribute with the specified namespace and name. If the named attribute does not exist, the value returned will either be null or \"\" (the empty string)."
        },
        "setAttributeNS": {
          "!type": "fn(ns: string, name: string, value: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.setAttributeNS",
          "!doc": "Adds a new attribute or changes the value of an attribute with the given namespace and name."
        },
        "removeAttributeNS": {
          "!type": "fn(ns: string, name: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.removeAttributeNS",
          "!doc": "removeAttributeNS removes the specified attribute from an element."
        },
        "getAttributeNodeNS": {
          "!type": "fn(ns: string, name: string) -> +Attr",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getAttributeNodeNS",
          "!doc": "Returns the Attr node for the attribute with the given namespace and name."
        },
        "hasAttribute": {
          "!type": "fn(name: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.hasAttribute",
          "!doc": "hasAttribute returns a boolean value indicating whether the specified element has the specified attribute or not."
        },
        "hasAttributeNS": {
          "!type": "fn(ns: string, name: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.hasAttributeNS",
          "!doc": "hasAttributeNS returns a boolean value indicating whether the current element has the specified attribute."
        },
        "focus": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.focus",
          "!doc": "Sets focus on the specified element, if it can be focused."
        },
        "blur": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.blur",
          "!doc": "The blur method removes keyboard focus from the current element."
        },
        "scrollIntoView": {
          "!type": "fn(top: bool)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.scrollIntoView",
          "!doc": "The scrollIntoView() method scrolls the element into view."
        },
        "scrollByLines": {
          "!type": "fn(lines: number)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/window.scrollByLines",
          "!doc": "Scrolls the document by the given number of lines."
        },
        "scrollByPages": {
          "!type": "fn(pages: number)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/window.scrollByPages",
          "!doc": "Scrolls the current document by the specified number of pages."
        },
        "getElementsByClassName": {
          "!type": "fn(name: string) -> +NodeList",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.getElementsByClassName",
          "!doc": "Returns a set of elements which have all the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName on any element; it will return only elements which are descendants of the specified root element with the given class names."
        },
        "querySelector": {
          "!type": "fn(selectors: string) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.querySelector",
          "!doc": "Returns the first element that is a descendent of the element on which it is invoked that matches the specified group of selectors."
        },
        "querySelectorAll": {
          "!type": "fn(selectors: string) -> +NodeList",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.querySelectorAll",
          "!doc": "Returns a non-live NodeList of all elements descended from the element on which it is invoked that match the specified group of CSS selectors."
        },
        "getClientRects": {
          "!type": "fn() -> [+ClientRect]",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getClientRects",
          "!doc": "Returns a collection of rectangles that indicate the bounding rectangles for each box in a client."
        },
        "getBoundingClientRect": {
          "!type": "fn() -> +ClientRect",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getBoundingClientRect",
          "!doc": "Returns a text rectangle object that encloses a group of text rectangles."
        },
        "setAttributeNode": {
          "!type": "fn(attr: +Attr) -> +Attr",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.setAttributeNode",
          "!doc": "Adds a new Attr node to the specified element."
        },
        "removeAttributeNode": {
          "!type": "fn(attr: +Attr) -> +Attr",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.removeAttributeNode",
          "!doc": "Removes the specified attribute from the current element."
        },
        "setAttributeNodeNS": {
          "!type": "fn(attr: +Attr) -> +Attr",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.setAttributeNodeNS",
          "!doc": "Adds a new namespaced attribute node to an element."
        },
        "insertAdjacentHTML": {
          "!type": "fn(position: string, text: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.insertAdjacentHTML",
          "!doc": "Parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on and thus it does not corrupt the existing elements inside the element. This, and avoiding the extra step of serialization make it much faster than direct innerHTML manipulation."
        },
        "children": {
          "!type": "+HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.children",
          "!doc": "Returns a collection of child elements of the given element."
        },
        "childElementCount": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.childElementCount",
          "!doc": "Returns the number of child elements of the given element."
        },
        "className": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.className",
          "!doc": "Gets and sets the value of the class attribute of the specified element."
        },
        "style": {
          "cssText": "string",
          "alignmentBaseline": "string",
          "background": "string",
          "backgroundAttachment": "string",
          "backgroundClip": "string",
          "backgroundColor": "string",
          "backgroundImage": "string",
          "backgroundOrigin": "string",
          "backgroundPosition": "string",
          "backgroundPositionX": "string",
          "backgroundPositionY": "string",
          "backgroundRepeat": "string",
          "backgroundRepeatX": "string",
          "backgroundRepeatY": "string",
          "backgroundSize": "string",
          "baselineShift": "string",
          "border": "string",
          "borderBottom": "string",
          "borderBottomColor": "string",
          "borderBottomLeftRadius": "string",
          "borderBottomRightRadius": "string",
          "borderBottomStyle": "string",
          "borderBottomWidth": "string",
          "borderCollapse": "string",
          "borderColor": "string",
          "borderImage": "string",
          "borderImageOutset": "string",
          "borderImageRepeat": "string",
          "borderImageSlice": "string",
          "borderImageSource": "string",
          "borderImageWidth": "string",
          "borderLeft": "string",
          "borderLeftColor": "string",
          "borderLeftStyle": "string",
          "borderLeftWidth": "string",
          "borderRadius": "string",
          "borderRight": "string",
          "borderRightColor": "string",
          "borderRightStyle": "string",
          "borderRightWidth": "string",
          "borderSpacing": "string",
          "borderStyle": "string",
          "borderTop": "string",
          "borderTopColor": "string",
          "borderTopLeftRadius": "string",
          "borderTopRightRadius": "string",
          "borderTopStyle": "string",
          "borderTopWidth": "string",
          "borderWidth": "string",
          "bottom": "string",
          "boxShadow": "string",
          "boxSizing": "string",
          "captionSide": "string",
          "clear": "string",
          "clip": "string",
          "clipPath": "string",
          "clipRule": "string",
          "color": "string",
          "colorInterpolation": "string",
          "colorInterpolationFilters": "string",
          "colorProfile": "string",
          "colorRendering": "string",
          "content": "string",
          "counterIncrement": "string",
          "counterReset": "string",
          "cursor": "string",
          "direction": "string",
          "display": "string",
          "dominantBaseline": "string",
          "emptyCells": "string",
          "enableBackground": "string",
          "fill": "string",
          "fillOpacity": "string",
          "fillRule": "string",
          "filter": "string",
          "float": "string",
          "floodColor": "string",
          "floodOpacity": "string",
          "font": "string",
          "fontFamily": "string",
          "fontSize": "string",
          "fontStretch": "string",
          "fontStyle": "string",
          "fontVariant": "string",
          "fontWeight": "string",
          "glyphOrientationHorizontal": "string",
          "glyphOrientationVertical": "string",
          "height": "string",
          "imageRendering": "string",
          "kerning": "string",
          "left": "string",
          "letterSpacing": "string",
          "lightingColor": "string",
          "lineHeight": "string",
          "listStyle": "string",
          "listStyleImage": "string",
          "listStylePosition": "string",
          "listStyleType": "string",
          "margin": "string",
          "marginBottom": "string",
          "marginLeft": "string",
          "marginRight": "string",
          "marginTop": "string",
          "marker": "string",
          "markerEnd": "string",
          "markerMid": "string",
          "markerStart": "string",
          "mask": "string",
          "maxHeight": "string",
          "maxWidth": "string",
          "minHeight": "string",
          "minWidth": "string",
          "opacity": "string",
          "orphans": "string",
          "outline": "string",
          "outlineColor": "string",
          "outlineOffset": "string",
          "outlineStyle": "string",
          "outlineWidth": "string",
          "overflow": "string",
          "overflowWrap": "string",
          "overflowX": "string",
          "overflowY": "string",
          "padding": "string",
          "paddingBottom": "string",
          "paddingLeft": "string",
          "paddingRight": "string",
          "paddingTop": "string",
          "page": "string",
          "pageBreakAfter": "string",
          "pageBreakBefore": "string",
          "pageBreakInside": "string",
          "pointerEvents": "string",
          "position": "string",
          "quotes": "string",
          "resize": "string",
          "right": "string",
          "shapeRendering": "string",
          "size": "string",
          "speak": "string",
          "src": "string",
          "stopColor": "string",
          "stopOpacity": "string",
          "stroke": "string",
          "strokeDasharray": "string",
          "strokeDashoffset": "string",
          "strokeLinecap": "string",
          "strokeLinejoin": "string",
          "strokeMiterlimit": "string",
          "strokeOpacity": "string",
          "strokeWidth": "string",
          "tabSize": "string",
          "tableLayout": "string",
          "textAlign": "string",
          "textAnchor": "string",
          "textDecoration": "string",
          "textIndent": "string",
          "textLineThrough": "string",
          "textLineThroughColor": "string",
          "textLineThroughMode": "string",
          "textLineThroughStyle": "string",
          "textLineThroughWidth": "string",
          "textOverflow": "string",
          "textOverline": "string",
          "textOverlineColor": "string",
          "textOverlineMode": "string",
          "textOverlineStyle": "string",
          "textOverlineWidth": "string",
          "textRendering": "string",
          "textShadow": "string",
          "textTransform": "string",
          "textUnderline": "string",
          "textUnderlineColor": "string",
          "textUnderlineMode": "string",
          "textUnderlineStyle": "string",
          "textUnderlineWidth": "string",
          "top": "string",
          "unicodeBidi": "string",
          "unicodeRange": "string",
          "vectorEffect": "string",
          "verticalAlign": "string",
          "visibility": "string",
          "whiteSpace": "string",
          "width": "string",
          "wordBreak": "string",
          "wordSpacing": "string",
          "wordWrap": "string",
          "writingMode": "string",
          "zIndex": "string",
          "zoom": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.style",
          "!doc": "Returns an object that represents the element's style attribute."
        },
        "classList": {
          "!type": "+DOMTokenList",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.classList",
          "!doc": "Returns a token list of the class attribute of the element."
        },
        "contentEditable": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.contentEditable",
          "!doc": "Indicates whether or not the element is editable."
        },
        "firstElementChild": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.firstElementChild",
          "!doc": "Returns the element's first child element or null if there are no child elements."
        },
        "lastElementChild": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.lastElementChild",
          "!doc": "Returns the element's last child element or null if there are no child elements."
        },
        "nextElementSibling": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.nextElementSibling",
          "!doc": "Returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list."
        },
        "previousElementSibling": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Element.previousElementSibling",
          "!doc": "Returns the element immediately prior to the specified one in its parent's children list, or null if the specified element is the first one in the list."
        },
        "tabIndex": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.tabIndex",
          "!doc": "Gets/sets the tab order of the current element."
        },
        "title": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.title",
          "!doc": "Establishes the text to be displayed in a 'tool tip' popup when the mouse is over the displayed node."
        },
        "width": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.offsetWidth",
          "!doc": "Returns the layout width of an element."
        },
        "height": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.offsetHeight",
          "!doc": "Height of an element relative to the element's offsetParent."
        },
        "getContext": {
          "!type": "fn(id: string) -> CanvasRenderingContext2D",
          "!url": "https://developer.mozilla.org/en/docs/DOM/HTMLCanvasElement",
          "!doc": "DOM canvas elements expose the HTMLCanvasElement interface, which provides properties and methods for manipulating the layout and presentation of canvas elements. The HTMLCanvasElement interface inherits the properties and methods of the element object interface."
        },
        "supportsContext": "fn(id: string) -> bool",
        "oncopy": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.oncopy",
          "!doc": "The oncopy property returns the onCopy event handler code on the current element."
        },
        "oncut": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.oncut",
          "!doc": "The oncut property returns the onCut event handler code on the current element."
        },
        "onpaste": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onpaste",
          "!doc": "The onpaste property returns the onPaste event handler code on the current element."
        },
        "onbeforeunload": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/HTML/Element/body",
          "!doc": "The HTML <body> element represents the main content of an HTML document. There is only one <body> element in a document."
        },
        "onfocus": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onfocus",
          "!doc": "The onfocus property returns the onFocus event handler code on the current element."
        },
        "onblur": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onblur",
          "!doc": "The onblur property returns the onBlur event handler code, if any, that exists on the current element."
        },
        "onchange": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onchange",
          "!doc": "The onchange property sets and returns the onChange event handler code for the current element."
        },
        "onclick": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onclick",
          "!doc": "The onclick property returns the onClick event handler code on the current element."
        },
        "ondblclick": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.ondblclick",
          "!doc": "The ondblclick property returns the onDblClick event handler code on the current element."
        },
        "onmousedown": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onmousedown",
          "!doc": "The onmousedown property returns the onMouseDown event handler code on the current element."
        },
        "onmouseup": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onmouseup",
          "!doc": "The onmouseup property returns the onMouseUp event handler code on the current element."
        },
        "onmousewheel": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Mozilla_event_reference/wheel",
          "!doc": "The wheel event is fired when a wheel button of a pointing device (usually a mouse) is rotated. This event deprecates the legacy mousewheel event."
        },
        "onmouseover": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onmouseover",
          "!doc": "The onmouseover property returns the onMouseOver event handler code on the current element."
        },
        "onmouseout": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onmouseout",
          "!doc": "The onmouseout property returns the onMouseOut event handler code on the current element."
        },
        "onmousemove": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onmousemove",
          "!doc": "The onmousemove property returns the mousemove event handler code on the current element."
        },
        "oncontextmenu": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/window.oncontextmenu",
          "!doc": "An event handler property for right-click events on the window. Unless the default behavior is prevented, the browser context menu will activate. Note that this event will occur with any non-disabled right-click event and does not depend on an element possessing the \"contextmenu\" attribute."
        },
        "onkeydown": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onkeydown",
          "!doc": "The onkeydown property returns the onKeyDown event handler code on the current element."
        },
        "onkeyup": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onkeyup",
          "!doc": "The onkeyup property returns the onKeyUp event handler code for the current element."
        },
        "onkeypress": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onkeypress",
          "!doc": "The onkeypress property sets and returns the onKeyPress event handler code for the current element."
        },
        "onresize": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onresize",
          "!doc": "onresize returns the element's onresize event handler code. It can also be used to set the code to be executed when the resize event occurs."
        },
        "onscroll": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.onscroll",
          "!doc": "The onscroll property returns the onScroll event handler code on the current element."
        },
        "ondragstart": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DragDrop/Drag_Operations",
          "!doc": "The following describes the steps that occur during a drag and drop operation."
        },
        "ondragover": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Mozilla_event_reference/dragover",
          "!doc": "The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds)."
        },
        "ondragleave": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Mozilla_event_reference/dragleave",
          "!doc": "The dragleave event is fired when a dragged element or text selection leaves a valid drop target."
        },
        "ondragenter": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Mozilla_event_reference/dragenter",
          "!doc": "The dragenter event is fired when a dragged element or text selection enters a valid drop target."
        },
        "ondragend": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Mozilla_event_reference/dragend",
          "!doc": "The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key)."
        },
        "ondrag": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Mozilla_event_reference/drag",
          "!doc": "The drag event is fired when an element or text selection is being dragged (every few hundred milliseconds)."
        },
        "offsetTop": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.offsetTop",
          "!doc": "Returns the distance of the current element relative to the top of the offsetParent node."
        },
        "offsetLeft": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.offsetLeft",
          "!doc": "Returns the number of pixels that the upper left corner of the current element is offset to the left within the offsetParent node."
        },
        "offsetHeight": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.offsetHeight",
          "!doc": "Height of an element relative to the element's offsetParent."
        },
        "offsetWidth": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.offsetWidth",
          "!doc": "Returns the layout width of an element."
        },
        "scrollTop": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.scrollTop",
          "!doc": "Gets or sets the number of pixels that the content of an element is scrolled upward."
        },
        "scrollLeft": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.scrollLeft",
          "!doc": "Gets or sets the number of pixels that an element's content is scrolled to the left."
        },
        "scrollHeight": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.scrollHeight",
          "!doc": "Height of the scroll view of an element; it includes the element padding but not its margin."
        },
        "scrollWidth": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.scrollWidth",
          "!doc": "Read-only property that returns either the width in pixels of the content of an element or the width of the element itself, whichever is greater."
        },
        "clientTop": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.clientTop",
          "!doc": "The width of the top border of an element in pixels. It does not include the top margin or padding. clientTop is read-only."
        },
        "clientLeft": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.clientLeft",
          "!doc": "The width of the left border of an element in pixels. It includes the width of the vertical scrollbar if the text direction of the element is right-to-left and if there is an overflow causing a left vertical scrollbar to be rendered. clientLeft does not include the left margin or the left padding. clientLeft is read-only."
        },
        "clientHeight": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.clientHeight",
          "!doc": "Returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin."
        },
        "clientWidth": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.clientWidth",
          "!doc": "The inner width of an element in pixels. It includes padding but not the vertical scrollbar (if present, if rendered), border or margin."
        },
        "innerHTML": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.innerHTML",
          "!doc": "Sets or gets the HTML syntax describing the element's descendants."
        },
        "createdCallback": {
          "!type": "fn()",
          "!url": "http://w3c.github.io/webcomponents/spec/custom/index.html#dfn-created-callback",
          "!doc": "This callback is invoked after custom element instance is created and its definition is registered. The actual timing of this callback is defined further in this specification."
        },
        "attachedCallback": {
          "!type": "fn()",
          "!url": "http://w3c.github.io/webcomponents/spec/custom/index.html#dfn-entered-view-callback",
          "!doc": "Unless specified otherwise, this callback must be enqueued whenever custom element is inserted into a document and this document has a browsing context."
        },
        "detachedCallback": {
          "!type": "fn()",
          "!url": "http://w3c.github.io/webcomponents/spec/custom/index.html#dfn-left-view-callback",
          "!doc": "Unless specified otherwise, this callback must be enqueued whenever custom element is removed from the document and this document has a browsing context."
        },
        "attributeChangedCallback": {
          "!type": "fn()",
          "!url": "http://w3c.github.io/webcomponents/spec/custom/index.html#dfn-attribute-changed-callback",
          "!doc": "Unless specified otherwise, this callback must be enqueued whenever custom element's attribute is added, changed or removed."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Element",
      "!doc": "Represents an element in an HTML or XML document."
    },
    "Text": {
      "!type": "fn()",
      "prototype": {
        "!proto": "Node.prototype",
        "wholeText": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Text.wholeText",
          "!doc": "Returns all text of all Text nodes logically adjacent to the node.  The text is concatenated in document order.  This allows you to specify any text node and obtain all adjacent text as a single string."
        },
        "splitText": {
          "!type": "fn(offset: number) -> +Text",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Text.splitText",
          "!doc": "Breaks the Text node into two nodes at the specified offset, keeping both nodes in the tree as siblings."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Text",
      "!doc": "In the DOM, the Text interface represents the textual content of an Element or Attr.  If an element has no markup within its content, it has a single child implementing Text that contains the element's text.  However, if the element contains markup, it is parsed into information items and Text nodes that form its children."
    },
    "Document": {
      "!type": "fn()",
      "prototype": {
        "!proto": "Node.prototype",
        "activeElement": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.activeElement",
          "!doc": "Returns the currently focused element, that is, the element that will get keystroke events if the user types any. This attribute is read only."
        },
        "compatMode": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.compatMode",
          "!doc": "Indicates whether the document is rendered in Quirks mode or Strict mode."
        },
        "designMode": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.designMode",
          "!doc": "Can be used to make any document editable, for example in a <iframe />:"
        },
        "dir": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Document.dir",
          "!doc": "This property should indicate and allow the setting of the directionality of the text of the document, whether left to right (default) or right to left."
        },
        "height": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.height",
          "!doc": "Returns the height of the <body> element of the current document."
        },
        "width": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.width",
          "!doc": "Returns the width of the <body> element of the current document in pixels."
        },
        "characterSet": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.characterSet",
          "!doc": "Returns the character encoding of the current document."
        },
        "readyState": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.readyState",
          "!doc": "Returns \"loading\" while the document is loading, \"interactive\" once it is finished parsing but still loading sub-resources, and \"complete\" once it has loaded."
        },
        "location": {
          "!type": "location",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.location",
          "!doc": "Returns a Location object, which contains information about the URL of the document and provides methods for changing that URL."
        },
        "lastModified": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.lastModified",
          "!doc": "Returns a string containing the date and time on which the current document was last modified."
        },
        "head": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.head",
          "!doc": "Returns the <head> element of the current document. If there are more than one <head> elements, the first one is returned."
        },
        "body": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.body",
          "!doc": "Returns the <body> or <frameset> node of the current document."
        },
        "cookie": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.cookie",
          "!doc": "Get and set the cookies associated with the current document."
        },
        "URL": "string",
        "domain": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.domain",
          "!doc": "Gets/sets the domain portion of the origin of the current document, as used by the same origin policy."
        },
        "referrer": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.referrer",
          "!doc": "Returns the URI of the page that linked to this page."
        },
        "title": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.title",
          "!doc": "Gets or sets the title of the document."
        },
        "defaultView": {
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.defaultView",
          "!doc": "In browsers returns the window object associated with the document or null if none available."
        },
        "documentURI": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.documentURI",
          "!doc": "Returns the document location as string. It is read-only per DOM4 specification."
        },
        "xmlStandalone": "bool",
        "xmlVersion": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.xmlVersion",
          "!doc": "Returns the version number as specified in the XML declaration (e.g., <?xml version=\"1.0\"?>) or \"1.0\" if the declaration is absent."
        },
        "xmlEncoding": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Document.xmlEncoding",
          "!doc": "Returns the encoding as determined by the XML declaration. Should be null if unspecified or unknown."
        },
        "inputEncoding": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.inputEncoding",
          "!doc": "Returns a string representing the encoding under which the document was parsed (e.g. ISO-8859-1)."
        },
        "documentElement": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.documentElement",
          "!doc": "Read-only"
        },
        "implementation": {
          "hasFeature": "fn(feature: string, version: number) -> bool",
          "createDocumentType": {
            "!type": "fn(qualifiedName: string, publicId: string, systemId: string) -> +Node",
            "!url": "https://developer.mozilla.org/en/docs/DOM/DOMImplementation.createDocumentType",
            "!doc": "Returns a DocumentType object which can either be used with DOMImplementation.createDocument upon document creation or they can be put into the document via Node.insertBefore() or Node.replaceChild(): http://www.w3.org/TR/DOM-Level-3-Cor...l#ID-B63ED1A31 (less ideal due to features not likely being as accessible: http://www.w3.org/TR/DOM-Level-3-Cor...createDocument ). In any case, entity declarations and notations will not be available: http://www.w3.org/TR/DOM-Level-3-Cor...-createDocType   "
          },
          "createHTMLDocument": {
            "!type": "fn(title: string) -> +Document",
            "!url": "https://developer.mozilla.org/en/docs/DOM/DOMImplementation.createHTMLDocument",
            "!doc": "This method (available from document.implementation) creates a new HTML document."
          },
          "createDocument": {
            "!type": "fn(namespaceURI: string, qualifiedName: string, type: +Node) -> +Document",
            "!url": "https://developer.mozilla.org/en-US/docs/DOM/DOMImplementation.createHTMLDocument",
            "!doc": "This method creates a new HTML document."
          },
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.implementation",
          "!doc": "Returns a DOMImplementation object associated with the current document."
        },
        "doctype": {
          "!type": "+Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.doctype",
          "!doc": "Returns the Document Type Declaration (DTD) associated with current document. The returned object implements the DocumentType interface. Use DOMImplementation.createDocumentType() to create a DocumentType."
        },
        "open": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.open",
          "!doc": "The document.open() method opens a document for writing."
        },
        "close": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.close",
          "!doc": "The document.close() method finishes writing to a document, opened with document.open()."
        },
        "write": {
          "!type": "fn(html: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.write",
          "!doc": "Writes a string of text to a document stream opened by document.open()."
        },
        "writeln": {
          "!type": "fn(html: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.writeln",
          "!doc": "Writes a string of text followed by a newline character to a document."
        },
        "clear": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.clear",
          "!doc": "In recent versions of Mozilla-based applications as well as in Internet Explorer and Netscape 4 this method does nothing."
        },
        "hasFocus": {
          "!type": "fn() -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.hasFocus",
          "!doc": "Returns a Boolean value indicating whether the document or any element inside the document has focus. This method can be used to determine whether the active element in a document has focus."
        },
        "createElement": {
          "!type": "fn(tagName: string) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createElement",
          "!doc": "Creates the specified element."
        },
        "createElementNS": {
          "!type": "fn(ns: string, tagName: string) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createElementNS",
          "!doc": "Creates an element with the specified namespace URI and qualified name."
        },
        "createDocumentFragment": {
          "!type": "fn() -> +DocumentFragment",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createDocumentFragment",
          "!doc": "Creates a new empty DocumentFragment."
        },
        "createTextNode": {
          "!type": "fn(content: string) -> +Text",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createTextNode",
          "!doc": "Creates a new Text node."
        },
        "createComment": {
          "!type": "fn(content: string) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createComment",
          "!doc": "Creates a new comment node, and returns it."
        },
        "createCDATASection": {
          "!type": "fn(content: string) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createCDATASection",
          "!doc": "Creates a new CDATA section node, and returns it. "
        },
        "createProcessingInstruction": {
          "!type": "fn(content: string) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createProcessingInstruction",
          "!doc": "Creates a new processing instruction node, and returns it."
        },
        "createAttribute": {
          "!type": "fn(name: string) -> +Attr",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createAttribute",
          "!doc": "Creates a new attribute node, and returns it."
        },
        "createAttributeNS": {
          "!type": "fn(ns: string, name: string) -> +Attr",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Attr",
          "!doc": "This type represents a DOM element's attribute as an object. In most DOM methods, you will probably directly retrieve the attribute as a string (e.g., Element.getAttribute(), but certain functions (e.g., Element.getAttributeNode()) or means of iterating give Attr types."
        },
        "importNode": {
          "!type": "fn(node: +Node, deep: bool) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.importNode",
          "!doc": "Creates a copy of a node from an external document that can be inserted into the current document."
        },
        "getElementById": {
          "!type": "fn(id: string) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.getElementById",
          "!doc": "Returns a reference to the element by its ID."
        },
        "getElementsByTagName": {
          "!type": "fn(tagName: string) -> +NodeList",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.getElementsByTagName",
          "!doc": "Returns a NodeList of elements with the given tag name. The complete document is searched, including the root node. The returned NodeList is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName again."
        },
        "getElementsByTagNameNS": {
          "!type": "fn(ns: string, tagName: string) -> +NodeList",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.getElementsByTagNameNS",
          "!doc": "Returns a list of elements with the given tag name belonging to the given namespace. The complete document is searched, including the root node."
        },
        "createEvent": {
          "!type": "fn(type: string) -> +Event",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createEvent",
          "!doc": "Creates an event of the type specified. The returned object should be first initialized and can then be passed to element.dispatchEvent."
        },
        "createRange": {
          "!type": "fn() -> +Range",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createRange",
          "!doc": "Returns a new Range object."
        },
        "evaluate": {
          "!type": "fn(expr: ?) -> +XPathResult",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.evaluate",
          "!doc": "Returns an XPathResult based on an XPath expression and other given parameters."
        },
        "execCommand": {
          "!type": "fn(cmd: string)",
          "!url": "https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla#Executing_Commands",
          "!doc": "Run command to manipulate the contents of an editable region."
        },
        "queryCommandEnabled": {
          "!type": "fn(cmd: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document",
          "!doc": "Returns true if the Midas command can be executed on the current range."
        },
        "queryCommandIndeterm": {
          "!type": "fn(cmd: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document",
          "!doc": "Returns true if the Midas command is in a indeterminate state on the current range."
        },
        "queryCommandState": {
          "!type": "fn(cmd: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document",
          "!doc": "Returns true if the Midas command has been executed on the current range."
        },
        "queryCommandSupported": {
          "!type": "fn(cmd: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.queryCommandSupported",
          "!doc": "Reports whether or not the specified editor query command is supported by the browser."
        },
        "queryCommandValue": {
          "!type": "fn(cmd: string) -> string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document",
          "!doc": "Returns the current value of the current range for Midas command."
        },
        "getElementsByName": {
          "!type": "fn(name: string) -> +HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.getElementsByName",
          "!doc": "Returns a list of elements with a given name in the HTML document."
        },
        "elementFromPoint": {
          "!type": "fn(x: number, y: number) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.elementFromPoint",
          "!doc": "Returns the element from the document whose elementFromPoint method is being called which is the topmost element which lies under the given point.  To get an element, specify the point via coordinates, in CSS pixels, relative to the upper-left-most point in the window or frame containing the document."
        },
        "getSelection": {
          "!type": "fn() -> +Selection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.getSelection",
          "!doc": "The DOM getSelection() method is available on the Window and Document interfaces."
        },
        "adoptNode": {
          "!type": "fn(node: +Node) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.adoptNode",
          "!doc": "Adopts a node from an external document. The node and its subtree is removed from the document it's in (if any), and its ownerDocument is changed to the current document. The node can then be inserted into the current document."
        },
        "createTreeWalker": {
          "!type": "fn(root: +Node, mask: number) -> ?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createTreeWalker",
          "!doc": "Returns a new TreeWalker object."
        },
        "createExpression": {
          "!type": "fn(text: string) -> ?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createExpression",
          "!doc": "This method compiles an XPathExpression which can then be used for (repeated) evaluations."
        },
        "createNSResolver": {
          "!type": "fn(node: +Node)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.createNSResolver",
          "!doc": "Creates an XPathNSResolver which resolves namespaces with respect to the definitions in scope for a specified node."
        },
        "scripts": {
          "!type": "+HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Document.scripts",
          "!doc": "Returns a list of the <script> elements in the document. The returned object is an HTMLCollection."
        },
        "plugins": {
          "!type": "+HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.plugins",
          "!doc": "Returns an HTMLCollection object containing one or more HTMLEmbedElements or null which represent the <embed> elements in the current document."
        },
        "embeds": {
          "!type": "+HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.embeds",
          "!doc": "Returns a list of the embedded OBJECTS within the current document."
        },
        "anchors": {
          "!type": "+HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.anchors",
          "!doc": "Returns a list of all of the anchors in the document."
        },
        "links": {
          "!type": "+HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.links",
          "!doc": "The links property returns a collection of all AREA elements and anchor elements in a document with a value for the href attribute. "
        },
        "forms": {
          "!type": "+HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.forms",
          "!doc": "Returns a collection (an HTMLCollection) of the form elements within the current document."
        },
        "styleSheets": {
          "!type": "+HTMLCollection",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.styleSheets",
          "!doc": "Returns a list of stylesheet objects for stylesheets explicitly linked into or embedded in a document."
        },
        "currentScript": {
          "!type": "+Node",
          "!url": "https://developer.mozilla.org/en-US/docs/Web/API/document.currentScript",
          "!doc": "Returns the <script> element whose script is currently being processed."
        },
        "registerElement": {
          "!type": "?",
          "!url": "http://w3c.github.io/webcomponents/spec/custom/#extensions-to-document-interface-to-register",
          "!doc": "The registerElement method of the Document interface provides a way to register a custom element and returns its custom element constructor."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/document",
      "!doc": "Each web page loaded in the browser has its own document object. This object serves as an entry point to the web page's content (the DOM tree, including elements such as <body> and <table>) and provides functionality global to the document (such as obtaining the page's URL and creating new elements in the document)."
    },
    "document": {
      "!type": "+Document",
      "!url": "https://developer.mozilla.org/en/docs/DOM/document",
      "!doc": "Each web page loaded in the browser has its own document object. This object serves as an entry point to the web page's content (the DOM tree, including elements such as <body> and <table>) and provides functionality global to the document (such as obtaining the page's URL and creating new elements in the document)."
    },
    "XMLDocument": {
      "!type": "fn()",
      "prototype": "Document.prototype",
      "!url": "https://developer.mozilla.org/en/docs/Parsing_and_serializing_XML",
      "!doc": "The Web platform provides the following objects for parsing and serializing XML:"
    },
    "HTMLElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
    },
    "HTMLAnchorElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
    },
    "HTMLAreaElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement"
    },
    "HTMLAudioElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement"
    },
    "HTMLBaseElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLBaseElement"
    },
    "HTMLBodyElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement"
    },
    "HTMLBRElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement"
    },
    "HTMLButtonElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement"
    },
    "HTMLCanvasElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement"
    },
    "HTMLDataElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement"
    },
    "HTMLDataListElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement"
    },
    "HTMLDivElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
    },
    "HTMLDListElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement"
    },
    "HTMLDocument": {
      "!type": "Document",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument"
    },
    "HTMLEmbedElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement"
    },
    "HTMLFieldSetElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement"
    },
    "HTMLFormControlsCollection": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection"
    },
    "HTMLFormElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement"
    },
    "HTMLHeadElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement"
    },
    "HTMLHeadingElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement"
    },
    "HTMLHRElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement"
    },
    "HTMLHtmlElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement"
    },
    "HTMLIFrameElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement"
    },
    "HTMLImageElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement"
    },
    "HTMLInputElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement"
    },
    "HTMLKeygenElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLKeygenElement"
    },
    "HTMLLabelElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement"
    },
    "HTMLLegendElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement"
    },
    "HTMLLIElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement"
    },
    "HTMLLinkElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement"
    },
    "HTMLMapElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement"
    },
    "HTMLMediaElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement"
    },
    "HTMLMetaElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement"
    },
    "HTMLMeterElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement"
    },
    "HTMLModElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement"
    },
    "HTMLObjectElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement"
    },
    "HTMLOListElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement"
    },
    "HTMLOptGroupElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement"
    },
    "HTMLOptionElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement"
    },
    "HTMLOptionsCollection": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionsCollection"
    },
    "HTMLOutputElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement"
    },
    "HTMLParagraphElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement"
    },
    "HTMLParamElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement"
    },
    "HTMLPreElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement"
    },
    "HTMLProgressElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement"
    },
    "HTMLQuoteElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement"
    },
    "HTMLScriptElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement"
    },
    "HTMLSelectElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement"
    },
    "HTMLSourceElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement"
    },
    "HTMLSpanElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement"
    },
    "HTMLStyleElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement"
    },
    "HTMLTableCaptionElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement"
    },
    "HTMLTableCellElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement"
    },
    "HTMLTableColElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement"
    },
    "HTMLTableDataCellElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableDataCellElement"
    },
    "HTMLTableElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement"
    },
    "HTMLTableHeaderCellElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableHeaderCellElement"
    },
    "HTMLTableRowElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement"
    },
    "HTMLTableSectionElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement"
    },
    "HTMLTextAreaElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement"
    },
    "HTMLTimeElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement"
    },
    "HTMLTitleElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement"
    },
    "HTMLTrackElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement"
    },
    "HTMLUListElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement"
    },
    "HTMLUnknownElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement"
    },
    "HTMLVideoElement": {
      "!type": "Element",
      "!url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement"
    },
    "Attr": {
      "!type": "fn()",
      "prototype": {
        "isId": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Attr",
          "!doc": "This type represents a DOM element's attribute as an object. In most DOM methods, you will probably directly retrieve the attribute as a string (e.g., Element.getAttribute(), but certain functions (e.g., Element.getAttributeNode()) or means of iterating give Attr types."
        },
        "name": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Attr",
          "!doc": "This type represents a DOM element's attribute as an object. In most DOM methods, you will probably directly retrieve the attribute as a string (e.g., Element.getAttribute(), but certain functions (e.g., Element.getAttributeNode()) or means of iterating give Attr types."
        },
        "value": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Attr",
          "!doc": "This type represents a DOM element's attribute as an object. In most DOM methods, you will probably directly retrieve the attribute as a string (e.g., Element.getAttribute(), but certain functions (e.g., Element.getAttributeNode()) or means of iterating give Attr types."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Attr",
      "!doc": "This type represents a DOM element's attribute as an object. In most DOM methods, you will probably directly retrieve the attribute as a string (e.g., Element.getAttribute(), but certain functions (e.g., Element.getAttributeNode()) or means of iterating give Attr types."
    },
    "NodeList": {
      "!type": "fn()",
      "prototype": {
        "length": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.length",
          "!doc": "Returns the number of items in a NodeList."
        },
        "item": {
          "!type": "fn(i: number) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NodeList.item",
          "!doc": "Returns a node from a NodeList by index."
        },
        "<i>": "+Element"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/NodeList",
      "!doc": "NodeList objects are collections of nodes returned by getElementsByTagName, getElementsByTagNameNS, Node.childNodes, querySelectorAll, getElementsByClassName, etc."
    },
    "HTMLCollection": {
      "!type": "fn()",
      "prototype": {
        "length": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/HTMLCollection",
          "!doc": "The number of items in the collection."
        },
        "item": {
          "!type": "fn(i: number) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/HTMLCollection",
          "!doc": "Returns the specific node at the given zero-based index into the list. Returns null if the index is out of range."
        },
        "namedItem": {
          "!type": "fn(name: string) -> +Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/HTMLCollection",
          "!doc": "Returns the specific node whose ID or, as a fallback, name matches the string specified by name. Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the name attribute. Returns null if no node exists by the given name."
        },
        "<i>": "+Element"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/HTMLCollection",
      "!doc": "HTMLCollection is an interface representing a generic collection of elements (in document order) and offers methods and properties for traversing the list."
    },
    "NamedNodeMap": {
      "!type": "fn()",
      "prototype": {
        "length": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
          "!doc": "The number of items in the map."
        },
        "getNamedItem": {
          "!type": "fn(name: string) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
          "!doc": "Gets a node by name."
        },
        "setNamedItem": {
          "!type": "fn(node: +Node) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
          "!doc": "Adds (or replaces) a node by its nodeName."
        },
        "removeNamedItem": {
          "!type": "fn(name: string) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
          "!doc": "Removes a node (or if an attribute, may reveal a default if present)."
        },
        "item": {
          "!type": "fn(i: number) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
          "!doc": "Returns the item at the given index (or null if the index is higher or equal to the number of nodes)."
        },
        "getNamedItemNS": {
          "!type": "fn(ns: string, name: string) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
          "!doc": "Gets a node by namespace and localName."
        },
        "setNamedItemNS": {
          "!type": "fn(node: +Node) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
          "!doc": "Adds (or replaces) a node by its localName and namespaceURI."
        },
        "removeNamedItemNS": {
          "!type": "fn(ns: string, name: string) -> +Node",
          "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
          "!doc": "Removes a node (or if an attribute, may reveal a default if present)."
        },
        "<i>": "+Node"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/NamedNodeMap",
      "!doc": "A collection of nodes returned by Element.attributes (also potentially for DocumentType.entities, DocumentType.notations). NamedNodeMaps are not in any particular order (unlike NodeList), although they may be accessed by an index as in an array (they may also be accessed with the item() method). A NamedNodeMap object are live and will thus be auto-updated if changes are made to their contents internally or elsewhere."
    },
    "DocumentFragment": {
      "!type": "fn()",
      "prototype": {
        "!proto": "Node.prototype"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/document.createDocumentFragment",
      "!doc": "Creates a new empty DocumentFragment."
    },
    "DOMTokenList": {
      "!type": "fn()",
      "prototype": {
        "length": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/DOMTokenList",
          "!doc": "The amount of items in the list."
        },
        "item": {
          "!type": "fn(i: number) -> string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/DOMTokenList",
          "!doc": "Returns an item in the list by its index."
        },
        "contains": {
          "!type": "fn(token: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/DOMTokenList",
          "!doc": "Return true if the underlying string contains token, otherwise false."
        },
        "add": {
          "!type": "fn(token: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/DOMTokenList",
          "!doc": "Adds token to the underlying string."
        },
        "remove": {
          "!type": "fn(token: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/DOMTokenList",
          "!doc": "Remove token from the underlying string."
        },
        "toggle": {
          "!type": "fn(token: string) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/DOMTokenList",
          "!doc": "Removes token from string and returns false. If token doesn't exist it's added and the function returns true."
        },
        "<i>": "string"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/DOMTokenList",
      "!doc": "This type represents a set of space-separated tokens. Commonly returned by HTMLElement.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList or HTMLAreaElement.relList. It is indexed beginning with 0 as with JavaScript arrays. DOMTokenList is always case-sensitive."
    },
    "XPathResult": {
      "!type": "fn()",
      "prototype": {
        "boolValue": "bool",
        "invalidIteratorState": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/Introduction_to_using_XPath_in_JavaScript",
          "!doc": "This document describes the interface for using XPath in JavaScript internally, in extensions, and from websites. Mozilla implements a fair amount of the DOM 3 XPath. Which means that XPath expressions can be run against both HTML and XML documents."
        },
        "numberValue": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/XPathResult",
          "!doc": "Refer to nsIDOMXPathResult for more detail."
        },
        "resultType": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/document.evaluate",
          "!doc": "Returns an XPathResult based on an XPath expression and other given parameters."
        },
        "singleNodeValue": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/Introduction_to_using_XPath_in_JavaScript",
          "!doc": "This document describes the interface for using XPath in JavaScript internally, in extensions, and from websites. Mozilla implements a fair amount of the DOM 3 XPath. Which means that XPath expressions can be run against both HTML and XML documents."
        },
        "snapshotLength": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/XPathResult",
          "!doc": "Refer to nsIDOMXPathResult for more detail."
        },
        "stringValue": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/Introduction_to_using_XPath_in_JavaScript",
          "!doc": "This document describes the interface for using XPath in JavaScript internally, in extensions, and from websites. Mozilla implements a fair amount of the DOM 3 XPath. Which means that XPath expressions can be run against both HTML and XML documents."
        },
        "iterateNext": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/Introduction_to_using_XPath_in_JavaScript",
          "!doc": "This document describes the interface for using XPath in JavaScript internally, in extensions, and from websites. Mozilla implements a fair amount of the DOM 3 XPath. Which means that XPath expressions can be run against both HTML and XML documents."
        },
        "snapshotItem": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en-US/docs/XPathResult#snapshotItem()"
        },
        "ANY_TYPE": "number",
        "NUMBER_TYPE": "number",
        "STRING_TYPE": "number",
        "BOOL_TYPE": "number",
        "UNORDERED_NODE_ITERATOR_TYPE": "number",
        "ORDERED_NODE_ITERATOR_TYPE": "number",
        "UNORDERED_NODE_SNAPSHOT_TYPE": "number",
        "ORDERED_NODE_SNAPSHOT_TYPE": "number",
        "ANY_UNORDERED_NODE_TYPE": "number",
        "FIRST_ORDERED_NODE_TYPE": "number"
      },
      "!url": "https://developer.mozilla.org/en/docs/XPathResult",
      "!doc": "Refer to nsIDOMXPathResult for more detail."
    },
    "ClientRect": {
      "!type": "fn()",
      "prototype": {
        "top": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getClientRects",
          "!doc": "Top of the box, in pixels, relative to the viewport."
        },
        "left": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getClientRects",
          "!doc": "Left of the box, in pixels, relative to the viewport."
        },
        "bottom": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getClientRects",
          "!doc": "Bottom of the box, in pixels, relative to the viewport."
        },
        "right": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/element.getClientRects",
          "!doc": "Right of the box, in pixels, relative to the viewport."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.getClientRects",
      "!doc": "Returns a collection of rectangles that indicate the bounding rectangles for each box in a client."
    },
    "Event": {
      "!type": "fn()",
      "prototype": {
        "stopPropagation": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.stopPropagation",
          "!doc": "Prevents further propagation of the current event."
        },
        "preventDefault": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.preventDefault",
          "!doc": "Cancels the event if it is cancelable, without stopping further propagation of the event."
        },
        "initEvent": {
          "!type": "fn(type: string, bubbles: bool, cancelable: bool)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.initEvent",
          "!doc": "The initEvent method is used to initialize the value of an event created using document.createEvent."
        },
        "stopImmediatePropagation": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.stopImmediatePropagation",
          "!doc": "Prevents other listeners of the same event to be called."
        },
        "NONE": "number",
        "CAPTURING_PHASE": "number",
        "AT_TARGET": "number",
        "BUBBLING_PHASE": "number",
        "MOUSEDOWN": "number",
        "MOUSEUP": "number",
        "MOUSEOVER": "number",
        "MOUSEOUT": "number",
        "MOUSEMOVE": "number",
        "MOUSEDRAG": "number",
        "CLICK": "number",
        "DBLCLICK": "number",
        "KEYDOWN": "number",
        "KEYUP": "number",
        "KEYPRESS": "number",
        "DRAGDROP": "number",
        "FOCUS": "number",
        "BLUR": "number",
        "SELECT": "number",
        "CHANGE": "number",
        "target": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/EventTarget",
          "!doc": "An EventTarget is a DOM interface implemented by objects that can receive DOM events and have listeners for them. The most common EventTargets are DOM elements, although other objects can be EventTargets too, for example document, window, XMLHttpRequest, and others."
        },
        "relatedTarget": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.relatedTarget",
          "!doc": "Identifies a secondary target for the event."
        },
        "pageX": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.pageX",
          "!doc": "Returns the horizontal coordinate of the event relative to whole document."
        },
        "pageY": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.pageY",
          "!doc": "Returns the vertical coordinate of the event relative to the whole document."
        },
        "clientX": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.clientX",
          "!doc": "Returns the horizontal coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientX value of 0, regardless of whether the page is scrolled horizontally."
        },
        "clientY": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.clientY",
          "!doc": "Returns the vertical coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientY value of 0, regardless of whether the page is scrolled vertically."
        },
        "keyCode": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.keyCode",
          "!doc": "Returns the Unicode value of a non-character key in a keypress event or any key in any other type of keyboard event."
        },
        "charCode": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.charCode",
          "!doc": "Returns the Unicode value of a character key pressed during a keypress event."
        },
        "which": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.which",
          "!doc": "Returns the numeric keyCode of the key pressed, or the character code (charCode) for an alphanumeric key pressed."
        },
        "button": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.button",
          "!doc": "Indicates which mouse button caused the event."
        },
        "shiftKey": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.shiftKey",
          "!doc": "Indicates whether the SHIFT key was pressed when the event fired."
        },
        "ctrlKey": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.ctrlKey",
          "!doc": "Indicates whether the CTRL key was pressed when the event fired."
        },
        "altKey": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.altKey",
          "!doc": "Indicates whether the ALT key was pressed when the event fired."
        },
        "metaKey": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.metaKey",
          "!doc": "Indicates whether the META key was pressed when the event fired."
        },
        "returnValue": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/window.onbeforeunload",
          "!doc": "An event that fires when a window is about to unload its resources. The document is still visible and the event is still cancelable."
        },
        "cancelBubble": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/event.cancelBubble",
          "!doc": "bool is the boolean value of true or false."
        },
        "dataTransfer": {
          "dropEffect": {
            "!type": "string",
            "!url": "https://developer.mozilla.org/en/docs/DragDrop/DataTransfer",
            "!doc": "The actual effect that will be used, and should always be one of the possible values of effectAllowed."
          },
          "effectAllowed": {
            "!type": "string",
            "!url": "https://developer.mozilla.org/en/docs/DragDrop/Drag_Operations",
            "!doc": "Specifies the effects that are allowed for this drag."
          },
          "files": {
            "!type": "+FileList",
            "!url": "https://developer.mozilla.org/en/docs/DragDrop/DataTransfer",
            "!doc": "Contains a list of all the local files available on the data transfer."
          },
          "types": {
            "!type": "[string]",
            "!url": "https://developer.mozilla.org/en-US/docs/DragDrop/DataTransfer",
            "!doc": "Holds a list of the format types of the data that is stored for the first item, in the same order the data was added. An empty list will be returned if no data was added."
          },
          "addElement": {
            "!type": "fn(element: +Element)",
            "!url": "https://developer.mozilla.org/en/docs/DragDrop/DataTransfer",
            "!doc": "Set the drag source."
          },
          "clearData": {
            "!type": "fn(type?: string)",
            "!url": "https://developer.mozilla.org/en/docs/DragDrop/Drag_Operations",
            "!doc": "Remove the data associated with a given type."
          },
          "getData": {
            "!type": "fn(type: string) -> string",
            "!url": "https://developer.mozilla.org/en/docs/DragDrop/Drag_Operations",
            "!doc": "Retrieves the data for a given type, or an empty string if data for that type does not exist or the data transfer contains no data."
          },
          "setData": {
            "!type": "fn(type: string, data: string)",
            "!url": "https://developer.mozilla.org/en/docs/DragDrop/Drag_Operations",
            "!doc": "Set the data for a given type."
          },
          "setDragImage": {
            "!type": "fn(image: +Element)",
            "!url": "https://developer.mozilla.org/en/docs/DragDrop/Drag_Operations",
            "!doc": "Set the image to be used for dragging if a custom one is desired."
          },
          "!url": "https://developer.mozilla.org/en/docs/DragDrop/DataTransfer",
          "!doc": "This object is available from the dataTransfer property of all drag events. It cannot be created separately."
        }
      },
      "!url": "https://developer.mozilla.org/en-US/docs/DOM/event",
      "!doc": "The DOM Event interface is accessible from within the handler function, via the event object passed as the first argument."
    },
    "TouchEvent": {
      "!type": "fn()",
      "prototype": "Event.prototype",
      "!url": "https://developer.mozilla.org/en/docs/DOM/Touch_events",
      "!doc": "In order to provide quality support for touch-based user interfaces, touch events offer the ability to interpret finger activity on touch screens or trackpads."
    },
    "WheelEvent": {
      "!type": "fn()",
      "prototype": "Event.prototype",
      "!url": "https://developer.mozilla.org/en/docs/DOM/WheelEvent",
      "!doc": "The DOM WheelEvent represents events that occur due to the user moving a mouse wheel or similar input device."
    },
    "MouseEvent": {
      "!type": "fn()",
      "prototype": "Event.prototype",
      "!url": "https://developer.mozilla.org/en/docs/DOM/MouseEvent",
      "!doc": "The DOM MouseEvent represents events that occur due to the user interacting with a pointing device (such as a mouse). It's represented by the nsINSDOMMouseEvent interface, which extends the nsIDOMMouseEvent interface."
    },
    "KeyboardEvent": {
      "!type": "fn()",
      "prototype": "Event.prototype",
      "!url": "https://developer.mozilla.org/en/docs/DOM/KeyboardEvent",
      "!doc": "KeyboardEvent objects describe a user interaction with the keyboard. Each event describes a key; the event type (keydown, keypress, or keyup) identifies what kind of activity was performed."
    },
    "HashChangeEvent": {
      "!type": "fn()",
      "prototype": "Event.prototype",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onhashchange",
      "!doc": "The hashchange event fires when a window's hash changes."
    },
    "ErrorEvent": {
      "!type": "fn()",
      "prototype": "Event.prototype",
      "!url": "https://developer.mozilla.org/en/docs/DOM/DOM_event_reference/error",
      "!doc": "The error event is fired whenever a resource fails to load."
    },
    "CustomEvent": {
      "!type": "fn()",
      "prototype": "Event.prototype",
      "!url": "https://developer.mozilla.org/en/docs/DOM/Event/CustomEvent",
      "!doc": "The DOM CustomEvent are events initialized by an application for any purpose."
    },
    "BeforeLoadEvent": {
      "!type": "fn()",
      "prototype": "Event.prototype",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window",
      "!doc": "This section provides a brief reference for all of the methods, properties, and events available through the DOM window object. The window object implements the Window interface, which in turn inherits from the AbstractView interface. Some additional global functions, namespaces objects, and constructors, not typically associated with the window, but available on it, are listed in the JavaScript Reference."
    },
    "WebSocket": {
      "!type": "fn(url: string)",
      "prototype": {
        "close": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/WebSockets_reference/CloseEvent",
          "!doc": "A CloseEvent is sent to clients using WebSockets when the connection is closed. This is delivered to the listener indicated by the WebSocket object's onclose attribute."
        },
        "send": {
          "!type": "fn(data: string)",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/WebSockets_reference/WebSocket",
          "!doc": "The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection."
        },
        "binaryType": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/WebSockets_reference/WebSocket",
          "!doc": "The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection."
        },
        "bufferedAmount": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/Writing_WebSocket_client_applications",
          "!doc": "WebSockets is a technology that makes it possible to open an interactive communication session between the user's browser and a server. Using a WebSocket connection, Web applications can perform real-time communication instead of having to poll for changes back and forth."
        },
        "extensions": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/WebSockets_reference/WebSocket",
          "!doc": "The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection."
        },
        "onclose": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/WebSockets_reference/CloseEvent",
          "!doc": "A CloseEvent is sent to clients using WebSockets when the connection is closed. This is delivered to the listener indicated by the WebSocket object's onclose attribute."
        },
        "onerror": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/Writing_WebSocket_client_applications",
          "!doc": "WebSockets is a technology that makes it possible to open an interactive communication session between the user's browser and a server. Using a WebSocket connection, Web applications can perform real-time communication instead of having to poll for changes back and forth."
        },
        "onmessage": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/WebSockets_reference/WebSocket",
          "!doc": "The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection."
        },
        "onopen": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/WebSockets_reference/WebSocket",
          "!doc": "The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection."
        },
        "protocol": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets",
          "!doc": "WebSockets is an advanced technology that makes it possible to open an interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply."
        },
        "url": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/WebSockets/Writing_WebSocket_client_applications",
          "!doc": "WebSockets is a technology that makes it possible to open an interactive communication session between the user's browser and a server. Using a WebSocket connection, Web applications can perform real-time communication instead of having to poll for changes back and forth."
        },
        "CONNECTING": "number",
        "OPEN": "number",
        "CLOSING": "number",
        "CLOSED": "number"
      },
      "!url": "https://developer.mozilla.org/en/docs/WebSockets",
      "!doc": "WebSockets is an advanced technology that makes it possible to open an interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply."
    },
    "Worker": {
      "!type": "fn(scriptURL: string)",
      "prototype": {
        "postMessage": {
          "!type": "fn(message: ?)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Worker",
          "!doc": "Sends a message to the worker's inner scope. This accepts a single parameter, which is the data to send to the worker. The data may be any value or JavaScript object handled by the structured clone algorithm, which includes cyclical references."
        },
        "terminate": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Worker",
          "!doc": "Immediately terminates the worker. This does not offer the worker an opportunity to finish its operations; it is simply stopped at once."
        },
        "onmessage": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Worker",
          "!doc": "An event listener that is called whenever a MessageEvent with type message bubbles through the worker. The message is stored in the event's data member."
        },
        "onerror": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Worker",
          "!doc": "An event listener that is called whenever an ErrorEvent with type error bubbles through the worker."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Worker",
      "!doc": "Workers are background tasks that can be easily created and can send messages back to their creators. Creating a worker is as simple as calling the Worker() constructor, specifying a script to be run in the worker thread."
    },
    "localStorage": {
      "setItem": {
        "!type": "fn(name: string, value: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Storage",
        "!doc": "Store an item in storage."
      },
      "getItem": {
        "!type": "fn(name: string) -> string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Storage",
        "!doc": "Retrieve an item from storage."
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Storage",
      "!doc": "The DOM Storage mechanism is a means through which string key/value pairs can be securely stored and later retrieved for use."
    },
    "sessionStorage": {
      "setItem": {
        "!type": "fn(name: string, value: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Storage",
        "!doc": "Store an item in storage."
      },
      "getItem": {
        "!type": "fn(name: string) -> string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Storage",
        "!doc": "Retrieve an item from storage."
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Storage",
      "!doc": "This is a global object (sessionStorage) that maintains a storage area that's available for the duration of the page session. A page session lasts for as long as the browser is open and survives over page reloads and restores. Opening a page in a new tab or window will cause a new session to be initiated."
    },
    "FileList": {
      "!type": "fn()",
      "prototype": {
        "length": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileList",
          "!doc": "A read-only value indicating the number of files in the list."
        },
        "item": {
          "!type": "fn(i: number) -> +File",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileList",
          "!doc": "Returns a File object representing the file at the specified index in the file list."
        },
        "<i>": "+File"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/FileList",
      "!doc": "An object of this type is returned by the files property of the HTML input element; this lets you access the list of files selected with the <input type=\"file\"> element. It's also used for a list of files dropped into web content when using the drag and drop API."
    },
    "File": {
      "!type": "fn()",
      "prototype": {
        "!proto": "Blob.prototype",
        "fileName": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/File.fileName",
          "!doc": "Returns the name of the file. For security reasons the path is excluded from this property."
        },
        "fileSize": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/File.fileSize",
          "!doc": "Returns the size of a file in bytes."
        },
        "lastModifiedDate": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/File.lastModifiedDate",
          "!doc": "Returns the last modified date of the file. Files without a known last modified date use the current date instead."
        },
        "name": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/File.name",
          "!doc": "Returns the name of the file. For security reasons, the path is excluded from this property."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/File",
      "!doc": "The File object provides information about -- and access to the contents of -- files. These are generally retrieved from a FileList object returned as a result of a user selecting files using the input element, or from a drag and drop operation's DataTransfer object."
    },
    "Blob": {
      "!type": "fn(parts: [?], properties?: ?)",
      "prototype": {
        "size": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Blob",
          "!doc": "The size, in bytes, of the data contained in the Blob object. Read only."
        },
        "type": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Blob",
          "!doc": "An ASCII-encoded string, in all lower case, indicating the MIME type of the data contained in the Blob. If the type is unknown, this string is empty. Read only."
        },
        "slice": {
          "!type": "fn(start: number, end?: number, type?: string) -> +Blob",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Blob",
          "!doc": "Returns a new Blob object containing the data in the specified range of bytes of the source Blob."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Blob",
      "!doc": "A Blob object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system."
    },
    "FileReader": {
      "!type": "fn()",
      "prototype": {
        "abort": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Aborts the read operation. Upon return, the readyState will be DONE."
        },
        "readAsArrayBuffer": {
          "!type": "fn(blob: +Blob)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Starts reading the contents of the specified Blob, producing an ArrayBuffer."
        },
        "readAsBinaryString": {
          "!type": "fn(blob: +Blob)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Starts reading the contents of the specified Blob, producing raw binary data."
        },
        "readAsDataURL": {
          "!type": "fn(blob: +Blob)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Starts reading the contents of the specified Blob, producing a data: url."
        },
        "readAsText": {
          "!type": "fn(blob: +Blob, encoding?: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Starts reading the contents of the specified Blob, producing a string."
        },
        "EMPTY": "number",
        "LOADING": "number",
        "DONE": "number",
        "error": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "The error that occurred while reading the file. Read only."
        },
        "readyState": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Indicates the state of the FileReader. This will be one of the State constants. Read only."
        },
        "result": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "The file's contents. This property is only valid after the read operation is complete, and the format of the data depends on which of the methods was used to initiate the read operation. Read only."
        },
        "onabort": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Called when the read operation is aborted."
        },
        "onerror": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Called when an error occurs."
        },
        "onload": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Called when the read operation is successfully completed."
        },
        "onloadend": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Called when the read is completed, whether successful or not. This is called after either onload or onerror."
        },
        "onloadstart": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Called when reading the data is about to begin."
        },
        "onprogress": {
          "!type": "?",
          "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
          "!doc": "Called periodically while the data is being read."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/FileReader",
      "!doc": "The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read. File objects may be obtained from a FileList object returned as a result of a user selecting files using the <input> element, from a drag and drop operation's DataTransfer object, or from the mozGetAsFile() API on an HTMLCanvasElement."
    },
    "Range": {
      "!type": "fn()",
      "prototype": {
        "collapsed": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.collapsed",
          "!doc": "Returns a boolean indicating whether the range's start and end points are at the same position."
        },
        "commonAncestorContainer": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.commonAncestorContainer",
          "!doc": "Returns the deepest Node that contains the  startContainer and  endContainer Nodes."
        },
        "endContainer": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.endContainer",
          "!doc": "Returns the Node within which the Range ends."
        },
        "endOffset": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.endOffset",
          "!doc": "Returns a number representing where in the  endContainer the Range ends."
        },
        "startContainer": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.startContainer",
          "!doc": "Returns the Node within which the Range starts."
        },
        "startOffset": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.startOffset",
          "!doc": "Returns a number representing where in the startContainer the Range starts."
        },
        "setStart": {
          "!type": "fn(node: +Element, offset: number)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.setStart",
          "!doc": "Sets the start position of a Range."
        },
        "setEnd": {
          "!type": "fn(node: +Element, offset: number)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.setEnd",
          "!doc": "Sets the end position of a Range."
        },
        "setStartBefore": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.setStartBefore",
          "!doc": "Sets the start position of a Range relative to another Node."
        },
        "setStartAfter": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.setStartAfter",
          "!doc": "Sets the start position of a Range relative to a Node."
        },
        "setEndBefore": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.setEndBefore",
          "!doc": "Sets the end position of a Range relative to another Node."
        },
        "setEndAfter": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.setEndAfter",
          "!doc": "Sets the end position of a Range relative to another Node."
        },
        "selectNode": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.selectNode",
          "!doc": "Sets the Range to contain the Node and its contents."
        },
        "selectNodeContents": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.selectNodeContents",
          "!doc": "Sets the Range to contain the contents of a Node."
        },
        "collapse": {
          "!type": "fn(toStart: bool)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.collapse",
          "!doc": "Collapses the Range to one of its boundary points."
        },
        "cloneContents": {
          "!type": "fn() -> +DocumentFragment",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.cloneContents",
          "!doc": "Returns a DocumentFragment copying the Nodes of a Range."
        },
        "deleteContents": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.deleteContents",
          "!doc": "Removes the contents of a Range from the Document."
        },
        "extractContents": {
          "!type": "fn() -> +DocumentFragment",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.extractContents",
          "!doc": "Moves contents of a Range from the document tree into a DocumentFragment."
        },
        "insertNode": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.insertNode",
          "!doc": "Insert a node at the start of a Range."
        },
        "surroundContents": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.surroundContents",
          "!doc": "Moves content of a Range into a new node, placing the new node at the start of the specified range."
        },
        "compareBoundaryPoints": {
          "!type": "fn(how: number, other: +Range) -> number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.compareBoundaryPoints",
          "!doc": "Compares the boundary points of two Ranges."
        },
        "cloneRange": {
          "!type": "fn() -> +Range",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.cloneRange",
          "!doc": "Returns a Range object with boundary points identical to the cloned Range."
        },
        "detach": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/range.detach",
          "!doc": "Releases a Range from use to improve performance. This lets the browser choose to release resources associated with this Range. Subsequent attempts to use the detached range will result in a DOMException being thrown with an error code of INVALID_STATE_ERR."
        },
        "END_TO_END": "number",
        "END_TO_START": "number",
        "START_TO_END": "number",
        "START_TO_START": "number"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/range.detach",
      "!doc": "Releases a Range from use to improve performance. This lets the browser choose to release resources associated with this Range. Subsequent attempts to use the detached range will result in a DOMException being thrown with an error code of INVALID_STATE_ERR."
    },
    "XMLHttpRequest": {
      "!type": "fn()",
      "prototype": {
        "abort": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "Aborts the request if it has already been sent."
        },
        "getAllResponseHeaders": {
          "!type": "fn() -> string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "Returns all the response headers as a string, or null if no response has been received. Note: For multipart requests, this returns the headers from the current part of the request, not from the original channel."
        },
        "getResponseHeader": {
          "!type": "fn(header: string) -> string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "Returns the string containing the text of the specified header, or null if either the response has not yet been received or the header doesn't exist in the response."
        },
        "open": {
          "!type": "fn(method: string, url: string, async?: bool, user?: string, password?: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "Initializes a request."
        },
        "overrideMimeType": {
          "!type": "fn(type: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "Overrides the MIME type returned by the server."
        },
        "send": {
          "!type": "fn(data?: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived."
        },
        "setRequestHeader": {
          "!type": "fn(header: string, value: string)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "Sets the value of an HTTP request header.You must call setRequestHeader() after open(), but before send()."
        },
        "onreadystatechange": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "A JavaScript function object that is called whenever the readyState attribute changes."
        },
        "readyState": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "The state of the request. (0=unsent, 1=opened, 2=headers_received, 3=loading, 4=done)"
        },
        "response": {
          "!type": "+Document",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "The response entity body according to responseType, as an ArrayBuffer, Blob, Document, JavaScript object (for \"json\"), or string. This is null if the request is not complete or was not successful."
        },
        "responseText": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "The response to the request as text, or null if the request was unsuccessful or has not yet been sent."
        },
        "responseType": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "Can be set to change the response type."
        },
        "responseXML": {
          "!type": "+Document",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "The response to the request as a DOM Document object, or null if the request was unsuccessful, has not yet been sent, or cannot be parsed as XML or HTML."
        },
        "status": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "The status of the response to the request. This is the HTTP result code"
        },
        "statusText": {
          "!type": "string",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
          "!doc": "The response string returned by the HTTP server. Unlike status, this includes the entire text of the response message (\"200 OK\", for example)."
        },
        "timeout": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest/Synchronous_and_Asynchronous_Requests",
          "!doc": "The number of milliseconds a request can take before automatically being terminated. A value of 0 (which is the default) means there is no timeout."
        },
        "UNSENT": "number",
        "OPENED": "number",
        "HEADERS_RECEIVED": "number",
        "LOADING": "number",
        "DONE": "number"
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest",
      "!doc": "XMLHttpRequest is a JavaScript object that was designed by Microsoft and adopted by Mozilla, Apple, and Google. It's now being standardized in the W3C. It provides an easy way to retrieve data at a URL. Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML, and it supports protocols other than HTTP (including file and ftp)."
    },
    "DOMParser": {
      "!type": "fn()",
      "prototype": {
        "parseFromString": {
          "!type": "fn(data: string, mime: string) -> +Document",
          "!url": "https://developer.mozilla.org/en/docs/DOM/DOMParser",
          "!doc": "DOMParser can parse XML or HTML source stored in a string into a DOM Document. DOMParser is specified in DOM Parsing and Serialization."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/DOMParser",
      "!doc": "DOMParser can parse XML or HTML source stored in a string into a DOM Document. DOMParser is specified in DOM Parsing and Serialization."
    },
    "Selection": {
      "!type": "fn()",
      "prototype": {
        "anchorNode": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/anchorNode",
          "!doc": "Returns the node in which the selection begins."
        },
        "anchorOffset": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/anchorOffset",
          "!doc": "Returns the number of characters that the selection's anchor is offset within the anchorNode."
        },
        "focusNode": {
          "!type": "+Element",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/focusNode",
          "!doc": "Returns the node in which the selection ends."
        },
        "focusOffset": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/focusOffset",
          "!doc": "Returns the number of characters that the selection's focus is offset within the focusNode. "
        },
        "isCollapsed": {
          "!type": "bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/isCollapsed",
          "!doc": "Returns a boolean indicating whether the selection's start and end points are at the same position."
        },
        "rangeCount": {
          "!type": "number",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/rangeCount",
          "!doc": "Returns the number of ranges in the selection."
        },
        "getRangeAt": {
          "!type": "fn(i: number) -> +Range",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/getRangeAt",
          "!doc": "Returns a range object representing one of the ranges currently selected."
        },
        "collapse": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/collapse",
          "!doc": "Collapses the current selection to a single point. The document is not modified. If the content is focused and editable, the caret will blink there."
        },
        "extend": {
          "!type": "fn(node: +Element, offset: number)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/extend",
          "!doc": "Moves the focus of the selection to a specified point. The anchor of the selection does not move. The selection will be from the anchor to the new focus regardless of direction."
        },
        "collapseToStart": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/collapseToStart",
          "!doc": "Collapses the selection to the start of the first range in the selection.  If the content of the selection is focused and editable, the caret will blink there."
        },
        "collapseToEnd": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/collapseToEnd",
          "!doc": "Collapses the selection to the end of the last range in the selection.  If the content the selection is in is focused and editable, the caret will blink there."
        },
        "selectAllChildren": {
          "!type": "fn(node: +Element)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/selectAllChildren",
          "!doc": "Adds all the children of the specified node to the selection. Previous selection is lost."
        },
        "addRange": {
          "!type": "fn(range: +Range)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/addRange",
          "!doc": "Adds a Range to a Selection."
        },
        "removeRange": {
          "!type": "fn(range: +Range)",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/removeRange",
          "!doc": "Removes a range from the selection."
        },
        "removeAllRanges": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/removeAllRanges",
          "!doc": "Removes all ranges from the selection, leaving the anchorNode and focusNode properties equal to null and leaving nothing selected. "
        },
        "deleteFromDocument": {
          "!type": "fn()",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/deleteFromDocument",
          "!doc": "Deletes the actual text being represented by a selection object from the document's DOM."
        },
        "containsNode": {
          "!type": "fn(node: +Element) -> bool",
          "!url": "https://developer.mozilla.org/en/docs/DOM/Selection/containsNode",
          "!doc": "Indicates if the node is part of the selection."
        }
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Selection",
      "!doc": "Selection is the class of the object returned by window.getSelection() and other methods. It represents the text selection in the greater page, possibly spanning multiple elements, when the user drags over static text and other parts of the page. For information about text selection in an individual text editing element."
    },
    "console": {
      "error": {
        "!type": "fn(text: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/console.error",
        "!doc": "Outputs an error message to the Web Console."
      },
      "info": {
        "!type": "fn(text: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/console.info",
        "!doc": "Outputs an informational message to the Web Console."
      },
      "log": {
        "!type": "fn(text: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/console.log",
        "!doc": "Outputs a message to the Web Console."
      },
      "warn": {
        "!type": "fn(text: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/console.warn",
        "!doc": "Outputs a warning message to the Web Console."
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/console",
      "!doc": "The console object provides access to the browser's debugging console. The specifics of how it works vary from browser to browser, but there is a de facto set of features that are typically provided."
    },
    "top": {
      "!type": "<top>",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.top",
      "!doc": "Returns a reference to the topmost window in the window hierarchy."
    },
    "parent": {
      "!type": "<top>",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.parent",
      "!doc": "A reference to the parent of the current window or subframe."
    },
    "window": {
      "!type": "<top>",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window",
      "!doc": "This section provides a brief reference for all of the methods, properties, and events available through the DOM window object. The window object implements the Window interface, which in turn inherits from the AbstractView interface. Some additional global functions, namespaces objects, and constructors, not typically associated with the window, but available on it, are listed in the JavaScript Reference."
    },
    "opener": {
      "!type": "<top>",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.opener",
      "!doc": "Returns a reference to the window that opened this current window."
    },
    "self": {
      "!type": "<top>",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.self",
      "!doc": "Returns an object reference to the window object. "
    },
    "devicePixelRatio": "number",
    "name": {
      "!type": "string",
      "!url": "https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Function/name",
      "!doc": "The name of the function."
    },
    "closed": {
      "!type": "bool",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.closed",
      "!doc": "This property indicates whether the referenced window is closed or not."
    },
    "pageYOffset": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.scrollY",
      "!doc": "Returns the number of pixels that the document has already been scrolled vertically."
    },
    "pageXOffset": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.scrollX",
      "!doc": "Returns the number of pixels that the document has already been scrolled vertically."
    },
    "scrollY": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.scrollY",
      "!doc": "Returns the number of pixels that the document has already been scrolled vertically."
    },
    "scrollX": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.scrollX",
      "!doc": "Returns the number of pixels that the document has already been scrolled vertically."
    },
    "screenTop": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.top",
      "!doc": "Returns the distance in pixels from the top side of the current screen."
    },
    "screenLeft": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.left",
      "!doc": "Returns the distance in pixels from the left side of the main screen to the left side of the current screen."
    },
    "screenY": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/event.screenY",
      "!doc": "Returns the vertical coordinate of the event within the screen as a whole."
    },
    "screenX": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/event.screenX",
      "!doc": "Returns the horizontal coordinate of the event within the screen as a whole."
    },
    "innerWidth": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.innerWidth",
      "!doc": "Width (in pixels) of the browser window viewport including, if rendered, the vertical scrollbar."
    },
    "innerHeight": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.innerHeight",
      "!doc": "Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar."
    },
    "outerWidth": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.outerWidth",
      "!doc": "window.outerWidth gets the width of the outside of the browser window. It represents the width of the whole browser window including sidebar (if expanded), window chrome and window resizing borders/handles."
    },
    "outerHeight": {
      "!type": "number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.outerHeight",
      "!doc": "window.outerHeight gets the height in pixels of the whole browser window."
    },
    "frameElement": {
      "!type": "+Element",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.frameElement",
      "!doc": "Returns the element (such as <iframe> or <object>) in which the window is embedded, or null if the window is top-level."
    },
    "crypto": {
      "getRandomValues": {
        "!type": "fn([number])",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.crypto.getRandomValues",
        "!doc": "This methods lets you get cryptographically random values."
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.crypto.getRandomValues",
      "!doc": "This methods lets you get cryptographically random values."
    },
    "navigator": {
      "appName": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator.appName",
        "!doc": "Returns the name of the browser. The HTML5 specification also allows any browser to return \"Netscape\" here, for compatibility reasons."
      },
      "appVersion": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator.appVersion",
        "!doc": "Returns the version of the browser as a string. It may be either a plain version number, like \"5.0\", or a version number followed by more detailed information. The HTML5 specification also allows any browser to return \"4.0\" here, for compatibility reasons."
      },
      "language": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator.language",
        "!doc": "Returns a string representing the language version of the browser."
      },
      "platform": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator.platform",
        "!doc": "Returns a string representing the platform of the browser."
      },
      "plugins": {
        "!type": "[?]",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator.plugins",
        "!doc": "Returns a PluginArray object, listing the plugins installed in the application."
      },
      "userAgent": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator.userAgent",
        "!doc": "Returns the user agent string for the current browser."
      },
      "vendor": {
        "!type": "string",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator.vendor",
        "!doc": "Returns the name of the browser vendor for the current browser."
      },
      "javaEnabled": {
        "!type": "bool",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator.javaEnabled",
        "!doc": "This method indicates whether the current browser is Java-enabled or not."
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.navigator",
      "!doc": "Returns a reference to the navigator object, which can be queried for information about the application running the script."
    },
    "history": {
      "state": {
        "!type": "?",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Manipulating_the_browser_history",
        "!doc": "The DOM window object provides access to the browser's history through the history object. It exposes useful methods and properties that let you move back and forth through the user's history, as well as -- starting with HTML5 -- manipulate the contents of the history stack."
      },
      "length": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Manipulating_the_browser_history",
        "!doc": "The DOM window object provides access to the browser's history through the history object. It exposes useful methods and properties that let you move back and forth through the user's history, as well as -- starting with HTML5 -- manipulate the contents of the history stack."
      },
      "go": {
        "!type": "fn(delta: number)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.history",
        "!doc": "Returns a reference to the History object, which provides an interface for manipulating the browser session history (pages visited in the tab or frame that the current page is loaded in)."
      },
      "forward": {
        "!type": "fn()",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Manipulating_the_browser_history",
        "!doc": "The DOM window object provides access to the browser's history through the history object. It exposes useful methods and properties that let you move back and forth through the user's history, as well as -- starting with HTML5 -- manipulate the contents of the history stack."
      },
      "back": {
        "!type": "fn()",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Manipulating_the_browser_history",
        "!doc": "The DOM window object provides access to the browser's history through the history object. It exposes useful methods and properties that let you move back and forth through the user's history, as well as -- starting with HTML5 -- manipulate the contents of the history stack."
      },
      "pushState": {
        "!type": "fn(data: ?, title: string, url?: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Manipulating_the_browser_history",
        "!doc": "The DOM window object provides access to the browser's history through the history object. It exposes useful methods and properties that let you move back and forth through the user's history, as well as -- starting with HTML5 -- manipulate the contents of the history stack."
      },
      "replaceState": {
        "!type": "fn(data: ?, title: string, url?: string)",
        "!url": "https://developer.mozilla.org/en/docs/DOM/Manipulating_the_browser_history",
        "!doc": "The DOM window object provides access to the browser's history through the history object. It exposes useful methods and properties that let you move back and forth through the user's history, as well as -- starting with HTML5 -- manipulate the contents of the history stack."
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/Manipulating_the_browser_history",
      "!doc": "The DOM window object provides access to the browser's history through the history object. It exposes useful methods and properties that let you move back and forth through the user's history, as well as -- starting with HTML5 -- manipulate the contents of the history stack."
    },
    "screen": {
      "availWidth": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.availWidth",
        "!doc": "Returns the amount of horizontal space in pixels available to the window."
      },
      "availHeight": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.availHeight",
        "!doc": "Returns the amount of vertical space available to the window on the screen."
      },
      "availTop": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.availTop",
        "!doc": "Specifies the y-coordinate of the first pixel that is not allocated to permanent or semipermanent user interface features."
      },
      "availLeft": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.availLeft",
        "!doc": "Returns the first available pixel available from the left side of the screen."
      },
      "pixelDepth": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.pixelDepth",
        "!doc": "Returns the bit depth of the screen."
      },
      "colorDepth": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.colorDepth",
        "!doc": "Returns the color depth of the screen."
      },
      "width": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.width",
        "!doc": "Returns the width of the screen."
      },
      "height": {
        "!type": "number",
        "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen.height",
        "!doc": "Returns the height of the screen in pixels."
      },
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.screen",
      "!doc": "Returns a reference to the screen object associated with the window."
    },
    "postMessage": {
      "!type": "fn(message: string, targetOrigin: string)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.postMessage",
      "!doc": "window.postMessage, when called, causes a MessageEvent to be dispatched at the target window when any pending script that must be executed completes (e.g. remaining event handlers if window.postMessage is called from an event handler, previously-set pending timeouts, etc.). The MessageEvent has the type message, a data property which is set to the value of the first argument provided to window.postMessage, an origin property corresponding to the origin of the main document in the window calling window.postMessage at the time window.postMessage was called, and a source property which is the window from which window.postMessage is called. (Other standard properties of events are present with their expected values.)"
    },
    "close": {
      "!type": "fn()",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.close",
      "!doc": "Closes the current window, or a referenced window."
    },
    "blur": {
      "!type": "fn()",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.blur",
      "!doc": "The blur method removes keyboard focus from the current element."
    },
    "focus": {
      "!type": "fn()",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.focus",
      "!doc": "Sets focus on the specified element, if it can be focused."
    },
    "onload": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onload",
      "!doc": "An event handler for the load event of a window."
    },
    "onunload": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onunload",
      "!doc": "The unload event is raised when the window is unloading its content and resources. The resources removal is processed after the unload event occurs."
    },
    "onscroll": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onscroll",
      "!doc": "Specifies the function to be called when the window is scrolled."
    },
    "onresize": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onresize",
      "!doc": "An event handler for the resize event on the window."
    },
    "ononline": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/document.ononline",
      "!doc": ",fgh s dgkljgsdfl dfjg sdlgj sdlg sdlfj dlg jkdfkj dfjgdfkglsdfjsdlfkgj hdflkg hdlkfjgh dfkjgh"
    },
    "onoffline": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/Online_and_offline_events",
      "!doc": "Some browsers implement Online/Offline events from the WHATWG Web Applications 1.0 specification."
    },
    "onmousewheel": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/DOM_event_reference/mousewheel",
      "!doc": "The DOM mousewheel event is fired asynchronously when mouse wheel or similar device is operated. It's represented by the MouseWheelEvent interface."
    },
    "onmouseup": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onmouseup",
      "!doc": "An event handler for the mouseup event on the window."
    },
    "onmouseover": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onmouseover",
      "!doc": "The onmouseover property returns the onMouseOver event handler code on the current element."
    },
    "onmouseout": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onmouseout",
      "!doc": "The onmouseout property returns the onMouseOut event handler code on the current element."
    },
    "onmousemove": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onmousemove",
      "!doc": "The onmousemove property returns the mousemove event handler code on the current element."
    },
    "onmousedown": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onmousedown",
      "!doc": "An event handler for the mousedown event on the window."
    },
    "onclick": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onclick",
      "!doc": "The onclick property returns the onClick event handler code on the current element."
    },
    "ondblclick": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.ondblclick",
      "!doc": "The ondblclick property returns the onDblClick event handler code on the current element."
    },
    "onmessage": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/Worker",
      "!doc": "Dedicated Web Workers provide a simple means for web content to run scripts in background threads.  Once created, a worker can send messages to the spawning task by posting messages to an event handler specified by the creator."
    },
    "onkeyup": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onkeyup",
      "!doc": "The onkeyup property returns the onKeyUp event handler code for the current element."
    },
    "onkeypress": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onkeypress",
      "!doc": "The onkeypress property sets and returns the onKeyPress event handler code for the current element."
    },
    "onkeydown": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onkeydown",
      "!doc": "An event handler for the keydown event on the window."
    },
    "oninput": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/DOM_event_reference/input",
      "!doc": "The DOM input event is fired synchronously when the value of an <input> or <textarea> element is changed. Additionally, it's also fired on contenteditable editors when its contents are changed. In this case, the event target is the editing host element. If there are two or more elements which have contenteditable as true, \"editing host\" is the nearest ancestor element whose parent isn't editable. Similarly, it's also fired on root element of designMode editors."
    },
    "onpopstate": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onpopstate",
      "!doc": "An event handler for the popstate event on the window."
    },
    "onhashchange": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onhashchange",
      "!doc": "The hashchange event fires when a window's hash changes."
    },
    "onfocus": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onfocus",
      "!doc": "The onfocus property returns the onFocus event handler code on the current element."
    },
    "onblur": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onblur",
      "!doc": "The onblur property returns the onBlur event handler code, if any, that exists on the current element."
    },
    "onerror": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onerror",
      "!doc": "An event handler for runtime script errors."
    },
    "ondrop": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/drop",
      "!doc": "The drop event is fired when an element or text selection is dropped on a valid drop target."
    },
    "ondragstart": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/dragstart",
      "!doc": "The dragstart event is fired when the user starts dragging an element or text selection."
    },
    "ondragover": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/dragover",
      "!doc": "The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds)."
    },
    "ondragleave": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/dragleave",
      "!doc": "The dragleave event is fired when a dragged element or text selection leaves a valid drop target."
    },
    "ondragenter": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/dragenter",
      "!doc": "The dragenter event is fired when a dragged element or text selection enters a valid drop target."
    },
    "ondragend": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/dragend",
      "!doc": "The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key)."
    },
    "ondrag": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/drag",
      "!doc": "The drag event is fired when an element or text selection is being dragged (every few hundred milliseconds)."
    },
    "oncontextmenu": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.oncontextmenu",
      "!doc": "An event handler property for right-click events on the window. Unless the default behavior is prevented, the browser context menu will activate (though IE8 has a bug with this and will not activate the context menu if a contextmenu event handler is defined). Note that this event will occur with any non-disabled right-click event and does not depend on an element possessing the \"contextmenu\" attribute."
    },
    "onchange": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/element.onchange",
      "!doc": "The onchange property sets and returns the onChange event handler code for the current element."
    },
    "onbeforeunload": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onbeforeunload",
      "!doc": "An event that fires when a window is about to unload its resources. The document is still visible and the event is still cancelable."
    },
    "onabort": {
      "!type": "?",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.onabort",
      "!doc": "An event handler for abort events sent to the window."
    },
    "getSelection": {
      "!type": "fn() -> +Selection",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.getSelection",
      "!doc": "Returns a selection object representing the range of text selected by the user. "
    },
    "alert": {
      "!type": "fn(message: string)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.alert",
      "!doc": "Display an alert dialog with the specified content and an OK button."
    },
    "confirm": {
      "!type": "fn(message: string) -> bool",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.confirm",
      "!doc": "Displays a modal dialog with a message and two buttons, OK and Cancel."
    },
    "prompt": {
      "!type": "fn(message: string, value: string) -> string",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.prompt",
      "!doc": "Displays a dialog with a message prompting the user to input some text."
    },
    "scrollBy": {
      "!type": "fn(x: number, y: number)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.scrollBy",
      "!doc": "Scrolls the document in the window by the given amount."
    },
    "scrollTo": {
      "!type": "fn(x: number, y: number)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.scrollTo",
      "!doc": "Scrolls to a particular set of coordinates in the document."
    },
    "scroll": {
      "!type": "fn(x: number, y: number)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.scroll",
      "!doc": "Scrolls the window to a particular place in the document."
    },
    "setTimeout": {
      "!type": "fn(f: fn(), ms: number) -> number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.setTimeout",
      "!doc": "Calls a function or executes a code snippet after specified delay."
    },
    "clearTimeout": {
      "!type": "fn(timeout: number)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.clearTimeout",
      "!doc": "Clears the delay set by window.setTimeout()."
    },
    "setInterval": {
      "!type": "fn(f: fn(), ms: number) -> number",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.setInterval",
      "!doc": "Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function."
    },
    "clearInterval": {
      "!type": "fn(interval: number)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.clearInterval",
      "!doc": "Cancels repeated action which was set up using setInterval."
    },
    "atob": {
      "!type": "fn(encoded: string) -> string",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.atob",
      "!doc": "Decodes a string of data which has been encoded using base-64 encoding."
    },
    "btoa": {
      "!type": "fn(data: string) -> string",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.btoa",
      "!doc": "Creates a base-64 encoded ASCII string from a string of binary data."
    },
    "addEventListener": {
      "!type": "fn(type: string, listener: fn(e: +Event), capture: bool)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/EventTarget.addEventListener",
      "!doc": "Registers a single event listener on a single target. The event target may be a single element in a document, the document itself, a window, or an XMLHttpRequest."
    },
    "removeEventListener": {
      "!type": "fn(type: string, listener: fn(), capture: bool)",
      "!url": "https://developer.mozilla.org/en/docs/DOM/EventTarget.removeEventListener",
      "!doc": "Allows the removal of event listeners from the event target."
    },
    "dispatchEvent": {
      "!type": "fn(event: +Event) -> bool",
      "!url": "https://developer.mozilla.org/en/docs/DOM/EventTarget.dispatchEvent",
      "!doc": "Dispatches an event into the event system. The event is subject to the same capturing and bubbling behavior as directly dispatched events."
    },
    "getComputedStyle": {
      "!type": "fn(node: +Element, pseudo?: string) -> Element.prototype.style",
      "!url": "https://developer.mozilla.org/en/docs/DOM/window.getComputedStyle",
      "!doc": "Gives the final used values of all the CSS properties of an element."
    },
    "CanvasRenderingContext2D": {
      "canvas": "+Element",
      "width": "number",
      "height": "number",
      "commit": "fn()",
      "save": "fn()",
      "restore": "fn()",
      "currentTransform": "?",
      "scale": "fn(x: number, y: number)",
      "rotate": "fn(angle: number)",
      "translate": "fn(x: number, y: number)",
      "transform": "fn(a: number, b: number, c: number, d: number, e: number, f: number)",
      "setTransform": "fn(a: number, b: number, c: number, d: number, e: number, f: number)",
      "resetTransform": "fn()",
      "globalAlpha": "number",
      "globalCompositeOperation": "string",
      "imageSmoothingEnabled": "bool",
      "strokeStyle": "string",
      "fillStyle": "string",
      "createLinearGradient": "fn(x0: number, y0: number, x1: number, y1: number) -> ?",
      "createPattern": "fn(image: ?, repetition: string) -> ?",
      "shadowOffsetX": "number",
      "shadowOffsetY": "number",
      "shadowBlur": "number",
      "shadowColor": "string",
      "clearRect": "fn(x: number, y: number, w: number, h: number)",
      "fillRect": "fn(x: number, y: number, w: number, h: number)",
      "strokeRect": "fn(x: number, y: number, w: number, h: number)",
      "fillRule": "string",
      "fill": "fn()",
      "beginPath": "fn()",
      "stroke": "fn()",
      "clip": "fn()",
      "resetClip": "fn()",
      "measureText": "fn(text: string) -> ?",
      "drawImage": "fn(image: ?, dx: number, dy: number)",
      "createImageData": "fn(sw: number, sh: number) -> ?",
      "getImageData": "fn(sx: number, sy: number, sw: number, sh: number) -> ?",
      "putImageData": "fn(imagedata: ?, dx: number, dy: number)",
      "lineWidth": "number",
      "lineCap": "string",
      "lineJoin": "string",
      "miterLimit": "number",
      "setLineDash": "fn(segments: [number])",
      "getLineDash": "fn() -> [number]",
      "lineDashOffset": "number",
      "font": "string",
      "textAlign": "string",
      "textBaseline": "string",
      "direction": "string",
      "closePath": "fn()",
      "moveTo": "fn(x: number, y: number)",
      "lineTo": "fn(x: number, y: number)",
      "quadraticCurveTo": "fn(cpx: number, cpy: number, x: number, y: number)",
      "bezierCurveTo": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number)",
      "arcTo": "fn(x1: number, y1: number, x2: number, y2: number, radius: number)",
      "rect": "fn(x: number, y: number, w: number, h: number)",
      "arc": "fn(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: bool)",
      "ellipse": "fn(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: bool)"
    }
  });
  ternBasicDefs[2] = ({
    "!name": "underscore",
    "_": {
      "!doc": "Save the previous value of the `_` variable.",
      "!type": "fn(obj: ?) -> +_",
      "VERSION": {
        "!type": "string",
        "!url": "http://underscorejs.org/#VERSION"
      },
      "after": {
        "!doc": "Returns a function that will only be executed after being called N times.",
        "!url": "http://underscorejs.org/#after",
        "!type": "fn(times: number, func: fn()) -> !1"
      },
      "all": "_.every",
      "any": "_.some",
      "bind": {
        "!doc": "Create a function bound to a given object (assigning `this`, and arguments, optionally).",
        "!type": "fn(func: ?, context?: ?, args?: ?) -> !0",
        "!url": "http://underscorejs.org/#bind"
      },
      "bindAll": {
        "!doc": "Bind all of an object's methods to that object.",
        "!type": "fn(obj: ?, names?: [string])",
        "!url": "http://underscorejs.org/#bindAll"
      },
      "chain": {
        "!doc": "Add a \"chain\" function, which will delegate to the wrapper.",
        "!type": "fn(obj: ?)",
        "!url": "http://underscorejs.org/#chain"
      },
      "clone": {
        "!doc": "Create a (shallow-cloned) duplicate of an object.",
        "!type": "fn(obj: ?) -> !0",
        "!url": "http://underscorejs.org/#clone"
      },
      "collect": "_.map",
      "compact": {
        "!doc": "Trim out all falsy values from an array.",
        "!type": "fn(array: [?]) -> [?]",
        "!url": "http://underscorejs.org/#compact"
      },
      "compose": {
        "!doc": "Returns a function that is the composition of a list of functions, each consuming the return value of the function that follows.",
        "!type": "fn(a: fn(), b: fn()) -> fn() -> !1.!ret",
        "!url": "http://underscorejs.org/#compose"
      },
      "contains": {
        "!doc": "Determine if the array or object contains a given value (using `===`).",
        "!type": "fn(list: [?], target: ?) -> bool",
        "!url": "http://underscorejs.org/#contains"
      },
      "countBy": {
        "!doc": "Counts instances of an object that group by a certain criterion.",
        "!type": "fn(obj: ?, iterator: fn(elt: ?, i: number) -> ?, context?: ?) -> ?",
        "!url": "http://underscorejs.org/#countBy"
      },
      "debounce": {
        "!doc": "Returns a function, that, as long as it continues to be invoked, will not be triggered.",
        "!type": "fn(func: fn(), wait: number, immediate?: bool) -> !0",
        "!url": "http://underscorejs.org/#debounce"
      },
      "defaults": {
        "!doc": "Fill in a given object with default properties.",
        "!type": "fn(obj: ?, defaults: ?) -> !0",
        "!effects": ["copy !1 !0"],
        "!url": "http://underscorejs.org/#defaults"
      },
      "defer": {
        "!doc": "Defers a function, scheduling it to run after the current call stack has cleared.",
        "!type": "fn(func: fn(), args?: ?) -> number",
        "!url": "http://underscorejs.org/#defer"
      },
      "delay": {
        "!doc": "Delays a function for the given number of milliseconds, and then calls it with the arguments supplied.",
        "!type": "fn(func: fn(), wait: number, args?: ?) -> number",
        "!url": "http://underscorejs.org/#delay"
      },
      "detect": "_.find",
      "difference": {
        "!doc": "Take the difference between one array and a number of other arrays.",
        "!type": "fn(array: [?], others?: [?]) -> !0",
        "!url": "http://underscorejs.org/#difference"
      },
      "drop": "_.rest",
      "each": {
        "!doc": "Iterates over a list of elements, yielding each in turn to an iterator function.",
        "!type": "fn(obj: [?], iterator: fn(value: ?, index: number), context?: ?)",
        "!effects": ["call !1 this=!2 !0.<i> number"],
        "!url": "http://underscorejs.org/#each"
      },
      "escape": {
        "!doc": "Escapes a string for insertion into HTML.",
        "!type": "fn(string) -> string",
        "!url": "http://underscorejs.org/#escape"
      },
      "every": {
        "!doc": "Determine whether all of the elements match a truth test.",
        "!type": "fn(list: [?], iterator: fn(elt: ?, i: number) -> bool, context?: ?) -> bool",
        "!effects": ["call !1 this=!2 !0.<i> number"],
        "!url": "http://underscorejs.org/#every"
      },
      "extend": {
        "!doc": "Extend a given object with all the properties in passed-in object(s).",
        "!type": "fn(destination: ?, source1: ?, source2?: ?) -> !0",
        "!effects": ["copy !1 !0", "copy !2 !0"],
        "!url": "http://underscorejs.org/#extend"
      },
      "filter": {
        "!doc": "Looks through each value in the list, returning an array of all the values that pass a truth test.",
        "!type": "fn(list: [?], test: fn(value: ?, index: number) -> bool, context?: ?) -> !0",
        "!effects": ["call !1 this=!2 !0.<i> number"],
        "!url": "http://underscorejs.org/#filter"
      },
      "find": {
        "!doc": "Return the first value which passes a truth test.",
        "!type": "fn(list: [?], test: fn(?) -> bool, context?: ?) -> !0.<i>",
        "!effects": ["call !1 !0.<i>"],
        "!url": "http://underscorejs.org/#find"
      },
      "findWhere": {
        "!doc": "Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.",
        "!type": "fn(list: [?], attrs: ?) -> !0.<i>",
        "!url": "http://underscorejs.org/#findWhere"
      },
      "first": {
        "!doc": "Get the first element of an array. Passing n will return the first N values in the array.",
        "!type": "fn(list: [?], n?: number) -> !0.<i>",
        "!url": "http://underscorejs.org/#first"
      },
      "flatten": {
        "!doc": "Return a completely flattened version of an array.",
        "!type": "fn(array: [?], shallow?: bool) -> [?]",
        "!url": "http://underscorejs.org/#flatten"
      },
      "foldl": "_.reduce",
      "foldr": "_.reduceRight",
      "forEach": "_.each",
      "functions": {
        "!doc": "Return a sorted list of the function names available on the object.",
        "!type": "fn(obj: _) -> [string]",
        "!url": "http://underscorejs.org/#functions"
      },
      "groupBy": {
        "!doc": "Groups the object's values by a criterion.",
        "!type": "fn(obj: [?], iterator: fn(elt: ?, i: number) -> ?, context?: ?) -> ?",
        "!url": "http://underscorejs.org/#groupBy"
      },
      "has": {
        "!doc": "Shortcut function for checking if an object has a given property directly on itself (in other words, not on a prototype).",
        "!type": "fn(obj: ?, key: string) -> bool",
        "!url": "http://underscorejs.org/#has"
      },
      "head": "_.first",
      "identity": {
        "!doc": "Returns the same value that is used as the argument.",
        "!type": "fn(value: ?) -> !0",
        "!url": "http://underscorejs.org/#identity"
      },
      "include": "_.contains",
      "indexOf": {
        "!doc": "Returns the index at which value can be found in the array, or -1 if value is not present in the array.",
        "!type": "fn(list: [?], item: ?, isSorted?: bool) -> number",
        "!url": "http://underscorejs.org/#indexOf"
      },
      "initial": {
        "!doc": "Returns everything but the last entry of the array.",
        "!type": "fn(array: [?], n?: number) -> !0",
        "!url": "http://underscorejs.org/#initial"
      },
      "inject": "_.reduce",
      "intersection": {
        "!doc": "Produce an array that contains every item shared between all the passed-in arrays.",
        "!type": "fn(array: [?], others?: [?]) -> !0",
        "!url": "http://underscorejs.org/#intersection"
      },
      "invert": {
        "!doc": "Invert the keys and values of an object.",
        "!type": "fn(obj: ?) -> ?",
        "!url": "http://underscorejs.org/#invert"
      },
      "invoke": {
        "!doc": "Invoke a method (with arguments) on every item in a collection.",
        "!type": "fn(obj: ?, method: string, args?: ?) -> [?]",
        "!url": "http://underscorejs.org/#invoke"
      },
      "isArguments": {
        "!doc": "Returns true if object is an Arguments object.",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isArguments"
      },
      "isArray": {
        "!doc": "Is a given value an array? Delegates to ECMA5's native Array.isArray",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isArray"
      },
      "isBoolean": {
        "!doc": "Is a given value a boolean?",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isBoolean"
      },
      "isDate": {
        "!doc": "Returns true if object is a Date object.",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isDate"
      },
      "isElement": {
        "!doc": "Is a given value a DOM element?",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isElement"
      },
      "isEmpty": {
        "!doc": "Is a given array, string, or object empty? An \"empty\" object has no enumerable own-properties.",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isEmpty"
      },
      "isEqual": {
        "!doc": "Perform a deep comparison to check if two objects are equal.",
        "!type": "fn(a: ?, b: ?) -> bool",
        "!url": "http://underscorejs.org/#isEqual"
      },
      "isFinite": {
        "!doc": "Is a given object a finite number?",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isFinite"
      },
      "isFunction": {
        "!doc": "Returns true if object is a Function.",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isFunction"
      },
      "isNaN": {
        "!doc": "Is the given value `NaN`? (NaN is the only number which does not equal itself).",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isNaN"
      },
      "isNull": {
        "!doc": "Is a given value equal to null?",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isNull"
      },
      "isNumber": {
        "!doc": "Returns true if object is a Number (including NaN).",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isNumber"
      },
      "isObject": {
        "!doc": "Is a given variable an object?",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isObject"
      },
      "isRegExp": {
        "!doc": "Returns true if object is a regular expression.",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isRegExp"
      },
      "isString": {
        "!doc": "Returns true if object is a String.",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isString"
      },
      "isUndefined": {
        "!doc": "Is a given variable undefined?",
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://underscorejs.org/#isUndefined"
      },
      "keys": {
        "!doc": "Retrieve the names of an object's properties. Delegates to ECMAScript 5's native `Object.keys`",
        "!type": "fn(obj: ?) -> [string]",
        "!url": "http://underscorejs.org/#keys"
      },
      "last": {
        "!doc": "Get the last element of an array.",
        "!type": "fn(array: [?], n?: number) -> !0.<i>",
        "!url": "http://underscorejs.org/#last"
      },
      "lastIndexOf": {
        "!doc": "Returns the index of the last occurrence of value in the array, or -1 if value is not present.",
        "!type": "fn(array: [?], item: ?, from?: number) -> number",
        "!url": "http://underscorejs.org/#lastIndexOf"
      },
      "map": {
        "!doc": "Produces a new array of values by mapping each value in list through a transformation function (iterator).",
        "!type": "fn(obj: [?], iterator: fn(elt: ?, i: number) -> ?, context?: ?) -> [!1.!ret]",
        "!effects": ["call !1 !this=!2 !0.<i> number"],
        "!url": "http://underscorejs.org/#map"
      },
      "max": {
        "!doc": "Returns the maximum value in list.",
        "!type": "fn(list: [?], iterator?: fn(elt: ?, i: number) -> number, context?: ?) -> number",
        "!url": "http://underscorejs.org/#max"
      },
      "memoize": {
        "!doc": "Memoize an expensive function by storing its results.",
        "!type": "fn(func: fn(), hasher?: fn(args: ?) -> ?) -> !0",
        "!url": "http://underscorejs.org/#memoize"
      },
      "methods": "_.functions",
      "min": {
        "!doc": "Returns the minimum value in list.",
        "!type": "fn(list: [?], iterator?: fn(elt: ?, i: number) -> number, context?: ?) -> number",
        "!url": "http://underscorejs.org/#min"
      },
      "mixin": {
        "!doc": "Add your own custom functions to the Underscore object.",
        "!type": "fn(obj: _)",
        "!url": "http://underscorejs.org/#mixin"
      },
      "noConflict": {
        "!doc": "Run Underscore.js in *noConflict* mode, returning the `_` variable to its previous owner. Returns a reference to the Underscore object.",
        "!type": "fn() -> _",
        "!url": "http://underscorejs.org/#noConflict"
      },
      "object": {
        "!doc": "Converts lists into objects.",
        "!type": "fn(list: [?], values?: [?]) -> ?",
        "!url": "http://underscorejs.org/#object"
      },
      "omit": {
        "!doc": "Return a copy of the object without the blacklisted properties.",
        "!type": "fn(obj: ?, keys?: string) -> !0",
        "!url": "http://underscorejs.org/#omit"
      },
      "once": {
        "!doc": "Returns a function that will be executed at most one time, no matter how often you call it.",
        "!type": "fn(func: fn() -> ?) -> !0",
        "!url": "http://underscorejs.org/#once"
      },
      "pairs": {
        "!doc": "Convert an object into a list of `[key, value]` pairs.",
        "!type": "fn(obj: ?) -> [[?]]",
        "!url": "http://underscorejs.org/#pairs"
      },
      "partial": {
        "!doc": "Partially apply a function by creating a version that has had some of its arguments pre-filled, without changing its dynamic `this` context.",
        "!type": "fn(func: ?, args?: ?) -> fn()",
        "!url": "http://underscorejs.org/#partial"
      },
      "pick": {
        "!doc": "Return a copy of the object only containing the whitelisted properties.",
        "!type": "fn(obj: ?, keys?: string) -> !0",
        "!url": "http://underscorejs.org/#pick"
      },
      "pluck": {
        "!doc": "Convenience version of a common use case of `map`: fetching a property.",
        "!type": "fn(obj: [?], key: string) -> [?]",
        "!url": "http://underscorejs.org/#pluck"
      },
      "prototype": {
        "chain": {
          "!doc": "Start chaining a wrapped Underscore object.",
          "!type": "fn() -> !this"
        },
        "value": {
          "!doc": "Extracts the result from a wrapped and chained object.",
          "!type": "fn() -> ?"
        },
        "pop": "fn() -> ?",
        "push": "fn(newelt: ?) -> number",
        "reverse": "fn()",
        "shift": "fn() -> ?",
        "sort": "fn() -> !this",
        "splice": "fn(pos: number, amount: number)",
        "unshift": "fn(elt: ?) -> number",
        "concat": "fn(other: ?) -> !this",
        "join": "fn(separator?: string) -> string",
        "slice": "fn(from: number, to?: number) -> !this"
      },
      "random": {
        "!doc": "Return a random integer between min and max (inclusive).",
        "!type": "fn(min: number, max: number) -> number",
        "!url": "http://underscorejs.org/#random"
      },
      "range": {
        "!doc": "A function to create flexibly-numbered lists of integers.",
        "!type": "fn(start?: number, stop: number, step?: number) -> [number]",
        "!url": "http://underscorejs.org/#range"
      },
      "reduce": {
        "!doc": "reduce boils down a list of values into a single value.",
        "!type": "fn(list: [?], iterator: fn(sum: ?, elt: ?, i: number) -> ?, init?: ?, context?: ?) -> !1.!ret",
        "!effects": ["call !1 this=!3 !2 !0.<i> number"],
        "!url": "http://underscorejs.org/#reduce"
      },
      "reduceRight": {
        "!doc": "The right-associative version of reduce, also known as `foldr`.",
        "!type": "fn(list: [?], iterator: fn(sum: ?, elt: ?, i: number) -> ?, init?: ?, context?: ?) -> !1.!ret",
        "!effects": ["call !1 this=!3 !2 !0.<i> number"],
        "!url": "http://underscorejs.org/#reduceRight"
      },
      "reject": {
        "!doc": "Returns the values in list without the elements that the truth test (iterator) passes. The opposite of filter.",
        "!type": "fn(list: [?], iterator: fn(elt: ?, i: number) -> bool, context?: ?) -> !0",
        "!effects": ["call !1 this=!3 !0.<i> number"],
        "!url": "http://underscorejs.org/#reject"
      },
      "rest": {
        "!doc": "Returns the rest of the elements in an array.",
        "!type": "fn(array: [?], n?: number) -> !0",
        "!url": "http://underscorejs.org/#rest"
      },
      "result": {
        "!doc": "If the value of the named `property` is a function then invoke it with the `object` as context; otherwise, return it.",
        "!type": "fn(object: ?, property: string) -> !0.<i>",
        "!url": "http://underscorejs.org/#result"
      },
      "select": "_.filter",
      "shuffle": {
        "!doc": "Shuffle an array.",
        "!type": "fn(list: [?]) -> !0",
        "!url": "http://underscorejs.org/#shuffle"
      },
      "size": {
        "!doc": "Return the number of elements in an object.",
        "!type": "fn(obj: ?) -> number",
        "!url": "http://underscorejs.org/#size"
      },
      "some": {
        "!doc": "Returns true if any of the values in the list pass the iterator truth test.",
        "!type": "fn(list: [?], iterator: fn(elt: ?, i: number) -> bool, context?: ?) -> bool",
        "!effects": ["call !1 this=!2 !0.<i> number"],
        "!url": "http://underscorejs.org/#some"
      },
      "sortBy": {
        "!doc": "Sort the object's values by a criterion produced by an iterator.",
        "!type": "fn(list: [?], iterator: fn(elt: ?, i: number) -> number, context?: ?) -> !0",
        "!url": "http://underscorejs.org/#sortBy"
      },
      "sortedIndex": {
        "!doc": "Use a comparator function to figure out the smallest index at which an object should be inserted so as to maintain order.",
        "!type": "fn(array: [?], obj: ?, iterator: fn(elt: ?, i: number), context?: ?) -> number",
        "!url": "http://underscorejs.org/#sortedIndex"
      },
      "tail": "_.rest",
      "take": "_.first",
      "tap": {
        "!doc": "Invokes interceptor with the obj, and then returns obj.",
        "!type": "fn(obj: ?, interceptor: fn()) -> !0",
        "!effects": ["call !1 !0"],
        "!url": "http://underscorejs.org/#tap"
      },
      "template": {
        "!doc": "Compiles JavaScript templates into functions that can be evaluated for rendering. ",
        "!type": "fn(text: string, data?: ?, settings?: _.templateSettings) -> fn(data: ?) -> string",
        "!url": "http://underscorejs.org/#template"
      },
      "templateSettings": {
        "!doc": "By default, Underscore uses ERB-style template delimiters, change the following template settings to use alternative delimiters.",
        "escape": "+RegExp",
        "evaluate": "+RegExp",
        "interpolate": "+RegExp",
        "!url": "http://underscorejs.org/#templateSettings"
      },
      "throttle": {
        "!doc": "Returns a function, that, when invoked, will only be triggered at most once during a given window of time.",
        "!type": "fn(func: fn(), wait: number, options?: ?) -> !0",
        "!url": "http://underscorejs.org/#throttle"
      },
      "times": {
        "!doc": "Run a function n times.",
        "!type": "fn(n: number, iterator: fn(), context?: ?) -> [!1.!ret]",
        "!url": "http://underscorejs.org/#times"
      },
      "toArray": {
        "!doc": "Safely create a real, live array from anything iterable.",
        "!type": "fn(obj: ?) -> [?]",
        "!url": "http://underscorejs.org/#toArray"
      },
      "unescape": {
        "!doc": "The opposite of escape.",
        "!type": "fn(string) -> string",
        "!url": "http://underscorejs.org/#unescape"
      },
      "union": {
        "!doc": "Produce an array that contains the union: each distinct element from all of the passed-in arrays.",
        "!type": "fn(array: [?], array2: [?]) -> ?0",
        "!url": "http://underscorejs.org/#union"
      },
      "uniq": {
        "!doc": "Produce a duplicate-free version of the array.",
        "!type": "fn(array: [?], isSorted?: bool, iterator?: fn(elt: ?, i: number), context?: ?) -> [?]",
        "!url": "http://underscorejs.org/#uniq"
      },
      "unique": "_.uniq",
      "uniqueId": {
        "!doc": "Generate a unique integer id (unique within the entire client session). Useful for temporary DOM ids.",
        "!type": "fn(prefix: string) -> string",
        "!url": "http://underscorejs.org/#uniqueId"
      },
      "values": {
        "!doc": "Retrieve the values of an object's properties.",
        "!type": "fn(obj: ?) -> [!0.<i>]",
        "!url": "http://underscorejs.org/#values"
      },
      "where": {
        "!doc": "Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.",
        "!type": "fn(list: [?], attrs: ?) -> !0",
        "!url": "http://underscorejs.org/#where"
      },
      "without": {
        "!doc": "Return a version of the array that does not contain the specified value(s).",
        "!type": "fn(array: [?], values: [?]) -> !0",
        "!url": "http://underscorejs.org/#without"
      },
      "wrap": {
        "!doc": "Returns the first function passed as an argument to the second, allowing you to adjust arguments, run code before and after, and conditionally execute the original function.",
        "!type": "fn(func: fn(), wrapper: fn(?)) -> !0",
        "!effects": ["call !1 !0"],
        "!url": "http://underscorejs.org/#wrap"
      },
      "zip": {
        "!doc": "Zip together multiple lists into a single array -- elements that share an index go together.",
        "!type": "fn(array1: [?], array2: [?]) -> [?]",
        "!url": "http://underscorejs.org/#zip"
      }
    }
  });
  ternBasicDefs[3] = ({
    "!name": "jQuery",
    "!define": {
      "offset": {
        "top": "number",
        "left": "number"
      },
      "keyvalue": {
        "name": "string",
        "value": "string"
      }
    },
    "jQuery": {
      "!type": "fn(selector: string, context?: frameElement) -> jQuery.fn",
      "!url": "http://api.jquery.com/jquery/",
      "!doc": "Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.",
      "fn": {
        "add": {
          "!type": "fn(selector: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/add/",
          "!doc": "Add elements to the set of matched elements."
        },
        "addBack": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/addBack/",
          "!doc": "Add the previous set of elements on the stack to the current set, optionally filtered by a selector."
        },
        "addClass": {
          "!type": "fn(className: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/addClass/",
          "!doc": "Adds the specified class(es) to each of the set of matched elements."
        },
        "after": {
          "!type": "fn(content: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/after/",
          "!doc": "Insert content, specified by the parameter, after each element in the set of matched elements."
        },
        "ajaxComplete": {
          "!type": "fn(handler: fn(event: +jQuery.Event, req: +XMLHttpRequest)) -> jQuery.fn",
          "!url": "http://api.jquery.com/ajaxComplete/",
          "!doc": "Register a handler to be called when Ajax requests complete. This is an AjaxEvent."
        },
        "ajaxError": {
          "!type": "fn(handler: fn(event: +jQuery.Event, req: +XMLHttpRequest)) -> jQuery.fn",
          "!url": "http://api.jquery.com/ajaxError/",
          "!doc": "Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event."
        },
        "ajaxSend": {
          "!type": "fn(handler: fn(event: +jQuery.Event, req: +XMLHttpRequest)) -> jQuery.fn",
          "!url": "http://api.jquery.com/ajaxSend/",
          "!doc": "Attach a function to be executed before an Ajax request is sent. This is an Ajax Event."
        },
        "ajaxStart": {
          "!type": "fn(handler: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/ajaxStart/",
          "!doc": "Register a handler to be called when the first Ajax request begins. This is an Ajax Event."
        },
        "ajaxStop": {
          "!type": "fn(handler: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/ajaxStop/",
          "!doc": "Register a handler to be called when all Ajax requests have completed. This is an Ajax Event."
        },
        "ajaxSuccess": {
          "!type": "fn(handler: fn(event: +jQuery.Event, req: +XMLHttpRequest)) -> jQuery.fn",
          "!url": "http://api.jquery.com/ajaxSuccess/",
          "!doc": ""
        },
        "andSelf": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/andSelf/",
          "!doc": "Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event."
        },
        "animate": {
          "!type": "fn(properties: ?, duration?: number, easing?: string, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/animate/",
          "!doc": "Perform a custom animation of a set of CSS properties."
        },
        "append": {
          "!type": "fn(content: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/append/",
          "!doc": "Insert content, specified by the parameter, to the end of each element in the set of matched elements."
        },
        "appendTo": {
          "!type": "fn(target: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/appendTo/",
          "!doc": "Insert every element in the set of matched elements to the end of the target."
        },
        "attr": {
          "!type": "fn(name: string, value?: string) -> string",
          "!url": "http://api.jquery.com/attr/",
          "!doc": "Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element."
        },
        "before": {
          "!type": "fn(content: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/before/",
          "!doc": "Insert content, specified by the parameter, before each element in the set of matched elements."
        },
        "bind": {
          "!type": "fn(eventType: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/bind/",
          "!doc": "Attach a handler to an event for the elements."
        },
        "blur": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/blur/",
          "!doc": "Bind an event handler to the 'blur' JavaScript event, or trigger that event on an element."
        },
        "change": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/change/",
          "!doc": "Bind an event handler to the 'change' JavaScript event, or trigger that event on an element."
        },
        "children": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/children/",
          "!doc": "Get the children of each element in the set of matched elements, optionally filtered by a selector."
        },
        "click": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/click/",
          "!doc": "Bind an event handler to the 'click' JavaScript event, or trigger that event on an element."
        },
        "clone": {
          "!type": "fn(dataAndEvents?: bool, deep?: bool) -> jQuery.fn",
          "!url": "http://api.jquery.com/clone/",
          "!doc": "Create a deep copy of the set of matched elements."
        },
        "closest": {
          "!type": "fn(selector: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/closest/",
          "!doc": "For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree."
        },
        "contents": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/contents/",
          "!doc": "Get the children of each element in the set of matched elements, including text and comment nodes."
        },
        "context": {
          "!type": "fn() -> +Element",
          "!url": "http://api.jquery.com/context/",
          "!doc": "The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document."
        },
        "css": {
          "!type": "fn(name: string, value?: string) -> string",
          "!url": "http://api.jquery.com/css/",
          "!doc": "Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element."
        },
        "data": {
          "!type": "fn(key: string, value?: ?) -> !1",
          "!url": "http://api.jquery.com/data/",
          "!doc": "Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements."
        },
        "dblclick": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/dblclick/",
          "!doc": "Bind an event handler to the 'dblclick' JavaScript event, or trigger that event on an element."
        },
        "delay": {
          "!type": "fn(duration: number, queue?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/delay/",
          "!doc": "Set a timer to delay execution of subsequent items in the queue."
        },
        "delegate": {
          "!type": "fn(selector: string, eventType: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/delegate/",
          "!doc": "Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements."
        },
        "dequeue": {
          "!type": "fn(queue?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/dequeue/",
          "!doc": "Execute the next function on the queue for the matched elements."
        },
        "detach": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/detach/",
          "!doc": "Remove the set of matched elements from the DOM."
        },
        "die": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/die/",
          "!doc": "Remove event handlers previously attached using .live() from the elements."
        },
        "each": {
          "!type": "fn(callback: fn(i: number, element: +Element)) -> jQuery.fn",
          "!url": "http://api.jquery.com/each/",
          "!doc": "Iterate over a jQuery object, executing a function for each matched element."
        },
        "empty": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/empty/",
          "!doc": "Remove all child nodes of the set of matched elements from the DOM."
        },
        "end": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/end/",
          "!doc": "End the most recent filtering operation in the current chain and return the set of matched elements to its previous state."
        },
        "eq": {
          "!type": "fn(i: number) -> jQuery.fn",
          "!url": "http://api.jquery.com/eq/",
          "!doc": "Reduce the set of matched elements to the one at the specified index."
        },
        "error": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/error/",
          "!doc": "Bind an event handler to the 'error' JavaScript event."
        },
        "fadeIn": {
          "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/fadeIn/",
          "!doc": "Display the matched elements by fading them to opaque."
        },
        "fadeOut": {
          "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/fadeOut/",
          "!doc": "Hide the matched elements by fading them to transparent."
        },
        "fadeTo": {
          "!type": "fn(duration: number, opacity: number, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/fadeTo/",
          "!doc": "Adjust the opacity of the matched elements."
        },
        "fadeToggle": {
          "!type": "fn(duration?: number, easing?: string, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/fadeToggle/",
          "!doc": "Display or hide the matched elements by animating their opacity."
        },
        "filter": {
          "!type": "fn(selector: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/filter/",
          "!doc": "Reduce the set of matched elements to those that match the selector or pass the function's test."
        },
        "find": {
          "!type": "fn(selector: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/find/",
          "!doc": "Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element."
        },
        "finish": {
          "!type": "fn(queue?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/finish/",
          "!doc": "Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements."
        },
        "first": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/first/",
          "!doc": "Reduce the set of matched elements to the first in the set."
        },
        "focusin": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/focusin/",
          "!doc": "Bind an event handler to the 'focusin' event."
        },
        "focusout": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/focusout/",
          "!doc": "Bind an event handler to the 'focusout' JavaScript event."
        },
        "get": {
          "!type": "fn(i: number) -> +Element",
          "!url": "http://api.jquery.com/get/",
          "!doc": "Retrieve the DOM elements matched by the jQuery object."
        },
        "has": {
          "!type": "fn(selector: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/has/",
          "!doc": "Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element."
        },
        "hasClass": {
          "!type": "fn(className: string) -> bool",
          "!url": "http://api.jquery.com/hasClass/",
          "!doc": "Determine whether any of the matched elements are assigned the given class."
        },
        "height": {
          "!type": "fn() -> number",
          "!url": "http://api.jquery.com/height/",
          "!doc": "Get the current computed height for the first element in the set of matched elements or set the height of every matched element."
        },
        "hide": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/hide/",
          "!doc": "Hide the matched elements."
        },
        "hover": {
          "!type": "fn(fnOver: fn(+jQuery.Event), fnOut?: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/hover/",
          "!doc": "Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements."
        },
        "html": {
          "!type": "fn() -> string",
          "!url": "http://api.jquery.com/html/",
          "!doc": "Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element."
        },
        "index": {
          "!type": "fn(selector?: string) -> number",
          "!url": "http://api.jquery.com/index/",
          "!doc": "Search for a given element from among the matched elements."
        },
        "innerHeight": {
          "!type": "fn() -> number",
          "!url": "http://api.jquery.com/innerHeight/",
          "!doc": "Get the current computed height for the first element in the set of matched elements, including padding but not border."
        },
        "innerWidth": {
          "!type": "fn() -> number",
          "!url": "http://api.jquery.com/innerWidth/",
          "!doc": "Get the current computed width for the first element in the set of matched elements, including padding but not border."
        },
        "insertAfter": {
          "!type": "fn(target: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/insertAfter/",
          "!doc": "Insert every element in the set of matched elements after the target."
        },
        "insertBefore": {
          "!type": "fn(target: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/insertBefore/",
          "!doc": "Insert every element in the set of matched elements before the target."
        },
        "is": {
          "!type": "fn(selector: ?) -> bool",
          "!url": "http://api.jquery.com/is/",
          "!doc": "Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments."
        },
        "jquery": {
          "!type": "string",
          "!url": "http://api.jquery.com/jquery-2/",
          "!doc": "A string containing the jQuery version number."
        },
        "keydown": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/keydown/",
          "!doc": "Bind an event handler to the 'keydown' JavaScript event, or trigger that event on an element."
        },
        "keypress": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/keypress/",
          "!doc": "Bind an event handler to the 'keypress' JavaScript event, or trigger that event on an element."
        },
        "keyup": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/keyup/",
          "!doc": "Bind an event handler to the 'keyup' JavaScript event, or trigger that event on an element."
        },
        "last": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/last/",
          "!doc": "Reduce the set of matched elements to the final one in the set."
        },
        "length": {
          "!type": "number",
          "!url": "http://api.jquery.com/length/",
          "!doc": "The number of elements in the jQuery object."
        },
        "live": {
          "!type": "fn(selector: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/live/",
          "!doc": "Attach an event handler for all elements which match the current selector, now and in the future."
        },
        "load": {
          "!type": "fn(handler: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/load/",
          "!doc": "Load data from the server and place the returned HTML into the matched element."
        },
        "map": {
          "!type": "fn(callback: fn(i: number, element: +Element)) -> jQuery.fn",
          "!url": "http://api.jquery.com/map/",
          "!doc": "Pass each element in the current matched set through a function, producing a new jQuery object containing the return values."
        },
        "mousedown": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/mousedown/",
          "!doc": "Bind an event handler to the 'mousedown' JavaScript event, or trigger that event on an element."
        },
        "mouseenter": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/mouseenter/",
          "!doc": "Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element."
        },
        "mouseleave": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/mouseleave/",
          "!doc": "Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element."
        },
        "mousemove": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/mousemouve/",
          "!doc": "Bind an event handler to the 'mousemove' JavaScript event, or trigger that event on an element."
        },
        "mouseout": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/mouseout/",
          "!doc": "Bind an event handler to the 'mouseout' JavaScript event, or trigger that event on an element."
        },
        "mouseover": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/mouseover/",
          "!doc": "Bind an event handler to the 'mouseover' JavaScript event, or trigger that event on an element."
        },
        "mouseup": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/mouseup/",
          "!doc": "Bind an event handler to the 'mouseup' JavaScript event, or trigger that event on an element."
        },
        "next": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/next/",
          "!doc": "Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector."
        },
        "nextAll": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/nextAll/",
          "!doc": "Get all following siblings of each element in the set of matched elements, optionally filtered by a selector."
        },
        "nextUntil": {
          "!type": "fn(selector?: string, filter?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/nextUntil/",
          "!doc": "Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed."
        },
        "not": {
          "!type": "fn(selector: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/not/",
          "!doc": "Remove elements from the set of matched elements."
        },
        "off": {
          "!type": "fn(events: string, selector?: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/off/",
          "!doc": "Remove an event handler."
        },
        "offset": {
          "!type": "fn() -> offset",
          "!url": "http://api.jquery.com/offset/",
          "!doc": "Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document."
        },
        "offsetParent": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/offsetParent/",
          "!doc": "Get the closest ancestor element that is positioned."
        },
        "on": {
          "!type": "fn(events: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/on/",
          "!doc": "Attach an event handler function for one or more events to the selected elements."
        },
        "one": {
          "!type": "fn(events: string, data?: ?, handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/one/",
          "!doc": "Attach a handler to an event for the elements. The handler is executed at most once per element."
        },
        "outerHeight": {
          "!type": "fn(includeMargin?: bool) -> number",
          "!url": "http://api.jquery.com/outerHeight/",
          "!doc": "Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without 'px') representation of the value or null if called on an empty set of elements."
        },
        "outerWidth": {
          "!type": "fn(includeMargin?: bool) -> number",
          "!url": "http://api.jquery.com/outerWidth/",
          "!doc": "Get the current computed width for the first element in the set of matched elements, including padding and border."
        },
        "parent": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/parent/",
          "!doc": "Get the parent of each element in the current set of matched elements, optionally filtered by a selector."
        },
        "parents": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/parents/",
          "!doc": "Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector."
        },
        "parentsUntil": {
          "!type": "fn(selector?: string, filter?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/parentsUntil/",
          "!doc": "Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object."
        },
        "position": {
          "!type": "fn() -> offset",
          "!url": "http://api.jquery.com/position/",
          "!doc": "Get the current coordinates of the first element in the set of matched elements, relative to the offset parent."
        },
        "prepend": {
          "!type": "fn(content: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/prepend/",
          "!doc": "Insert content, specified by the parameter, to the beginning of each element in the set of matched elements."
        },
        "prependTo": {
          "!type": "fn(target: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/prependTo/",
          "!doc": "Insert every element in the set of matched elements to the beginning of the target."
        },
        "prev": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/prev/",
          "!doc": "Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector."
        },
        "prevAll": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/prevAll/",
          "!doc": "Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector."
        },
        "prevUntil": {
          "!type": "fn(selector?: string, filter?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/prevUntil/",
          "!doc": "Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object."
        },
        "promise": {
          "!type": "fn(type?: string, target: ?) -> +jQuery.Promise",
          "!url": "http://api.jquery.com/promise/",
          "!doc": "Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished."
        },
        "prop": {
          "!type": "fn(name: string, value?: string) -> string",
          "!url": "http://api.jquery.com/prop/",
          "!doc": "Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element."
        },
        "pushStack": {
          "!type": "fn(elements: [+Element]) -> jQuery.fn",
          "!url": "http://api.jquery.com/pushStack/",
          "!doc": "Add a collection of DOM elements onto the jQuery stack."
        },
        "queue": {
          "!type": "fn(queue?: string) -> [?]",
          "!url": "http://api.jquery.com/queue/",
          "!doc": "Show or manipulate the queue of functions to be executed on the matched elements."
        },
        "ready": {
          "!type": "fn(fn: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/ready/",
          "!doc": "Specify a function to execute when the DOM is fully loaded."
        },
        "remove": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/remove/",
          "!doc": "Remove the set of matched elements from the DOM."
        },
        "removeAttr": {
          "!type": "fn(attrName: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/removeAttr/",
          "!doc": "Remove an attribute from each element in the set of matched elements."
        },
        "removeClass": {
          "!type": "fn(className?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/removeClass/",
          "!doc": "Remove a single class, multiple classes, or all classes from each element in the set of matched elements."
        },
        "removeData": {
          "!type": "fn(name?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/removeData/",
          "!doc": "Remove a previously-stored piece of data."
        },
        "removeProp": {
          "!type": "fn(propName: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/removeProp/",
          "!doc": "Remove a property for the set of matched elements."
        },
        "replaceAll": {
          "!type": "fn(target: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/replaceAll/",
          "!doc": "Replace each target element with the set of matched elements."
        },
        "replaceWith": {
          "!type": "fn(newContent: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/replaceWith/",
          "!doc": "Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed."
        },
        "resize": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/resize/",
          "!doc": "Bind an event handler to the 'resize' JavaScript event, or trigger that event on an element."
        },
        "scroll": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/scroll/",
          "!doc": "Bind an event handler to the 'scroll' JavaScript event, or trigger that event on an element."
        },
        "scrollLeft": {
          "!type": "number",
          "!url": "http://api.jquery.com/scrollLeft/",
          "!doc": "Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element."
        },
        "scrollTop": {
          "!type": "number",
          "!url": "http://api.jquery.com/scrollTop/",
          "!doc": "Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element."
        },
        "select": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/select/",
          "!doc": "Bind an event handler to the 'select' JavaScript event, or trigger that event on an element."
        },
        "selector": {
          "!type": "string",
          "!url": "http://api.jquery.com/selector/",
          "!doc": "A selector representing selector passed to jQuery(), if any, when creating the original set."
        },
        "serialize": {
          "!type": "fn() -> string",
          "!url": "http://api.jquery.com/serialize/",
          "!doc": "Encode a set of form elements as a string for submission."
        },
        "serializeArray": {
          "!type": "fn() -> [keyvalue]",
          "!url": "http://api.jquery.com/serializeArray/",
          "!doc": "Encode a set of form elements as an array of names and values."
        },
        "show": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/show/",
          "!doc": "Display the matched elements."
        },
        "siblings": {
          "!type": "fn(selector?: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/siblings/",
          "!doc": "Get the siblings of each element in the set of matched elements, optionally filtered by a selector."
        },
        "size": {
          "!type": "fn() -> number",
          "!url": "http://api.jquery.com/size/",
          "!doc": "Return the number of elements in the jQuery object."
        },
        "slice": {
          "!type": "fn(start: number, end?: number) -> jQuery.fn",
          "!url": "http://api.jquery.com/slice/",
          "!doc": "Reduce the set of matched elements to a subset specified by a range of indices."
        },
        "slideDown": {
          "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/slideDown/",
          "!doc": "Display the matched elements with a sliding motion."
        },
        "slideToggle": {
          "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/slideToggle/",
          "!doc": "Display or hide the matched elements with a sliding motion."
        },
        "slideUp": {
          "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/slideUp/",
          "!doc": "Hide the matched elements with a sliding motion."
        },
        "stop": {
          "!type": "fn(clearQueue?: bool, jumpToEnd?: bool) -> jQuery.fn",
          "!url": "http://api.jquery.com/stop/",
          "!doc": "Stop the currently-running animation on the matched elements."
        },
        "submit": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/submit/",
          "!doc": "Bind an event handler to the 'submit' JavaScript event, or trigger that event on an element."
        },
        "text": {
          "!type": "fn() -> string",
          "!url": "http://api.jquery.com/text/",
          "!doc": "Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements."
        },
        "toArray": {
          "!type": "fn() -> [+Element]",
          "!url": "http://api.jquery.com/toArray/",
          "!doc": "Retrieve all the DOM elements contained in the jQuery set, as an array."
        },
        "toggle": {
          "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/toggle/",
          "!doc": "Display or hide the matched elements."
        },
        "toggleClass": {
          "!type": "fn(className: string) -> jQuery.fn",
          "!url": "http://api.jquery.com/toggleClass/",
          "!doc": "Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument."
        },
        "trigger": {
          "!type": "fn(eventType: string, params: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/trigger/",
          "!doc": "Execute all handlers and behaviors attached to the matched elements for the given event type."
        },
        "triggerHandler": {
          "!type": "fn(eventType: string, params: ?) -> ?",
          "!url": "http://api.jquery.com/triggerHandler/",
          "!doc": "Execute all handlers attached to an element for an event."
        },
        "unbind": {
          "!type": "fn(eventType?: string, handler?: fn()) -> jQuery.fn",
          "!url": "http://api.jquery.com/unbind/",
          "!doc": "Remove a previously-attached event handler from the elements."
        },
        "undelegate": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/undelegate/",
          "!doc": "Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements."
        },
        "unload": {
          "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
          "!url": "http://api.jquery.com/unload/",
          "!doc": "Bind an event handler to the 'unload' JavaScript event."
        },
        "unwrap": {
          "!type": "fn() -> jQuery.fn",
          "!url": "http://api.jquery.com/unwrap/",
          "!doc": "Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place."
        },
        "val": {
          "!type": "fn() -> string",
          "!url": "http://api.jquery.com/val/",
          "!doc": "Get the current value of the first element in the set of matched elements or set the value of every matched element."
        },
        "width": {
          "!type": "fn() -> number",
          "!url": "http://api.jquery.com/width/",
          "!doc": "Get the current computed width for the first element in the set of matched elements or set the width of every matched element."
        },
        "wrap": {
          "!type": "fn(wrappingElement: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/wrap/",
          "!doc": "Wrap an HTML structure around each element in the set of matched elements."
        },
        "wrapAll": {
          "!type": "fn(wrappingElement: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/wrapAll/",
          "!doc": "Wrap an HTML structure around all elements in the set of matched elements."
        },
        "wrapInner": {
          "!type": "fn(wrappingElement: ?) -> jQuery.fn",
          "!url": "http://api.jquery.com/wrapInner/",
          "!doc": "Wrap an HTML structure around the content of each element in the set of matched elements."
        },

        "slice": {
          "!type": "fn(start: number, end: number) -> jQuery.fn",
          "!url": "http://api.jquery.com/slice/",
          "!doc": "Reduce the set of matched elements to a subset specified by a range of indices."
        },
        "push": {
          "!type": "Array.prototype.push",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/push",
          "!doc": "Mutates an array by appending the given elements and returning the new length of the array."
        },
        "sort": {
          "!type": "Array.prototype.sort",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/sort",
          "!doc": "Sorts the elements of an array in place and returns the array."
        },
        "splice": {
          "!type": "Array.prototype.splice",
          "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/splice",
          "!doc": "Changes the content of an array, adding new elements while removing old elements."
        }
      },
      "ajax": {
        "!type": "fn(url: string, settings: ?) -> +jQuery.jqXHR",
        "!url": "http://api.jquery.com/jquery.ajax/",
        "!doc": "Perform an asynchronous HTTP (Ajax) request."
      },
      "ajaxPrefilter": {
        "!type": "fn(dataTypes?: string, handler: fn(options: ?, originalOptions: ?, req: +XMLHttpRequest))",
        "!url": "http://api.jquery.com/jquery.ajaxPrefilter/",
        "!doc": "Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax()."
      },
      "ajaxSetup": {
        "!type": "fn(options: ?)",
        "!url": "http://api.jquery.com/jquery.ajaxSetup/",
        "!doc": "Set default values for future Ajax requests. Its use is not recommended."
      },
      "ajaxTransport": {
        "!type": "fn(dataType: string, handler: fn(options: ?, originalOptions: ?, req: +XMLHttpRequest))",
        "!url": "http://api.jquery.com/jquery.ajaxTransport/",
        "!doc": "Creates an object that handles the actual transmission of Ajax data."
      },
      "Callbacks": {
        "!type": "fn(flags: string) -> +jQuery.Callbacks",
        "!url": "http://api.jquery.com/jquery.Callbacks/",
        "!doc": "A multi-purpose callbacks list object that provides a powerful way to manage callback lists.",
        "prototype": {
          "add":{
            "!type": "fn(callbacks: ?) -> +jQuery.Callbacks",
            "!url": "http://api.jquery.com/callbacks.add/",
            "!doc": "Add a callback or a collection of callbacks to a callback list."
          },
          "disable":{
            "!type": "fn() -> +jQuery.Callbacks",
            "!url": "http://api.jquery.com/callbacks.disable/",
            "!doc": "Disable a callback list from doing anything more."
          },
          "disabled":{
            "!type": "fn() -> bool",
            "!url": "http://api.jquery.com/callbacks.disabled/",
            "!doc": "Determine if the callbacks list has been disabled."
          },
          "empty":{
            "!type": "fn() -> +jQuery.Callbacks",
            "!url": "http://api.jquery.com/callbacks.empty/",
            "!doc": "Remove all of the callbacks from a list."
          },
          "fire":{
            "!type": "fn(arguments: ?) -> +jQuery.Callbacks",
            "!url": "http://api.jquery.com/callbacks.fire/",
            "!doc": "Call all of the callbacks with the given arguments"
          },
          "fired":{
            "!type": "fn() -> bool",
            "!url": "http://api.jquery.com/callbacks.fired/",
            "!doc": "Determine if the callbacks have already been called at least once."
          },
          "fireWith":{
            "!type": "fn(context?: ?, args?: ?) -> +jQuery.Callbacks",
            "!url": "http://api.jquery.com/callbacks.fireWith/",
            "!doc": "Call all callbacks in a list with the given context and arguments."
          },
          "has":{
            "!type": "fn(callback: fn()) -> bool",
            "!url": "http://api.jquery.com/callbacks.has/",
            "!doc": "Determine whether a supplied callback is in a list."
          },
          "lock":{
            "!type": "fn() -> +jQuery.Callbacks",
            "!url": "http://api.jquery.com/callbacks.lock/",
            "!doc": "Lock a callback list in its current state."
          },
          "locked":{
            "!type": "fn() -> bool",
            "!url": "http://api.jquery.com/callbacks.locked/",
            "!doc": "Determine if the callbacks list has been locked."
          },
          "remove":{
            "!type": "fn(callbacks: ?) -> +jQuery.Callbacks",
            "!url": "http://api.jquery.com/callbacks.remove/",
            "!doc": "Remove a callback or a collection of callbacks from a callback list."
          }
        }
      },
      "contains": {
        "!type": "fn(container: +Element, contained: +Element) -> bool",
        "!url": "http://api.jquery.com/jquery.contains/",
        "!doc": "Check to see if a DOM element is a descendant of another DOM element."
      },
      "cssHooks": {
        "!type": "?",
        "!url": "http://api.jquery.com/cssHooks/",
        "!doc": "Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties."
      },
      "data": {
        "!type": "fn(element: +Element, key: string, value: ?) -> !2",
        "!url": "http://api.jquery.com/jquery.data/",
        "!doc": "Store arbitrary data associated with the specified element and/or return the value that was set."
      },
      "Event": {
        "!type": "fn(type: ?, props?: ?) -> +jQuery.Event",
        "!url": "http://api.jquery.com/category/events/event-object/",
        "!doc": "The jQuery.Event constructor is exposed and can be used when calling trigger. The new operator is optional.",
        "prototype": {
          "currentTarget":{
            "!type": "+Element",
            "!url": "http://api.jquery.com/event.currentTarget/",
            "!doc": "The current DOM element within the event bubbling phase."
          },
          "data":{
            "!type": "?",
            "!url": "http://api.jquery.com/event.data/",
            "!doc": "An optional object of data passed to an event method when the current executing handler is bound."
          },
          "delegateTarget":{
            "!type": "+Element",
            "!url": "http://api.jquery.com/event.delegateTarget/",
            "!doc": "The element where the currently-called jQuery event handler was attached."
          },
          "isDefaultPrevented":{
            "!type": "fn() -> bool",
            "!url": "http://api.jquery.com/event.isDefaultPrevented/",
            "!doc": "Returns whether event.preventDefault() was ever called on this event object."
          },
          "isImmediatePropagationStopped":{
            "!type": "fn() -> bool",
            "!url": "http://api.jquery.com/event.isImmediatePropagationStopped/",
            "!doc": "Returns whether event.stopImmediatePropagation() was ever called on this event object."
          },
          "isPropagationStopped":{
            "!type": "fn() -> bool",
            "!url": "http://api.jquery.com/event.isPropagationStopped/",
            "!doc": "Returns whether event.stopPropagation() was ever called on this event object."
          },
          "metaKey":{
            "!type": "bool",
            "!url": "http://api.jquery.com/event.metaKey/",
            "!doc": "Indicates whether the META key was pressed when the event fired."
          },
          "namespace":{
            "!type": "string",
            "!url": "http://api.jquery.com/event.namespace/",
            "!doc": "The namespace specified when the event was triggered."
          },
          "pageX":{
            "!type": "number",
            "!url": "http://api.jquery.com/event.pageX/",
            "!doc": "The mouse position relative to the left edge of the document."
          },
          "pageY":{
            "!type": "number",
            "!url": "http://api.jquery.com/event.pageY/",
            "!doc": "The mouse position relative to the top edge of the document."
          },
          "preventDefault":{
            "!type": "fn()",
            "!url": "http://api.jquery.com/event.preventDefault/",
            "!doc": "If this method is called, the default action of the event will not be triggered."
          },
          "relatedTarget":{
            "!type": "+Element",
            "!url": "http://api.jquery.com/event.relatedTarget/",
            "!doc": "The other DOM element involved in the event, if any."
          },
          "result":{
            "!type": "?",
            "!url": "http://api.jquery.com/event.result/",
            "!doc": "The last value returned by an event handler that was triggered by this event, unless the value was undefined."
          },
          "stopImmediatePropagation":{
            "!type": "fn()",
            "!url": "http://api.jquery.com/event.stopImmediatePropagation/",
            "!doc": "Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree."
          },
          "stopPropagation":{
            "!type": "fn()",
            "!url": "http://api.jquery.com/event.stopPropagation/",
            "!doc": "Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event."
          },
          "target":{
            "!type": "+Element",
            "!url": "http://api.jquery.com/event.target/",
            "!doc": "The DOM element that initiated the event."
          },
          "timeStamp":{
            "!type": "number",
            "!url": "http://api.jquery.com/event.timeStamp/",
            "!doc": "The difference in milliseconds between the time the browser created the event and January 1, 1970."
          },
          "type":{
            "!type": "string",
            "!url": "http://api.jquery.com/event.type/",
            "!doc": "Describes the nature of the event."
          },
          "which":{
            "!type": "number",
            "!url": "http://api.jquery.com/event.which/",
            "!doc": "For key or mouse events, this property indicates the specific key or button that was pressed."
          }
        }
      },
      "Deferred": {
        "!type": "fn(beforeStart?: fn(deferred: +jQuery.Deferred)) -> +jQuery.Deferred",
        "!url": "http://api.jquery.com/jQuery.Deferred/",
        "!doc": "A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.",
        "prototype": {
          "always":{
            "!type": "fn(callback: fn()) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.always/",
            "!doc": "Add handlers to be called when the Deferred object is either resolved or rejected."
          },
          "done":{
            "!type": "fn(callback: fn()) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.done/",
            "!doc": "Add handlers to be called when the Deferred object is resolved."
          },
          "fail":{
            "!type": "fn(callback: fn()) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.fail/",
            "!doc": "Add handlers to be called when the Deferred object is rejected."
          },
          "isRejected":{
            "!type": "fn() -> bool",
            "!url": "http://api.jquery.com/deferred.isRejected/",
            "!doc": "Determine whether a Deferred object has been rejected."
          },
          "isResolved":{
            "!type": "fn() -> bool",
            "!url": "http://api.jquery.com/deferred.isResolved/",
            "!doc": "Determine whether a Deferred object has been resolved."
          },
          "notify":{
            "!type": "fn(args?: ?) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.notify/",
            "!doc": "Call the progressCallbacks on a Deferred object with the given args."
          },
          "notifyWith":{
            "!type": "fn(context?: ?, args?: ?) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.notifyWith/",
            "!doc": "Call the progressCallbacks on a Deferred object with the given context and args."
          },
          "pipe":{
            "!type": "fn(doneFilter?: fn(), failFilter?: fn()) -> +jQuery.Promise",
            "!url": "http://api.jquery.com/deferred.pipe/",
            "!doc": "Utility method to filter and/or chain Deferreds."
          },
          "progress":{
            "!type": "fn(callback: fn()) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.progress/",
            "!doc": "Add handlers to be called when the Deferred object generates progress notifications."
          },
          "promise":{
            "!type": "fn(target: ?) -> +jQuery.Promise",
            "!url": "http://api.jquery.com/deferred.promise/",
            "!doc": "Return a Deferred's Promise object."
          },
          "reject":{
            "!type": "fn(args?: ?) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.reject/",
            "!doc": "Reject a Deferred object and call any failCallbacks with the given args."
          },
          "rejectWith":{
            "!type": "fn(context?: ?, args?: ?) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.rejectWith/",
            "!doc": "Reject a Deferred object and call any failCallbacks with the given context and args."
          },
          "resolve":{
            "!type": "fn(args?: ?) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.resolve/",
            "!doc": "Resolve a Deferred object and call any doneCallbacks with the given args."
          },
          "resolveWith":{
            "!type": "fn(context?: ?, args?: ?) -> +jQuery.Deferred",
            "!url": "http://api.jquery.com/deferred.resolveWith/",
            "!doc": "Resolve a Deferred object and call any doneCallbacks with the given context and args."
          },
          "state":{
            "!type": "fn() -> string",
            "!url": "http://api.jquery.com/deferred.state/",
            "!doc": "Determine the current state of a Deferred object."
          },
          "then":{
            "!type": "fn(doneFilter: fn(), failFilter?: fn(), progressFilter?: fn()) -> +jQuery.Promise",
            "!url": "http://api.jquery.com/deferred.then/",
            "!doc": "Add handlers to be called when the Deferred object is resolved, rejected, or still in progress."
          }
        }
      },
      "Promise": {
        "!url": "http://api.jquery.com/jQuery.Deferred/",
        "!doc": "A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.",
        "prototype": {
          "always": "fn(callback: fn()) -> +jQuery.Promise",
          "done": "fn(callback: fn()) -> +jQuery.Promise",
          "fail": "fn(callback: fn()) -> +jQuery.Promise",
          "isRejected": "fn() -> bool",
          "isResolved": "fn() -> bool",
          "pipe": "fn(doneFilter?: fn(), failFilter?: fn()) -> +jQuery.Promise",
          "promise": "fn(target: ?) -> +jQuery.Deferred",
          "state": "fn() -> string",
          "then": "fn(doneFilter: fn(), failFilter?: fn(), progressFilter?: fn()) -> +jQuery.Promise"
        }
      },
      "jqXHR": {
        "prototype": {
          "always": "fn(callback: fn()) -> +jQuery.jqXHR",
          "done": "fn(callback: fn()) -> +jQuery.jqXHR",
          "fail": "fn(callback: fn()) -> +jQuery.jqXHR",
          "isRejected": "fn() -> bool",
          "isResolved": "fn() -> bool",
          "pipe": "fn(doneFilter?: fn(), failFilter?: fn()) -> +jQuery.Promise",
          "promise": "fn(target: ?) -> +jQuery.Promise",
          "state": "fn() -> string",
          "then": "fn(doneFilter: fn(), failFilter?: fn(), progressFilter?: fn()) -> +jQuery.Promise",
          "readyState": "number",
          "status": "number",
          "statusText": "string",
          "resoponseText": "string",
          "resoponseXML": "string",
          "setRequestHeader": "fn(name: string, val: string)",
          "getAllResponseHeader": "fn() ->",
          "getResponseHeader": "fn() ->",
          "statusCode": "fn() -> number",
          "abort": "fn()"
        }
      },
      "dequeue": {
        "!type": "fn(queue?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/jQuery.dequeue/",
        "!doc": "Execute the next function on the queue for the matched elements."
      },
      "each": {
        "!type": "fn(collection: ?, callback: fn(i: number, elt: ?)) -> !0",
        "!effects": ["call !1 number !0.<i>"],
        "!url": "http://api.jquery.com/jQuery.each/",
        "!doc": "A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties."
      },
      "error": "fn(message: string)",
      "extend": {
        "!type": "fn(target: ?, source: ?) -> !0",
        "!effects": ["copy !1 !0"]
      },
      "fx": {
        "!type": "fn(elem: +Element, options: ?, prop: string, end?: number, easing?: bool)",
        "interval":{
          "!type": "number",
          "!url": "http://api.jquery.com/jquery.fx.interval",
          "!doc": "The rate (in milliseconds) at which animations fire."
        },
        "off":{
          "!type": "bool",
          "!url": "http://api.jquery.com/jquery.fx.off",
          "!doc": "Globally disable all animations."
        },
        "speeds": {
          "slow": "number",
          "fast": "number",
          "_default": "number"
        },
        "stop": "fn()",
        "tick": "fn()",
        "start": "fn()"
      },
      "get":{
        "!type": "fn(url: string, data?: ?, success: fn(data: string, textStatus: string, req: +XMLHttpRequest), dataType?: string) -> +jQuery.jqXHR",
        "!url": "http://api.jquery.com/jquery.get/",
        "!doc": "Load data from the server using a HTTP GET request."
      },
      "getJSON": {
        "!type": "fn(url: string, data?: ?, success: fn(data: ?, textStatus: string, req: +XMLHttpRequest)) -> +jQuery.jqXHR",
        "!url": "http://api.jquery.com/jquery.getJSON/",
        "!doc": "Load JSON-encoded data from the server using a GET HTTP request."
      },
      "getScript": {
        "!type": "fn(url: string, success?: fn(script: string, textStatus: string, req: +XMLHttpRequest)) -> +jQuery.jqXHR",
        "!url": "http://api.jquery.com/jquery.getScript/",
        "!doc": "Load a JavaScript file from the server using a GET HTTP request, then execute it."
      },
      "globalEval": {
        "!type": "fn(code: string)",
        "!url": "http://api.jquery.com/jquery.globalEval/",
        "!doc": "Execute some JavaScript code globally."
      },
      "grep": {
        "!type": "fn(array: [?], filter: fn(elt: ?, i: number), invert?: bool) -> !0",
        "!effects": ["call !1 !0.<i> number"],
        "!url":"http://api.jquery.com/jquery.grep/",
        "!doc":"Finds the elements of an array which satisfy a filter function. The original array is not affected."
      },
      "hasData": {
        "!type": "fn(element: +Element) -> bool",
        "!url": "http://api.jquery.com/jquery.hasData/",
        "!doc": "Determine whether an element has any jQuery data associated with it."
      },
      "holdReady": {
        "!type": "fn(hold: bool)",
        "!url": "http://api.jquery.com/jquery.holdReady/",
        "!doc": "Holds or releases the execution of jQuery's ready event."
      },
      "inArray": {
        "!type": "fn(value: ?, array: [?], from?: number) -> number",
        "!url": "http://api.jquery.com/jquery.inArray/",
        "!doc": "Search for a specified value within an array and return its index (or -1 if not found)."
      },
      "isArray": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://api.jquery.com/jquery.isArray/",
        "!doc": "Determine whether the argument is an array."
      },
      "isEmptyObject": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://api.jquery.com/jquery.isEmptyObject/",
        "!doc": "Check to see if an object is empty (contains no enumerable properties)."
      },
      "isFunction": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://api.jquery.com/jquery.isFunction/",
        "!doc": "Determine if the argument passed is a Javascript function object."
      },
      "isNumeric": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://api.jquery.com/jquery.isNumeric/",
        "!doc": "Determines whether its argument is a number."
      },
      "isPlainObject": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://api.jquery.com/jquery.isPlainObject/",
        "!doc": "Check to see if an object is a plain object (created using '{}' or 'new Object')."
      },
      "isWindow": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://api.jquery.com/jquery.isWindow/",
        "!doc": "Determine whether the argument is a window."
      },
      "isXMLDoc": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://api.jquery.com/jquery.isXMLDoc/",
        "!doc": "Check to see if a DOM node is within an XML document (or is an XML document)."
      },
      "isFunction": {
        "!type": "fn(obj: ?) -> bool",
        "!url": "http://api.jquery.com/jquery.isFunction/",
        "!doc": ""
      },
      "makeArray": {
        "!type": "fn(obj: ?) -> [!0.<i>]",
        "!url": "http://api.jquery.com/jquery.makeArray/",
        "!doc": "Convert an array-like object into a true JavaScript array."
      },
      "map": {
        "!type": "fn(array: [?], callback: fn(element: ?, i: number) -> ?) -> [!1.!ret]",
        "!effects": ["call !1 !0.<i> number"],
        "!url": "http://api.jquery.com/jquery.map/",
        "!doc": "Translate all items in an array or object to new array of items."
      },
      "merge": {
        "!type": "fn(first: [?], second: [?]) -> !0",
        "!url": "http://api.jquery.com/jquery.merge/",
        "!doc": "Merge the contents of two arrays together into the first array."
      },
      "noConflict": {
        "!type": "fn(removeAll?: bool) -> jQuery",
        "!url": "http://api.jquery.com/jquery.noConflict/",
        "!doc": "Relinquish jQuery's control of the $ variable."
      },
      "noop": {
        "!type": "fn()",
        "!url": "http://api.jquery.com/jquery.noop/",
        "!doc": "An empty function."
      },
      "now": {
        "!type": "fn() -> number",
        "!url": "http://api.jquery.com/jquery.now/",
        "!doc": "Return a number representing the current time."
      },
      "param": {
        "!type": "fn(obj: ?) -> string",
        "!url": "http://api.jquery.com/jquery.param/",
        "!doc": "Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request."
      },
      "parseHTML": {
        "!type": "fn(data: string, context?: +Element, keepScripts?: bool) -> [+Element]",
        "!url": "http://api.jquery.com/jquery.parseHTML/",
        "!doc": "Parses a string into an array of DOM nodes."
      },
      "parseJSON": {
        "!type": "fn(json: string) -> ?",
        "!url": "http://api.jquery.com/jquery.parseJSON/",
        "!doc": "Takes a well-formed JSON string and returns the resulting JavaScript object."
      },
      "parseXML": {
        "!type": "fn(xml: string) -> +XMLDocument",
        "!url": "http://api.jquery.com/jquery.parseXML/",
        "!doc": "Parses a string into an XML document."
      },
      "post": {
        "!type": "fn(url: string, data?: ?, success: fn(data: string, textStatus: string, req: +XMLHttpRequest), dataType?: string) -> +jQuery.jqXHR",
        "!url": "http://api.jquery.com/jquery.post/",
        "!doc": "Load data from the server using a HTTP POST request."
      },
      "proxy": {
        "!type": "fn(function: fn(), context: ?) -> fn()",
        "!url": "http://api.jquery.com/jquery.proxy/",
        "!doc": "Takes a function and returns a new one that will always have a particular context."
      },
      "queue": {
        "!type": "fn(element: +Element, queue?: string) -> [?]",
        "!url": "http://api.jquery.com/jquery.queue/",
        "!doc": "Show or manipulate the queue of functions to be executed on the matched element."
      },
      "removeData": {
        "!type": "fn(element: +Element, name?: string)",
        "!url": "http://api.jquery.com/jquery.removeData/",
        "!doc": ""
      },
      "sub": {
        "!type": "fn() -> jQuery",
        "!url": "http://api.jquery.com/jquery.sub/",
        "!doc": "Remove a previously-stored piece of data."
      },
      "support": {
        "!url": "http://api.jquery.com/jquery.support/",
        "!doc": "A collection of properties that represent the presence of different browser features or bugs. Primarily intended for jQuery's internal use; specific properties may be removed when they are no longer needed internally to improve page startup performance.",
        "getSetAttribute": "bool",
        "leadingWhitespace": "bool",
        "tbody": "bool",
        "htmlSerialize": "bool",
        "style": "bool",
        "hrefNormalized": "bool",
        "opacity": "bool",
        "cssFloat": "bool",
        "checkOn": "bool",
        "optSelected": "bool",
        "enctype": "bool",
        "html5Clone": "bool",
        "boxModel": "bool",
        "deleteExpando": "bool",
        "noCloneEvent": "bool",
        "inlineBlockNeedsLayout": "bool",
        "shrinkWrapBlocks": "bool",
        "reliableMarginRight": "bool",
        "boxSizingReliable": "bool",
        "pixelPosition": "bool",
        "noCloneChecked": "bool",
        "optDisabled": "bool",
        "input": "bool",
        "radioValue": "bool",
        "appendChecked": "bool",
        "checkClone": "bool",
        "clearCloneStyle": "bool",
        "reliableHiddenOffsets": "bool",
        "boxSizing": "bool",
        "doesNotIncludeMarginInBodyOffset": "bool",
        "cors": "bool",
        "ajax": "bool"
      },
      "trim": {
        "!type": "fn(str: string) -> string",
        "!url": "http://api.jquery.com/jquery.trim/",
        "!doc": "Remove the whitespace from the beginning and end of a string."
      },
      "type": {
        "!type": "fn(obj: ?) -> string",
        "!url": "http://api.jquery.com/jquery.type/",
        "!doc": "Determine the internal JavaScript [[Class]] of an object."
      },
      "unique": {
        "!type": "fn(array: [?]) -> !0",
        "!url": "http://api.jquery.com/jquery.unique/",
        "!doc": "Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers."
      },
      "when": {
        "!type": "fn(deferred: +jQuery.Deferred) -> +jQuery.Promise",
        "!url": "http://api.jquery.com/jquery.when/",
        "!doc": "Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events."
      }
    },
    "$": "jQuery"
  });

  return {
    ternBasicDefs: ternBasicDefs
  }
}();
