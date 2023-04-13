// Palindrome Number//

var isPalindrome = function(x) {
    let reverseString= ''
    let xString = x.toString()

    for(let i of xString){
        reverseString = i + reverseString
    }

    return(reverseString === xString)
};