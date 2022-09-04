// LeetCode 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1  
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2  
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

function canConstruct(ransomNote, magazine){
    let magazineArr = magazine.split('')
    for (let char of magazineArr){
        if (ransomNote.includes(char)){
            ransomNote = ransomNote.replace(char, '')
        }
    }
    console.log(!ransomNote)
    return !(ransomNote)
}
canConstruct('a','b')
