// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }


class StackArray{
    constructor(){
        this.stackArray = [];
    }

    peek(){
        return this.stackArray[(this.stackArray.length-1)];
    }

    push(value){
        this.stackArray.push(value);
        return this;
    }

    pop(){
        this.stackArray.pop();
        return this;
    }

    isEmpty(){
        return (!this.stackArray ? true : false);
    }
}