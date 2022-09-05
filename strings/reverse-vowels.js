// LeetCode - 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1  
// Input: s = "hello"
// Output: "holle"

// Example 2
// Input: s = "leetcode"
// Output: "leotcede"


function reverseVowels(s){
    let vowelArr = []; let pointer = -1; let newStr = ""
    for (let i of s){
        if (['a','e','i','o','u','A','E','I','O','U'].includes(i)){
            vowelArr.unshift(i)
        }
    }
    for (let i = 0 ; i < s.length ; i++){
        if (['a','e','i','o','u','A','E','I','O','U'].includes(s[i])){
            newStr = newStr + vowelArr[pointer + 1]
            pointer = pointer + 1
        }else{
            newStr = newStr + s[i]
        }
    }
    console.log(newStr)
    return newStr
}

// Test Case
reverseVowels("leetcode")