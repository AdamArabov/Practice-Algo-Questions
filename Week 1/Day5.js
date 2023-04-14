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
  