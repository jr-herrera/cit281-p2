/* 
    CIT 281 Project 2
    Name: J.R Herrera Moreno
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 

// Returns single, random, lowercase letter to be used by getRandomInteger()
function getRandomLetter() {
    const alphabet = [97,123];
    return String.fromCharCode(getRandomInteger(alphabet[0],alphabet[1]));
}

// Returns a string of comma separated random lowercase letters, makes calls to functions getRandomInteger() and getRandomLetter()
function getRandomString(minLength, maxLength) {
    let container = [];
    length = getRandomInteger(minLength, maxLength)
    for (let i = 0; i <= length; i++) {
        // generates random number between 97 and 123 and returns corresponding ASCII character (lower case letters) as a string, appends letter to the end of the array
        container.push(getRandomLetter());

    }
    return container.join(", ")
}

// Takes in a string, splits the string into an array, sorts the array, then returns the sorted version of the original string
function getSortedString(string) {
    return string.split(", ").sort().join(", ");
}


// creates a single string from the letters accumulated in the array - specifies ", " as separator for each character
console.log(getSortedString(getRandomString(10, 20)));