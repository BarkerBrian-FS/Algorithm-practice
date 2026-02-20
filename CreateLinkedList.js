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
    getByIndex(index){
        if(index < 0 || index > this.length)return null;

        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current
    }
    print(){
        let output = '';
        let current = this.head;
        while(current){
            output = `${output}${current.value}`;
            current = current.next;
        }
        console.log(`${output}null`)
    }
    inserAtIndex(index, value){
        if(index === 0) return this.insertAtHead(value);

        const prev = this.getByIndex(index - 1)
        if(prev === null) return null

        prev.next = new LinkedListNode(value, prev.next)
        this.length++
    }
    removeAtIndex(index){
        if(index === 0)return this.removeHead(value)

        const prev = this.getByIndex(index - 1)
        if( prev === null) return null

        prev.next = prev.next.next;
        this.length--;
        
    }
}

class LinkedListNode{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

LinkedList.fromvalues(...values) = function(...values){
    const ll = new LinkedList();
    for(let i = values.length - 1; i >= 0; i--){
        ll.insertAtHead(values[i])
    }
    return ll
}