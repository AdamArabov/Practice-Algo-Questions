// Palindrome Number//

var isPalindrome = function(x) {
    let reverseString= ''
    let xString = x.toString()

    for(let i of xString){
        reverseString = i + reverseString
    }

    return(reverseString === xString)
};

// Regular Expression Matching//
var isMatch = function(s, p) {
    const check = (s, p, i, j) => {
      // aaa vs a*a*a*a*
      if (j > p.length - 1) {
        return i > s.length - 1
      }
      
      const isNextQuantiyModifier = p[j + 1] === '*'
      
      if (!isNextQuantiyModifier) {
        if ([s[i], '.'].includes(p[j])) {
          return i < s.length && check(s, p, i + 1, j + 1)
        } else {
          return false
        }
      } else {
        // aa vs a*, finally 2 vs 0
        if ([s[i], '.'].includes(p[j])) {
          return check(s, p, i, j + 2) || (i < s.length && check(s, p, i + 1, j))
        } else {
          return check(s, p, i, j + 2)
        }
      }
      
    }
    
    return check(s, p, 0, 0)
};

//Container With Most Water//
var maxArea = function(height) {
    let max = 0
    
    let i = 0
    let j = height.length - 1
    
    while (i < j) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
      
      // try to move the cursors
      if (height[i] < height[j]) {
        // move i to the next bigger border
        let k = i + 1
        while (height[k] <= height[i]) {
          k += 1
        }
        
        i = k
      } else {
        let k = j -  1
        while (height[k] <= height[j]) {
          k -= 1
        }
        
        j = k
      }
    }
  
    return max
};

//Integer to Roman//
