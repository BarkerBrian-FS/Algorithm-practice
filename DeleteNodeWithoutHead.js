/*
Given the head of a linked list and a position, delete the node at that position without having direct access to the previous node. You must delete the node by only accessing the node itself.

This problem simulates a scenario where you're given a pointer to a node in the middle of a linked list and asked to delete it without access to the head or previous nodes.

Input:

head: the head node of a singly linked list
position: an integer representing the position of the node to delete (1-indexed)
Output:

Return the head of the modified linked list
Constraints:

The list has at least 2 nodes
The node to delete is not the last node
Position is valid (1 <= position < length of list)
*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteNodeWithoutHead(head, position) {
    // Navigate to the node at position
    let current = head;
    for (let i = 0; i < position - 1; i++) {
        if (current === null) {
            return head;
        }
        current = current.next;
    }

    // Now current is the node to delete
    if (current === null || current.next === null) {
        return head;  // Can't delete if node is null or last node
    }

    // Copy next node's value to current
    current.val = current.next.val;
    // Skip the next node
    current.next = current.next.next;

    return head;
}