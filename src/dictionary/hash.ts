import { Dictionary } from "./dictionary";

/**
 * HashDictionary is constructed with a list of strings, but goes through an initial
 * step to hash all of the strings in the input list so lookups run in O(1).
 */
export class HashDictionary implements Dictionary {
    private words: {[key: string]: boolean};

    constructor(wordsList: string[]) {
        this.words = {};
        wordsList.forEach(word => {
            this.words[word] = true;
        });
    }

    lookup(word: string): boolean {
        return this.words[word] || false;
    }
}
