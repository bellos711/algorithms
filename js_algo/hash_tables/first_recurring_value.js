//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

//using hashmap
function firstRecurringCharacter(input) {
    const storage = {}
    for(let i = 0; i < input.length; i++){
        if(storage[input[i]] !== undefined) {
            return input[i];
        } else {
            storage[input[i]] = i; //key's value could be anything. we really want the key
        }
    }
    //if the loop finished and nothing found
    return undefined;
}

firstRecurringCharacter([2,5,5,2,3,5,1,2,4]);
