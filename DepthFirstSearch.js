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

// Balance Binary Tree

function check(node){
    // empty trees are balanced height is -1 so leaf node has height 0
    if(node === null) return[true, -1];
    //checks left subtree balance and gets height
    const [leftOk, leftH] = check(node.left);
    //check right subtree is balance and gets height
    const [rightOk, rightH] = check(node.right);
    // left and right balanced height difference at most 1
    const balanced = leftOk && rightOk && Math.abs(leftH-rightH) <= 1;
    //height of current node is tallest child +1
    return [balanced, Math.max(leftH, rightH)+ 1]
}

function isBalance(tree){
    return check(tree)[0];
}

//Subtree of another tree

function isSameTree(tree1, tree2){
    if(!tree1 && !tree2) return true;
    if(!tree1 || !tree2) return false;
    return tree1.val === tree2.val && isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}

function subtreeOfAnotherTree(root, subRoot){
    if(!root) return false;
    isSameTree(root, subRoot) || subtreeOfAnotherTree(root.left, subRoot) || subtreeOfAnotherTree(root.right, subRoot)
}

//invert binary tree

function invertBinaryTree(tree){
    if(tree === null) return null;
    return new Node(tree.val, invertBinaryTree(tree.right), invertBinaryTree(tree.left))
}

//reconstruct binary tree from preorder and inorder traversal

