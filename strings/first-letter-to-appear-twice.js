// LeetCode - 2351. First Letter to Appear Twice - GO

// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

// Example
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

function repeatedCharacter(s){
    let charCount = {};
    for(let i=0;i<s.length;i++){
        if(s[i] in charCount){
            return s[i]   
        }
        charCount[s[i]] = charCount[s[i]] ?  charCount[s[i]] + 1 : 1 
    }
}

repeatedCharacter('abcbwc')

// Visualize inside HashMap
function repeatedCharacterVisualize(s){
    const hashMap = new Map();
    const unqInput = [...new Set(s)]
    for (let i = 0; i < unqInput.length; i++){
        hashMap.set(unqInput[i], [])
    }
    for (let i = 0; i < s.length; i++){
        let indexArr = hashMap.get(s[i])
        indexArr.push(i)
        hashMap.set(s[i], indexArr)
    }
    for (let i of unqInput){
        let arr = hashMap.get(i)
        if (arr.length >= 2){
            let diff = arr[1] - arr[0]
            arr.push({diff : diff})
        }
    }
    console.log(hashMap)
}
repeatedCharacterVisualize('abcbwc')