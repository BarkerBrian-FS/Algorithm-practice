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

    def insert(self, data, index):
        """
        Inserts new node containing data at index position 
        Insertion takes constant time or O(1) but finding node at insertion
        takes linear or O(n) time

        Over all insert is Linear time of O(n)
        """
        if index == 0:
            self.add(data)

        if index > 0:
            new = Node(data)

            position = index
            current = self.head

            while position > 1:
                current = node.next_node
                position -=1

            prev_node = current
            next = current.next_node

            prev_node.next_node = new
            new.next_node = next_node
        

    def remove(self, key):
        current  = self.head
        previous = None
        found = False

        while current and not found:
            if current.data == key and current is self.head:
                found = True
                self.head = current.next_node
            elif current.data == key:
                found = True
                previous.next_node = current.next_node
            else:
                previous = current
                current = current.next_node


        


        



