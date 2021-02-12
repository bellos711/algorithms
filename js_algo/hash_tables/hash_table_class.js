class HashTable {
    constructor(size){
    this.data = new Array(size);
}

set(key, value) {
    let address = this._hash(key)
    if(!this.data[address]){ //if this data doesn't exist or is not there
        this.data[address] = [];
    }
    //we are adding key and data regardless
    this.data[address].push([key, value]);
}

get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log(currentBucket)
    if(currentBucket.length > 0){ //if there is something in here
        for(let i = 0; i < currentBucket.length; i++){ 
            if(currentBucket[i][0]===key){ //in the case theres a lot inside that one bucket, look through the arrays in the bucket and compare key.
                return currentBucket[i][1]; //if key is found, return value which is in index1
            }
        }
    } else {
        return undefined //if there is no data in that bucket return indefined
    }
}

_hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('first_item', 777)
myHashTable.get('first_item')
myHashTable.set('second_item', 11)
myHashTable.get('second_item')
