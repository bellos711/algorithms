//merge 2 sorted arrays

function mergeSortedArrays(array1, array2){
    //create empty array to store both sorted arrays
    const fullySortedArray = [];

    //declare array items and start their value at the first index which is 0
    let i = 0;
    let j = 0;
    let array1Item = array1[i]; //value at array1[0]
    let array2Item = array2[j]; //value at array2[0]

    //if 1 array is empty, just return the other
    if(array1.length < 1){
        return array2;
    }
    if(array2.length < 1){
        return array1;
    }

    //while loop whilet heres data in either array1Item or array2Item which initially contained data in array1[0] array2[0]
    while (array1Item || array2Item){

        //because if undefined < any number, it is false
        if(/*array2Item === undefined*/!array2Item || array1Item < array2Item){
            //if that value in array1 is smaller, push that in first
            fullySortedArray.push(array1Item);
            //increment the index and assign it to the new arrayitem
            i++;
            array1Item = array1[i];
        } else {
            fullySortedArray.push(array2Item);
            j++;
            array2Item = array2[j];
        }
    }

    return fullySortedArray;
}

mergeSortedArrays([0,3,11,17], [3,4,6,7,19]);