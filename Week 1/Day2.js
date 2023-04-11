//  Longest Substring Without Repeating Characters //


var lengthOfLongestSubstring = function(s) {
    let max = 0
    let begin = 0 
    let set = new Set()

    for(let end= 0; end < s.length; end++) {
        while(set.has(s[end])) {
            set.delete(s[begin])
            begin = begin + 1
        }

        set.add(s[end])
        max=Math.max(max,end - begin + 1)
    }
    return max 
};

// Median of Two Sorted Arrays // 


var findMedianSortedArrays = function(nums1, nums2) {
    let num=[...nums1,...nums2]
  num.sort(function(a, b){return a-b});
  
  let median;
  
 


  
  let length=num.length;
 
  
      let mid = Math.floor(length/2);
      if(length%2==1){
          median=num[mid];
          }
  else{
          median= (num[mid]+num[mid-1])/2.0;
      }
     
          
      

  
  return median;
};

// Longest Palindromic Substring //

var longestPalindrome = function(s) {
    if(s.length<2) return s;
    let start=0, maxLength=1;
    function expandAroundCenter(left,right){
        while (s[left] === s[right] && left >=0 && right < s.length)
        {
            if(right-left +1 > maxLength){
                start =left;
                maxLength = right - left +1;
            }
            left -=1;
            right +=1;
            
        }
    }
    for (let i=0;i<s.length; i+=1){
        expandAroundCenter(i-1,i+1);
        expandAroundCenter(i, i+1)
    }
    return s.substring(start, start+maxLength)
};