/*
Given the head of a linked list and a value, delete all nodes that have the given value and return the head of the modified list.

Input:

head: the head node of a singly linked list
value: an integer value to search for and delete
Output:

Return the head of the modified linked list with all occurrences of the value removed
Constraints:

The list may be empty
The value may or may not exist in the list
Multiple nodes may have the same value
*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteAllOccurrences(head, value) {
    // Create dummy node to handle head removal
    const dummy = new Node(0);
    dummy.next = head;

    let current = dummy;
    while (current.next !== null) {
        if (current.next.val === value) {
            // Skip the node
            current.next = current.next.next;
        } else {
            // Only advance if we didn't delete
            current = current.next;
        }
    }

    return dummy.next;
}