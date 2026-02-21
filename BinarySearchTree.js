//invert binary search tree
/*
Given the root of a binary tree, invert the tree, 
and return its root.
*/

function inverTree(root){
    if(!root) return null;

    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);

    return root;
}

//Maximum Depth of BST
/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along 
the longest path from the root node down to the farthest leaf node.
*/
function maxDepth(root){
//base case for empty tree
if(!root) return 0; 

//recursively find depth of left and right subtree
const leftDepth = maxDepth(root.left);
const rightDepth = maxDepth(root.right);

//compare depths of left and right and return largest
return 1 + Math.max(leftDepth, rightDepth)
}