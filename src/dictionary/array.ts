import { Dictionary } from "./dictionary";

/**
 * ArrayDictionary is constructed with a list of strings, and performs a O(n) lookup.
 */
export class ArrayDictionary implements Dictionary {
    private words: string[];

    constructor(words: string[]) {
        this.words = words
    }

    lookup(word: string): boolean {
        return this.words.includes(word)
    }
}