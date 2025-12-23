class Node:
    """
    An object for storing a single node of a linked list
    Models two attributes -data and the link to next node in the list
    """

    data = None
    next_node = None

    def __init__(self, data):
        self.data = data


    def __repr__(self):
        """
        Return a string representation of the list
        Takes O(n) time
        """
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
    This method is constant time or O(1)
    """
    def add(self, data):
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node

    def search(self, key):
        """
        Search for the first node containing data that matches the key 
        Returns node or none if not found
        Runs in linear time or O(n)
        """
        current = self.head

        while current:
            if current.data ==key:
                return current
            else:
                current = current.next_node
        return None

    

        



