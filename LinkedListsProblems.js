/*
Problem
Given the head of a linked list and an integer n, remove the n-th node from the list (1-indexed) and return the head of the modified list.

Input:

head: the head node of a singly linked list
n: an integer representing the position of the node to remove (1-indexed)
Output:

Return the head of the modified linked list
Constraints:

The list has at least 1 node
n is a valid position in the list (1 <= n <= length of list)
*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthNode(head, n) {
    if (head === null || n < 1) {
        return head;
    }

    if (n === 1) {
        return head.next;
    }

    let current = head;
    let position = 1;

    while (current.next !== null && position < n - 1) {
        current = current.next;
        position++;
    }

    if (current.next !== null) {
        current.next = current.next.next;
    }

    return head;
}


//find the middle of linked list
function middleOfList(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.val;
}