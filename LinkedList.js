//Linked List Cycle Floyds Tortoise and Hare
/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote the 
index of the node that tail's next pointer is connected to. Note that pos is not passed 
as a parameter. Return true if there is a cycle in the linked list. Otherwise, return 
false.
*/
function hasCycle(head){
    let slow = head;
    let fast = head;
    //keep looping as long as fast and the next node exist
    while(fast !== null && fast.next !== null){
        //move slow one node at a time
        slow = slow.next;
        //move fast 2 nodes at a time 
        fast = fast.next.next;
        //if pointers meet there is a cycle
        if(slow === fast){
            return true
        }
    }
    //if here no cycle found
    return false
}



//Reverse Linked List
/*
Given the head of a singly linked list, 
reverse the list, and return the reversed list.
*/

function reverseList(head){
    //End will be new head
    let prev = null;
    //start from original head
    let current = head;
    //loop while current not null
    while(current !== null){
        //save the next node
        let next = current.next;
        //reverse the link
        current.next = prev;
        //move prev forward
        prev = current;
        //move current forward
        current = next
    }
    //prev is the new head after loop
    return prev
}

//Merge 2 sorted lists
/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made 
by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

function mergeTwoLists(list1, list2){
    //create dummy node for merging
    let dummy = new ListNode(0);
    let current = dummy;

    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            //attach list1 node
            current.next = list1;
            //move list1 forward
            list1 = list1.next;
        } else {
            //attach list2 node
            current.next = list2;
            //move list2 forward
            list2 = list2.next;
        }
        //move current forward
        current = current.next;
    }
    //attach remaining node if any 
    if(list1 !== null){
        current.next = list1;
    } else if(list2 !== null){
        current.next = list2;
    }
    //return the merged list starting after dummy
    return dummy.next;
}
