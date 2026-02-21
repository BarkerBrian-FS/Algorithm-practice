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