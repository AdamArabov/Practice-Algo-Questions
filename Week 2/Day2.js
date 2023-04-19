//Remove Element//
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let p1 = 0
    let p2 = 0
    
    while (p2 < nums.length) {
      if (nums[p2] !== val) {
        nums[p1] = nums[p2]
        p1 += 1
      }
      
      p2 += 1
    }
  
    return p1
};

//Find the Index of the First Occurrence in a String//
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    
    const jumpStep = [0, 0]
    
    let l = 1
    let k = 0
    // O(m)
    // ababcaabc
    //  ababcaabc
    while (l < needle.length) {
      if (needle[l] === needle[k]) {
        l += 1
        k += 1
        jumpStep[l] = k
      } else if (k === 0) {
        l += 1
        jumpStep[l] = 0
      } else {
        k = jumpStep[k]
      }
    }
    
    let i = 0
    let j = 0
    
    // O(n)
    while (i < haystack.length && j < needle.length) {
      if (haystack[i] === needle[j]) {
        i += 1
        j += 1
        if (j === needle.length) {
          return i - needle.length
        }
      } else if (j > 0) {
        j = jumpStep[j]
      } else {
        i += 1
      }
    }
  
    return -1
};

//Divide Two Integers//

let sign = 1
if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
  sign = -1
}

dividend = Math.abs(dividend)
divisor = Math.abs(divisor)

const baseOn2 = []
const baseOnDivisor = []

let i = 1
let j = divisor
while (j <= dividend) {
  baseOn2.push(i)
  baseOnDivisor.push(j)
  
  i += i
  j += j
}

// collect the result
let result = 0
for (let k = baseOnDivisor.length - 1; k > -1; k--) {
  if (dividend >= baseOnDivisor[k]) {
    result += baseOn2[k]
    dividend -= baseOnDivisor[k]
  }
}

return Math.min(Math.max(result * sign, -(2 ** 31)), 2**31 - 1)

//Substring with Concatenation of All Words//
    // naive solution:
    // 1. loop through s  O(n)
    //    2. loop through m words  O(m)
    //         3. loop rhought word O(k)
    //            n/k 
    // total: n/k * n * m * k => m * n * n
    const result = []
    
    if (s === '' || words.length === 0) return result
  
    const map = new Map()
    
    for (let i = 0; i < words.length; i++) {
      if (map.has(words[i])) {
        map.set(words[i], map.get(words[i]) + 1)
      } else {
        map.set(words[i], 1)
      }
    }
    const k = words[0].length
    for (let i = 0; i < s.length; i++) {
      const wordMap = new Map(map)
      let j = i
      
      while (j + k - 1 < s.length) {
        const sub = s.slice(j, j + k)
        if (wordMap.get(sub) > 0) {
          wordMap.set(sub, wordMap.get(sub) - 1)
        } else {
          break
        }
        
        j += k
      }
      if (j - i === words.length * k) {
        result.push(i)
      }
   }
  
    return result