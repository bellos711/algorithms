class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.bottom = newNode;
            this.top = newNode;
        } else {
            const holdingPointer = this.top; //visualization  example [bottom | top 7 and null] becomes [top 8 and next->[bottom 7 and null]]
            this.top = newNode;
            this.top.next = holdingPointer; 
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){//that means there's only one in the stack so empty bottom as well to null since we popping it off
            this.bottom = null;
        } 
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }

    isEmpty(){
        return (!this.bottom ? true : false)
    }
}



