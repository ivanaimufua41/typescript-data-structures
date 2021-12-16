interface ILinkedList<T> {
    insertAtStart: (data: T) => LinkedNode<T>;
    insertAtEnd: (data: T) => LinkedNode<T>;
    deleteNode: (node: LinkedNode<T>) => void;
    traverse: () => T[];
    size: () => number;
    search: (compare: (data: T) => boolean) => LinkedNode<T> | null;
}

interface IPost {
    title: string;
}

class LinkedNode<T> {
    public next: LinkedNode<T> | null = null;
    public previous: LinkedNode<T> | null = null;
    constructor(public data: T) {}
}

/*
A doubly linked list has a reference to the previous and next node
A singly linked list only has reference to the next node

what are the pros and cons of using a linked list ?'
Pros
- can grow and shrink at runtime no need for inital size
- insert and deletion are easy
- no memory wastage. If we create an array of size of 10 items and only use 6 we have 4 spaces wasted
Cons
- more memory required to store each node cotntains a pointer
- traversal is difficult. Can't random access items by index. Time required to access node is large
Easier to do in a double linked list because the nodes have a previous and next node reference but
singly is more difficult

Analyze each method in the class and make sure you understand how to create one w. methods


*/

class LinkedList<T> implements ILinkedList<T> {
    private head: LinkedNode<T> | null = null;

    public insertAtStart = (data: T): LinkedNode<T> => {
        const node = new LinkedNode(data);
        if (this.head === null) {
            this.head = node;
        } else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    };

    public insertAtEnd = (data: T) => {
        const node = new LinkedNode(data);
        if (this.head === null) {
            this.head = node;
        } else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    };

    public deleteNode = (node: LinkedNode<T>) => {
        if (!node.previous) {
            this.head = node.next;
        } else {
            const prevNode = node.previous;
            prevNode.next = node.next;
        }
    };
    public search = (compare: (data: T) => boolean) => {
        const checkNext = (node: LinkedNode<T>): LinkedNode<T> | null => {
            if (compare(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
    };
    public traverse = () => {
        const array: T[] = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return array;
    };

    public size = () => this.traverse().length;
}

const runLinkedList = () => {
    const linkedList = new LinkedList<IPost>();
    console.log('first traverse', linkedList.traverse());

    linkedList.insertAtEnd({ title: 'Post 1' });
    linkedList.insertAtEnd({ title: 'Post 2' });
    linkedList.insertAtStart({ title: 'Post 3' });
    linkedList.insertAtStart({ title: 'Post 4' });

    console.log('second traverse', linkedList.traverse());
    linkedList.search(({ title }) => title === 'Post 3');
};

export default runLinkedList;
