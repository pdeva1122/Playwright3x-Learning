// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the name
const name = "Prashanth";
const reversed = reverseString(name);

console.log(`Original: ${name}`);
console.log(`Reversed: ${reversed}`);
