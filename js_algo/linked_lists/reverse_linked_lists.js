class LinkedList{
    //constructors etc...


    reverseLinkedListAsArray(){
        const array = [];
        let runner = this.head;
        while(runner !== null){
            array.unshift(runner/value);
            runner = runner.next;
        }
        return array;
    }
}