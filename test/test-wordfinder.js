const { expect } = require('chai');
const { StringPermuter } = require("../dist/stringcombo");
const { DictionaryWordFinder } = require("../dist/wordfinder");
const { ArrayDictionary } = require('../dist/dictionary');

describe('DictionaryWordFinder', () => {
    describe("find", () => {
        it('finds permutations of doog', () => {
            const dictionary = new ArrayDictionary(["dog"]);
            const permuter = new StringPermuter();
            const finder = new DictionaryWordFinder(dictionary, permuter);

            const input = "doog";
            const result = [];
            for (const word of finder.find(input)) {
                result.push(word);
            }

            expect(result).to.deep.equal(["dog"]);
        });
    });
});
