const { expect } = require('chai');
const { ArrayDictionary, HashDictionary }  = require("../dist/dictionary");

describe('ArrayDictionary', () => {
    it('should return true looking up known words', () => {
        const words = ["foo", "bar"];
        const dict = new ArrayDictionary(words);
        const result = dict.lookup("foo")
        expect(result).to.equal(true);
    });

    it('should return false looking up unknown words', () => {
        const words = ["foo", "bar"];
        const dict = new ArrayDictionary(words);
        const result = dict.lookup("baz")
        expect(result).to.equal(false);
    });
});

describe('HashDictionary', () => {
    it('should return true looking up known words', () => {
        const words = ["foo", "bar"];
        const dict = new HashDictionary(words);
        const result = dict.lookup("foo")
        expect(result).to.equal(true);
    });

    it('should return false looking up unknown words', () => {
        const words = ["foo", "bar"];
        const dict = new HashDictionary(words);
        const result = dict.lookup("baz")
        expect(result).to.equal(false);
    });
});
