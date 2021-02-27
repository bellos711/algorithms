class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    printList(){
        const array = [];
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        
        return array;
    }

    append(value){
        //create new node with our value using class Node in line1
        const newNode = new Node(value);
        //append the end which is tail to our new node
        this.tail.next = newNode;
        this.tail = newNode; //reassign tail as the new node bec it is the last
        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        else if(index===0){
            this.prepend(value);
            return this.printList();
        }

        const newNode = new Node(value);
        const runner = this.traverseListToIndex(index-1); //because we want to target the node previous to where we are currently pointing to assign /next
        const runnerNext = runner.next;
        runner.next = newNode;
        newNode.next = runnerNext;
        this.length++;

        return this.printList();
    }

    remove(index){
        const endIndex = this.length-1;
        if(index >= endIndex){
            
            const runner = this.traverseListToIndex(endIndex-1)
            // this.tail = runner;
            // this.tail.next = null;
            runner.next = null;
            this.tail = runner;
            this.length--;
            return this.printList();
        }
        else if(index===0){
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }

        const runner = this.traverseListToIndex(index-1);
        runner.next = runner.next.next;
        this.length--;
        return this.printList();
    }

    //TRAVERSAL
    traverseListToIndex(index){
        let currentNode = this.head;
        let counter = 0;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

