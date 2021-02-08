//simple recreation class of array in JavaScript

class SampleArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index];
    }

    push(item){
        //add data to at the current length
        this.data[this.length] = item;

        //extend length of array from previos value
        this.length++;

        //give back full array data
        return this.data;
    }

    pop(){
        //store deleted item to return that value that was removed
        const deletedItem = this.data[this.length-1];
        delete this.data[this.length-1];

        //reduce length after deleting data
        this.length--;
        return deletedItem;
    }

    deleteAtIndex(index){
        this.shiftItemsBack(index);
        return this.data
    }

    shiftItemsBack(index){
        //grab data from front of current index and shift it back
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }

        //delete last item in data
        delete this.data[this.length-1];

        //reduce length
        this.length--;
    }

    insertAtIndex(index, item){
        this.shiftItemsForward(index, item)
        return this.data;
    }

    shiftItemsForward(index, item){
        //increase length
        this.length++;

        //loop from end of array going to the specified index shifting data forward
        for(let i = this.length-1; i >= index; i--){
            
            this.data[i] = this.data[i-1];
        }

        //assign the item onto the specified index
        this.data[index] = item;
    }
}

const testArray = new SampleArray();
console.log(testArray);
testArray.push("data1");
testArray.push("data2");
testArray.push("data3");
console.log("First 3 items");
console.log(testArray);

console.log(`\nFirst Popped item ${testArray.pop()}`);

console.log(`Data after popping data 3\n`);
console.log(testArray);

console.log("adding data3 back, data4, and data5")
testArray.push("data3");
testArray.push("data4");
testArray.push("data5");

console.log("Deleting data at index 0:")
testArray.deleteAtIndex(0);
console.log(testArray); 


console.log("\nInserting data at index 1")
testArray.insertAtIndex(1, "my_inserted_data");
