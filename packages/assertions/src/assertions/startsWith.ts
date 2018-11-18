import { KnowableUnknown } from '@serenity-js/core';
import { Assertion } from '../Assertion';

export function startsWith(expected: KnowableUnknown<string>): Assertion<string> {
    return new StartWith(expected);
}

class StartWith extends Assertion<string> {
    test(expected: string, actual: string): boolean {
        return !! expected
            && !! actual
            && actual.startsWith(expected);
    }
}
