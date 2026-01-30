function dfs(root, target){
    if(!root) return null;
    if(root.val === target) return root;
    const left = dfs(root.left, target);
    if(left !== null) return left;
    const right = dfs(root.right, target);
    return right
}

//find max value in tree
function dfs (node){
    if (node == null){
        return minValue
    }
    leftMaxVal = dfs(node.left);
    rightMaxVal = dfs(node.right);
    return Math.max(node.val, leftMaxVal, rightMaxVal)
}

// find max val with global variable
//init variable at minimum value possible so any node larger
let maxVal = minVal
function dfs(node){
    if(node == null){
        return 
    }
    if(node.val > maxVal){
        //update variable if node is larger
        maxVal = node.val
    }
    dfs(node.left)
    dfs(node.right)
}

function getMaxVal(root){
    //start dfs at the root
    dfs(root)
    return maxVal
}

//max depth of binary tree
function dfs(root){
    if(root === null) return 0;
    return Math.max(dfs(root.left, dfs(root.right))+1)
}

function treeMaxDepth(root){
    return root !== null ? dfs(root) -1 : 0;
}

//find number of visible nodes in binary tree

function dfs(root, maxSoFar){
    //base case to break recusion
    if (!root) return 0;
    let total = 0;
    //check if root val is greater than max if so add to total
    if(root.val >= maxSoFar) total++
    //recurse through left and right doing above stuff 
    total += dfs(root.left, Math.max(maxSoFar, root.val));
    total += dfs(root.right, Math.max(maxSoFar, root.val));

    return total
}
//entry function provides start and ensures every num larget than neg inf
function visibleTreeNode(root){
    return dfs(root, Number.NEGATIVE_INFINITY)
}