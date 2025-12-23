class Node:
    """
    Docstring for Node
    An object for storing a single node of a linked list
    Models two attributes -data and the link to next node in the list
    """

    data = None
    next_node = None

    def __init__(self, data):
        self.data = data


    def __repr__(self):
        return "<Node data: %s>" %self.data
    
class linkedList:
    """
    Singly Linked List
    """
    head = None

    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head == None

    def size(self):
        """
        Returns number of nodes in the list
        Takes O(n) or linear time
        """
        current = self.head
        count = 0

        while current:
            count += 1
            current = current.next_node

        return count
    """
    def add adds new node containing data at the head of the list
    """
    def add(self, data):
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node

        



