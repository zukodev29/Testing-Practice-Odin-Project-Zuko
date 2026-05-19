export const capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1);
}

/*The .slice() method in JavaScript is a 
versatile tool used to extract a portion of an array or a string without modifying the original data */
/*This is way to write capitalization function */

export const reverseString = function(str) {
    return str.split('').reverse().join('');
}
/*a classic, concise way to reverse a string in JavaScript*/
/*.split(''): This splits the string into an array of individual characters..
reverse(): This reverses the order of the elements within that array..
join(''): This joins the reversed elements back together into a single string */

export const calculator = {
    add: (a, b) => a+b,
    subtract: (a, b) => a-b,
    divide: (a, b) => a/b,
    multiply: (a, b) => a*b
}
/*This is function for calculator*/

/*This is function for caesar cipher */
/*We have str function and shiftfactor as conditions */

export const caesarCipher = function (str, shiftFactor) {

    /*This let ensures that encrypted is empty */

        let encrypted = "";

           // Ignore non-alphabetical characters

        encrypted = Array.prototype.map.call(str, (letter) => {
            const charCode = letter.charCodeAt();
            if(charCode < 65  || (charCode > 90 &&  charCode < 97) || charCode > 122)
                return letter;

             // Shift uppercase letters (A-Z)
        
            if(charCode <= 90) {
                const sum = charCode + shiftFactor;
                if (sum > 90) {
                    const remainder = (sum - 65) % 26;
                    return String.fromCharCode(remainder + 65);
                }
                return String.fromCharCode(sum);
            }

              // Shift lowercase letters (a-z)

            const sum = charCode + shiftFactor;
            if(sum > 122) {
                const remainder = (sum - 97) % 26;
                return String.fromCharCode(remainder + 97);
            }
              return String.fromCharCode(sum);
        });
    return encrypted.join('');
}

export const analyzeArray = function(arr) {

    const length = arr.length;
      // Handle empty arrays to avoid NaN/Errors
    const average = arr.reduce((sum, val) => sum + val, 0) /length;
     // Use the spread operator [...] to create a shallow copy before sorting
    const sorted = arr.sort ((a, b) => a - b);

    const min = sorted[0];

    const max = sorted[length - 1];

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
    /*Returns values */
}