//Merge Two Sorted Lists//
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Recursion
// Time: O(n)
// Space: O(n)
// var mergeTwoLists = function(l1, l2) {
//     if (l1 === null) return l2
//     if (l2 === null) return l1
  
//     if (l1.val <= l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2)
//       return l1
//     } else {
//       l2.next = mergeTwoLists(l1, l2.next)
//       return l2
//     }
// };

// Iteration
// Time O(n)
// Space O(1)
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode()
    let p = head
    
    while (l1 && l2) {
      console.log(l1.val, l2.val)
      if (l1.val <= l2.val) {
        p.next = l1
        l1 = l1.next
      } else {
        p.next = l2
        l2 = l2.next
      }
      p = p.next
    }
  
    if (l1) p.next = l1
    if (l2) p.next = l2
    
    return head.next
};

//Generate Parentheses//
/**
 * @param {number} n
 * @return {string[]}
 */

/*

1. ()

2. ()()   (())

3 =  1 + 2
  =  2 + 1
  =  3 + 0
*/

// Recursion
// Time: f(n) = f(n - 1)* f(0) + f(n -2) * f(1) + f(n-3) * f(2) ?
// var generateParenthesis = function(n) {
//     if (n === 0) {
//       return ['']
//     }
  
//     if (n === 1) {
//       return ['()']
//     }
    
//     const result = []
//     for (let i = 1; i <= n; i++) {
//       const leftInner = generateParenthesis(i - 1)
//       const right = generateParenthesis(n - i)
      
//       leftInner.forEach(itemLeft => {
//         right.forEach(itemRight => {
//           result.push(`(${itemLeft})${itemRight}`)
//         })
//       })
//     }
  
//     return result
// };


// Iteration
var generateParenthesis = function(n) {
    const results = [[''], ['()']]
    
    for (let i = 2; i <=n; i++) {
      const result = []
      for (let j = 1; j <= i; j++) {
        const leftInner = results[j - 1]
        const right = results[i - j]
        leftInner.forEach(itemLeft => {
          right.forEach(itemRight => {
            result.push(`(${itemLeft})${itemRight}`)
          })
        })
      }
      results[i] = result
    }
  
    return results[n]
};

//Merge k Sorted Lists//
