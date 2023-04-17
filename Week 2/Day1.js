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
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    const merge2 = (list1, list2) => {
      const falseStart = new ListNode(0)
      
      let p = falseStart
      let p1 = list1
      let p2 = list2
      
      while (p1 && p2) {
        if (p1.val < p2.val) {
          p.next = p1
          p = p1
          p1 = p1.next
        } else {
          p.next = p2
          p = p2
          p2 = p2.next
        }
      }
      
      if (p1) {
        p.next = p1
      }
      
      if (p2) {
        p.next = p2
      }
      
      const result = falseStart.next
      falseStart.next = null
      return result
    }
    
    
    while (lists.length > 1) {
      let start = 0
      let end = lists.length - 1
      while (start < end) {
        lists[start] = merge2(lists[start], lists[end])
        start += 1
        end -= 1
      }
      
      lists.length = end + 1
    }
    
    return lists[0]
};

//Swap Nodes in Pairs//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // reverse the nodes after head
    const swap = (node) => {
      if (node && node.next && node.next.next) {
          const first = node.next
          const second = node.next.next
          first.next = second.next
          second.next = first
          node.next = second
        
          swap(first)
      }
    }
    
    const start = new ListNode(null)
    start.next = head
    swap(start)
  
    return start.next
};

//Reverse Nodes in k-Group//
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
      if (head == null || k == 1)
        return head;
  
      final int length = getLength(head);
      ListNode dummy = new ListNode(0, head);
      ListNode prev = dummy;
      ListNode curr = head;
  
      for (int i = 0; i < length / k; ++i) {
        for (int j = 0; j < k - 1; ++j) {
          ListNode next = curr.next;
          curr.next = next.next;
          next.next = prev.next;
          prev.next = next;
        }
        prev = curr;
        curr = curr.next;
      }
  
      return dummy.next;
    }
  
    private int getLength(ListNode head) {
      int length = 0;
      for (ListNode curr = head; curr != null; curr = curr.next)
        ++length;
      return length;
    }
  }