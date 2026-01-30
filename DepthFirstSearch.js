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