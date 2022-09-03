// LeetCode  -  2325. Decode the Message

// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:
// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

// Example
// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog"

function decodeMessage(key,message = null){
    const comparator = "abcdefghijklmnopqrstuvwxyz"
    let decodedMessage = ""
    const uniqueKey = [...new Set(key.split(" ").join(""))]
    const comparatorArr = comparator.split('')
    const hashMap = new Map()
    for (let i = 0 ; i < uniqueKey.length ; i++){
        hashMap.set(uniqueKey[i],comparatorArr[i])
    }
    for (let i = 0 ; i < message.length ; i++){
        if (message.charCodeAt(i) !== 32){
            decodedMessage = decodedMessage + hashMap.get(message[i])
        }else{
            decodedMessage = decodedMessage + ' '
        }
    }
    console.log(hashMap)
    console.log(decodedMessage)
}
decodeMessage('eljuxhpwnyrdgtqkviszcfmabo','zwx hnfx lqantp mnoeius ycgk vcnjrdb')

// Test Cases   
decodeMessage('the quick brown fox jumps over the lazy dog','vkbs bs t suepuv')