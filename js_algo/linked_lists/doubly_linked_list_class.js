class DoubleNode{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    printList(){
        const array = [];
        let runner = this.head;
        while(runner !== null){
            array.push(runner.value);
            runner = runner.next;
        }
        return array;
    }

    append(value){
        const newNode = new DoubleNode(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new DoubleNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    //TRAVERSAL
    traverseListtoIndex(index){
        let currentNode = this.head;
        let counter = 0;
        while(counter !==  index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value){
        if(index >= this.length){
            this.append(value);
            console.log("this was run in 77")
            return this.printList();
        }
        else if(index <= 0){
            this.prepend(value);
            return this.printList();
        }

        const newNode = new DoubleNode(value);
        let runner = this.traverseListtoIndex(index-1); //we need the node before the index and node at index
        // console.log("value of runner" + runner);
        let frontRunner = runner.next;
        newNode.prev = runner;
        runner.next = newNode;
        newNode.next = frontRunner;
        frontRunner.prev = newNode;
        this.length++;

        return this.printList();
    }

    remove(index){
        if(index >= this.length-1){
            let currentNode = this.tail.prev;
            this.tail = currentNode;
            this.tail.next = null;
            return this.printList();
        }
        else if(index <= 0){
            this.head = this.head.next;
            this.head.prev = null;
            return this.printList();
        }
        console.log("NOT index 0")
        let runner = this.traverseListtoIndex(index-1);
        let frontFrontRunner = runner.next.next;
        runner.next = frontFrontRunner;
        frontFrontRunner.prev = runner;
        return this.printList();
    }
    
}//end class