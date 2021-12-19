interface IStack<T> {
    push: (item: T) => void;
    pop: () => T | undefined;
    peek: () => T | undefined;
    size: () => number;
    printItems: () => T[];
}

interface IPost {
    title: string;
}

/*
 push -> add item to stack
 pop -> return last added item and remove it from stack
 peek -> return last added item without removing it from stack

 capacity -> a number of items stack can fit
 storage -> all stacked item
*/

class StackImplementation<T> implements IStack<T> {
    private storage: T[] = [];
    
    constructor(private capacity: number = Infinity){}

    public push = (item: T): void => {
         if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };

    public pop = (): T | undefined => this.storage.pop();
    public peek = (): T | undefined => this.storage[this.size() - 1];
    public size = (): number => this.storage.length;
    public printItems = (): T[] => {
        const items: T[] = [];
        this.storage.forEach((item) => {
            items.push(item);
        })
        return items;
    }
}

const runStack = () => {
    const stack = new StackImplementation<IPost>();
    stack.push({ title: 'A'});
    stack.push({ title: 'B'});
    stack.push({ title: 'C'});

    console.log('inital stack data ', stack.printItems()); // Output: 2
    console.log('peeking at last item ', stack.peek()); // Output: "B"
    console.log('size after peeking ', stack.size()); // Output: 2
    console.log('pop last item ', stack.pop());  // Output: "B"
    console.log('items inside the stack after popping', stack.printItems());
    console.log('size of stack after... ', stack.size()); // Output: 1
}

export default runStack;