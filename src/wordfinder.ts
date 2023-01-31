import { Dictionary } from "./dictionary";
import { StringPermuter } from "./stringcombo";


export class DictionaryWordFinder {
    private dictionary: Dictionary;
    private permuter: StringPermuter;

    constructor(dictionary: Dictionary, permuter: StringPermuter) {
        this.dictionary = dictionary
        this.permuter = permuter
    }

    /**
     * Accepts a single string as input, and returns a list of dictionary words
     * that can be created using some combination of the letters in the input
     * string.
     *
     * Uses the given Dictionary to determine which word(s) are valid.
     */
    * find(input: string): Generator<string> {
        // TODO
        // As a potential optimization, we could optimistically prune out
        // substring prefxies of certain combination sets that have no such
        // matching prefixes in the dictionary.
        // This optimization may be overkill because even a long input
        // of 10 characters has ~3 million combinations, which most commodity
        // hardware can than handle... but for the MVP we don't need to worry about
        // performance!
        for (const combination of this.permuter.combinations(input)) {
            if (this.dictionary.lookup(combination)) {
                yield combination;
            }
        }
    }
}