import { describe, it, expect } from 'vitest';
import { formatDateToString } from './formatDateToString';

describe('formatDateToString', () => {
    it('non empy date', () => {
        expect(formatDateToString()).toBe('');
        expect(formatDateToString(undefined)).toBe('');
    });

    it('return a formatted date string for a valid Date object', () => {
        const date: Date = new Date('10.10.2023');
        expect(formatDateToString(date)).toBe('10.10.2023');
    });

    it('should handle invalid Date objects gracefully', () => {
        const invalidDate = new Date('invalid-date');
        expect(formatDateToString(invalidDate)).toBe('Invalid Date');
    });
});
