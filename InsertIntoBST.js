//create nodes here
class Node{
    constructor(val, left =null, right= null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
//inserts into BST using recursion
function insertIntoBST(bst, val){
    //check if bst is null and return node
    if(bst === null) return new Node(val);
    //check bst value and go right with smaaller 
    if(bst.val < val){
        bst.right = insertIntoBST(bst.right,val);
        //if bst value large inser left
    }else if(bst.val > val){
        bst.left = insertIntoBST(bst.left, val)
    }
    return bst;
}
//function builds binary search tree with recursion
function buildTree(nodes, f){
    const val = nodes.next().value;
    const left = buildTree(nodes, f);
    const right = buildTree(nodes, f);
    return new Node(f(val), left, right)
}