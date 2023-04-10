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