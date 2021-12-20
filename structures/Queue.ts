interface IQueue<T> {
    enqueue: (item: T) => void;
    dequeue: () => T | undefined;
    size: () => number;
    printItems: () => T[];
}

interface IPost {
    title: string;
}

/*
 enqueue add item to the queue
 dequeue retrieves an item from the queue
 size returns size of queue
*/

class QueueImplementation<T> implements IQueue<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity){}
    public enqueue = (item: T): void => {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    public dequeue = (): T | undefined => this.storage.shift();
    public size = () => this.storage.length;
    public printItems = () => {
        const items: T[] = [];
        this.storage.forEach((item) => items.push(item));
        return items;
    }
}

const renderQueue = () => {
    const queue = new QueueImplementation<IPost>();

    queue.enqueue({ title: 'A'});
    queue.enqueue({ title: 'B'});
    queue.enqueue({ title: 'C'});

    console.log('initial queue items', queue.printItems());

    console.log('queue size ', queue.size());
    console.log('queue dequeue', queue.dequeue());

    console.log('queue items after dequeue', queue.printItems());
};

export default renderQueue;