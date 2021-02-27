class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        //create new node with our value
        newNode = {
            value: value,
            next: null
        };
        //append the end which is tail to our new node
        this.tail.next = newNode;
        this.tail = newNode; //reassign tail as the new node bec it is the last
    }
}