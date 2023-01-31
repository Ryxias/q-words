const { expect } = require('chai');
const { StringPermuter } = require("../dist/stringcombo");

describe('StringPermuter', () => {
    describe("permutations", () => {
        it('in normal circumstances should yield permutations', () => {
            const permuter = new StringPermuter();
            const input = "abc";
            const result = [];

            for (const permutation of permuter.permutations(input)) {
                result.push(permutation);
            }

            expect(result).to.deep.equal(["abc", "acb", "bac", "bca", "cab", "cba"]);
        });

        it('should not yield redundant permutations', () => {
            const permuter = new StringPermuter();
            const input = "aaa";
            const result = [];

            for (const permutation of permuter.permutations(input)) {
                result.push(permutation);
            }

            expect(result).to.deep.equal(["aaa"]);
        });
    });

    describe("combinations", () => {
        it('in normal circumstances should yield combinations', () => {
            const permuter = new StringPermuter();
            const input = "abc";
            const result = [];

            for (const permutation of permuter.combinations(input)) {
                result.push(permutation);
            }

            expect(result).to.deep.equal(["c", "ac", "bc", "abc", "b", "ab", "cb", "acb", "bac", "a", "ba", "ca", "bca", "cab", "cba"])
        });

        it('should not yield redundant combinations', () => {
            const permuter = new StringPermuter();
            const input = "aaa";
            const result = [];

            for (const permutation of permuter.combinations(input)) {
                result.push(permutation);
            }

            expect(result).to.deep.equal(["a", "aa", "aaa"]);
        });
    });
});
