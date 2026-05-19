import {
     capitalize,
     reverseString,
     calculator,
     caesarCipher,
     analyzeArray,
} from './utils';
/*We are importing functions from utils.js*/


// This test is looking to reverse the string "bruno" rather than capitalize it, with toBe.
test("capitalize a string", () => {
        expect(reverseString("bruno")).toBe("onurb");
});

//This test is looking to calculate numbers with expect-we are expecting the value
//With multiply for an example we are giving test an operation and with toBe we are giving it value it needs to load
test("calculate a number", () => {
    expect(calculator.add(20, 10)).toBe(30);
    expect(calculator.multiply(10, 10)).toBe(100);
    expect(calculator.subtract(30, 10)).toBe(20);
    expect(calculator.divide(100, 10)).toBe(10);
});

//This test is looking to export letters how they need to be a needs to become d, and so on
//And then it load message in string-'Hello World' and number 3 will ensure it loads those three letters
//from combination
test("Caesar Cipher", () => {
      expect(caesarCipher("abc", 3)).toBe("def");
      expect(caesarCipher("xyz", 3)).toBe("abc");
      expect(caesarCipher("Hello World!", 3)).toBe("Khoor Zruog!");
});

// evaluates the array and assigns the resulting object to object.
const object = analyzeArray([1, 8, 3, 4, 2, 6]);

//Then loads this

test("Analyze Array", () => {
        expect(object).toEqual({
           average: 4,
           min: 1, 
           max: 8,
           length: 6
        });
});
