/**
 * A service class that generates permuations and combinations
 */
export class StringPermuter {
    /**
     * Given an input string, yields all possible combinations for the string
     * and substrings.
     */
    * combinations(input: string): Generator<string> {
        const visited: {[key: string]: boolean} = {};
        for (const candidate of this._combinationsInner(input)) {
            if (!visited[candidate]) {
                yield candidate;
                visited[candidate] = true;
            }
        }
    }

    private * _combinationsInner(input: string): Generator<string> {
        if (input.length <= 0) {
            throw new RangeError("Invalid input: " + input);
        }
        if (input.length === 1) {
            yield input;
            return;
        }

        // For each character...
        for (let i = 0; i < input.length; i++) {
            // Rip out the 1 character
            const currentChar = input[i];

            // Generate all permutations of the remaining characters
            const remainingChars = input.substring(0, i) + input.substring(i + 1)
            for (const subCombo of this._combinationsInner(remainingChars)) {
                // And for each of these sub-permutations, yield
                // both the sub-permutation omitting the character
                yield subCombo;

                // as well as including the ripped-out character
                yield currentChar + subCombo;
            }
        }
    }

    /**
     * Given an input string, returns all possible permutations for the string.
     */
    * permutations(input: string): Generator<string> {
        const visited: {[key: string]: boolean} = {};
        for (const candidate of this._permutationsInner(input)) {
            if (!visited[candidate]) {
                yield candidate;
                visited[candidate] = true;
            }
        }
    }

    private * _permutationsInner(input: string): Generator<string> {
        if (input.length <= 0) {
            throw new RangeError("Invalid input: " + input);
        }
        if (input.length === 1) {
            yield input;
            return;
        }

        // The algorithm for permuations is only slightly different;
        // do not yield any of the sub-permutations
        for (let i = 0; i < input.length; i++) {
            const currentChar = input[i];
            const remainingChars = input.substring(0, i) + input.substring(i + 1);
            for (const subCombo of this._permutationsInner(remainingChars)) {
                yield currentChar + subCombo;
            }
        }
    }
}