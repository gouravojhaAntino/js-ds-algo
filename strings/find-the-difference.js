// LeetCode 389. Find the Difference

// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

// Example 1
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2  
// Input: s = "", t = "y"
// Output: "y"

function findTheDifference(s,t){
    let asciiS = 0;
    let asciiT = 0;
    if (s.length == 0){
        console.log(t)
        return t
    }
    if (t.length == 0){
        console.log(s)
        return s
    }
    for (let i = 0; i < s.length; i++){
        asciiS = asciiS + s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++){
        asciiT = asciiT + t.charCodeAt(i);
    }
    let diffChar = asciiS > asciiT ? String.fromCharCode(asciiS - asciiT) : String.fromCharCode(asciiT - asciiS)
    console.log(diffChar)
    return diffChar
}
findTheDifference('','abcde')