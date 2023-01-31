
import { HashDictionary, Dictionary } from "./dictionary"
import { StringPermuter } from "./stringcombo";
import { DictionaryWordFinder } from "./wordfinder";

/**
 * Builds the service stack through inversion of control.
 */
function buildFinder(wordsList: string[]): DictionaryWordFinder {
    const dictionary: Dictionary = new HashDictionary(wordsList);
    const permuter: StringPermuter = new StringPermuter();

    return new DictionaryWordFinder(dictionary, permuter)
}

/**
 * The main routine and "entry point" to the application.
 */
function main() {
    const INPUT = "oogd";
    const WORDS = [
      // These are the given words
      "good", "god", "dog", "goo", "do", "go",
      // Adding in a bunch of other words as an example
      "foo", "bar", "baz",
    ];

    const finderService = buildFinder(WORDS);
    
    console.log("===============");
    console.log("For the input: ", INPUT);
    console.log("The dictionary word combinations: ");
    console.log();
    for (const word of finderService.find(INPUT)) {
        console.log(" - ", word);
    }
    console.log();
    console.log('Finished.')
}

main();
