//Binary tree paths//

let binarysearchtree = function(root){
    if(!root){
        return [];
    }

    const result = [];

    function findPath(node,currentPath){
        currentPath += node.val;
        if(!node.left && !node.right){
            result.push(currentPath)
        }

        if(node.left){
            findPath(node.left, currentPath + '->')
        }

        if(node.right){
            findPath(node.right, currentPath + '->')
        }
    }

    findPath(root, '');
    return result 
};

//Two Sum// 

let twosum = function (nums,target){
    const previousValues = {}
    for  (let i = 0; i< nums.length; i++ ){
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2= previousValues[neededValue]
        if(index2 != null){
            return [index2, i]
        } else {
            previousValues[currentNumber] = i 
        }
    }
};

//Add Two Numbers//

let addTwoNumbers = function(l1,l2){
    let carry = 0;
    let previousNode = new ListNode();
    const headNode = previousNode;
    while (l1 || l2 || carry) {
      let val1 = 0;
      let val2 = 0;
      if (l1) {
        val1 = l1.val;
        l1 = l1.next;
      }
      if (l2) {
        val2 = l2.val;
        l2 = l2.next;
      }
      const sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10); // sum > 9 ? 1 : 0
      const digit = sum % 10;
      const currentNode = new ListNode(digit);
      previousNode.next = currentNode;
      previousNode = currentNode;
    }
    return headNode.next;
}