//Create a linked list
//Types of linked lists
//Singly goes forward, Doubly goes both ways
//Circular Linked List has a cycle

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data){
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode;
        this.length++
    }

}

class LinkedListNode{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}