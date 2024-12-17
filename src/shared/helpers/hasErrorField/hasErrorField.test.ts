import { describe, it, expect } from 'vitest';
import { hasErrorField } from './hasErrorField';

describe('hasErrorField', () => {
    it('valid case', () => {
        const validError: unknown = {
            data: { error: 'Some error occurred' },
        };
        expect(hasErrorField(validError)).toBe(true);
    });

    it('return false for an object without data field', () => {
        const invalidError: unknown = {
            message: 'An error occurred',
        };
        expect(hasErrorField(invalidError)).toBe(false);
    });

    it('return false for an object with empty data field', () => {
        const emptyDataError: unknown = {
            data: {},
        };
        expect(hasErrorField(emptyDataError)).toBe(false);
    });

    it('return false for non-object types', () => {
        expect(hasErrorField(null)).toBe(false);
        expect(hasErrorField(undefined)).toBe(false);
        expect(hasErrorField(123)).toBe(false);
        expect(hasErrorField('string')).toBe(false);
    });

    it('return false for an object with non-object data field', () => {
        const nonObjectDataError: unknown = {
            data: 'not an object',
        };
        expect(hasErrorField(nonObjectDataError)).toBe(false);
    });
});
