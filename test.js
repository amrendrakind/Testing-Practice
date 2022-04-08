const {stringLength, reverseString, capitalize, Calculator} = require("./index.js");

//Task 1

test('String with valid length', () => {
    expect(stringLength('One string')).toBe(10);
});
test('String empty', () => {
    expect(() => stringLength('')).toThrow(Error);
});
test('String with invalid length', () => {
    expect(() => stringLength('One string to test')).toThrow(Error);
});

//Task 2

test('Second string reversed', () => {
    expect(reverseString('Second string reversed')).toBe('desrever gnirts dnoceS');
});

//Task 3

const calculator=new Calculator();
describe('Calculator', () => {
    describe('Sum', () => {
        test('parameters invalid parameters', () => {
            expect(() => calculator.add('a', 'b')).toThrowError(Error);
        });

        test('parameters valid integers', () => {
            expect(calculator.add(3, 7)).toBe(10);
        });

        test('parameters invalid integers', () => {
            expect(() => calculator.add(102, 7)).toThrowError(Error);
        });
    });
    describe('Difference', () => {
        test('parameters invalid parameters', () => {
            expect(() => calculator.subtract('a', 'b')).toThrowError(Error);
        });

        test('parameters valid integers', () => {
            expect(calculator.subtract(20, 6)).toBe(14);
        });

         test('parameters invalid integers', () => {
            expect(() => calculator.subtract(102, 7)).toThrowError(Error);
        });
    });

    describe('Division', () => {
        test('parameters invalid parameters', () => {
            expect(() => calculator.divide('a', 'b')).toThrowError(Error);
        });

        test('parameters valid integers', () => {
            expect(calculator.divide(9, 3)).toBe(3);
        });

         test('parameters invalid integers', () => {
            expect(() => calculator.divide(102, 0)).toThrowError(Error);
        });
    });
    describe('Product', () => {
        test('parameters invalid parameters', () => {
            expect(() => calculator.multiply('a', 'b')).toThrowError(Error);
        });

        test('parameters valid integers', () => {
            expect( calculator.multiply(8, 9)).toBe(72);
        });

         test('parameters invalid integers', () => {
            expect(() => calculator.multiply(102, 7)).toThrowError(Error);
        });
    });
});

//Task 4

test('Capitalize string', () => {
    let inputValue='my string';
    expect(inputValue).toMatch(/\w+/g);
    expect(capitalize(inputValue)).toBe('My string');
});

test('Capitalize Error ', () => {
    let inputValue='123';
    expect(inputValue).toMatch(/\w+/g);
    expect(capitalize(inputValue)).not.toBe('My string');
});