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