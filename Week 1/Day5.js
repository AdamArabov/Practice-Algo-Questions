//Roman to Integer//

const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  
  
  /**
   * @param {string} s
   * @return {number}
   */
  var romanToInt = function(s) {
      let sum = 0
      
      for (let i = 0; i < s.length; i++) {
        let sign = 1
        if (i < s.length - 1 && (map[s[i + 1]] === map[s[i]] * 5 || map[s[i + 1]] === map[s[i]] * 10)) {
          sign *= -1
        }
        
        sum += sign *  map[s[i]]
      }
    
      return sum
  };

  //Longest Common Prefix//

  /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
    if (strs.length === 0) {
      return ''
    }
  
    let isShortestStrMet = false
    let i = 0
    for (; i < strs[0].length; i++) {
      if (isShortestStrMet) {
        break
      }
      
      const char = strs[0][i]
      let isSame = true
      for (let j = 0; j < strs.length; j++) {
        
        isShortestStrMet = strs[j][i] === undefined
        
        if (strs[j][i] !== char) {
          isSame = false
          break
        }
      }
      
      if (!isSame) {
        break
      }
    }
  
    return strs[0].slice(0, i)
};

//3Sum//
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    
    const result = []
    const hashes = new Set()
    
    // fix the left, the rest is the 2 sum problem
    for (let i = 0; i + 2 < nums.length; i++) {
      if (nums[i] === nums[i - 1]) continue
      const set = new Set()
      for (let j = i + 1; j < nums.length; j++) {
        const counterpart = -nums[i] - nums[j]
        if (set.has(counterpart)) {
          const min = Math.min(nums[i], nums[j], counterpart)
          const max = Math.max(nums[i], nums[j], counterpart)
          const hash = `${min}_${max}`
          if (!hashes.has(hash)) {
            result.push([min, -min-max,max])
            hashes.add(hash)
          }
        }
        set.add(nums[j])
      }
    }
    
    return result
  };

  //3Sum Closest//

  var threeSumClosest = function(nums, target) {
    let result = Number.POSITIVE_INFINITY
  
  
    // sort the nums O(lgN)
    nums.sort((a, b) => a - b)
  
  
    // [-4, -1, -1, 0, 1, 2]
  
    // n * n , total + O(n^2) => O(n^2)
    // Space: 3Cn
  
    for (let i = 0; i < nums.length - 2; i++) {
      // fix ith number as left one
      let j = i + 1
      let k = nums.length - 1
  
      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k]
        
        const currentDelta = sum - target
        
        if (currentDelta === 0) return target
        
        if (currentDelta < 0) {
            // move to the next different number
            j += 1
            while (nums[j] === nums[j - 1]) {
              j += 1
            }
        }
  
        if (currentDelta > 0) {
            // move to the next different number
            k -= 1
            while (nums[k] === nums[k + 1]) {
              k -= 1
            }
        }
        if (Math.abs(currentDelta) < Math.abs(result - target)) {
          result = sum
        }
      }
  
      // move to the next different number
      while (nums[i + 1] === nums[i]) {
        i += 1
      }
    }
  
    return result
  };

  //Letter Combinations of a Phone Number//
  