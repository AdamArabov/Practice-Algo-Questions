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