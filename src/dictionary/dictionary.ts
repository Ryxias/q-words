/**
 * Interface for the concept of a "Dictionary", a service that
 * provides the functionality to look up english words in string form.
 */
export interface Dictionary {
    /**
     * Given a string that is potentially a word, looks up the string to check if said word is recognized
     * in this dictionary; returns true if so, and false otherwise.
     */
    lookup(word: string): boolean;
}
