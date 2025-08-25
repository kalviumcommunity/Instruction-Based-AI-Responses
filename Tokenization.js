// tokenization.js

// Example: using require (though no external library needed here)
// If you want to read text from a file later, you can use:
// const fs = require('fs');

// Sample text
const text = "Hello, I am learning tokenization with Groq!";

// Function to tokenize text
function tokenizeText(text) {
    // 1. Remove punctuation
    // 2. Split by spaces
    return text
        .replace(/[.,!?]/g, '')   // remove punctuation
        .split(/\s+/);            // split by spaces
}

// Function to count tokens
function countTokens(tokens) {
    return tokens.length;
}

// Run tokenization
const tokens = tokenizeText(text);
const tokenCount = countTokens(tokens);

// Output
console.log("Original Text:", text);
console.log("Tokens:", tokens);
console.log("Number of Tokens:", tokenCount);
