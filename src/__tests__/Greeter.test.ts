import { Greeter } from '../index';test('My Greeter', () => {
    expect(Greeter('Bob')).toBe('Hello Bob');
});