// LeetCode - 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1
// Input: s = "leetcode"
// Output: 0

// Example 2
// Input: s = "loveleetcode"
// Output: 2

function firstUniqChar(s){
    let hashMap = {}
    for (let i = 0 ; i < s.length ; i++){
        if (hashMap[s[i]] !== undefined){
            hashMap[s[i]] = hashMap[s[i]] + 1
        }else{
            hashMap[s[i]] = 1
        }
    }
    for (let key in hashMap){
        if(hashMap[key] == 1){
            return s.indexOf(key)
        }
    }
    return -1
}

// Test Cases 
firstUniqChar("leetcode")
firstUniqChar("loveleetcode")
