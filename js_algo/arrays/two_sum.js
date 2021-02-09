/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

//BRUTE FORCE WAY is doing a nested for loop which would give a time complexity of O(n^2) ... bad news

const twoSum = (array, target) => {
    //to iterate once, we are going to create a hash table
    //this hash table will hold the value of array as KEY annd the index of array as VALUE
    let hashStorage = {};
    for(let i = 0; i < array.length; i++){
        //renamed array[i] value to currentValue for readability
        currentValue = array[i];

        //if there is a key or value in there, that means we found what we are looking for
        if(hashStorage[currentValue] !== undefined){
            return [hashStorage[currentValue], i] //this returns the value of the key
        } else { //if not, we create a key with value, where key is TARGET - CURRENT VALUE and assign it index
            hashStorage[target - currentValue] = i;
        }
    }
}

/* 
visualization  of example 1 [2,7,11,15]
in first iteration:
i = 0
currentValue = 2

storage = {
    //in line 35, what happens is
    '7' : 0,
}

ITERATION 2
we have the hash value, return the value of it which is index, and current index
//---------------------------------------
visualizatopn fpr example 2 [3,2,4]
ITERATION 1
i = 0
currentValue = 3
storage = {
    //in line 35
    '3':0
} 

ITERATION 2
i = 1
currentValue = 2 //target is 6, so we want to store in storage 2-6 = '4'
storage = {
    //in line 35
    '3':0
    '4':1
} 

ITERATION 3
i = 2
currentValue = 4
hashStorage[currentValue] exists!
storage = {
    //in line 35
    '3':0
    '4':1
} 
we have the hash value, return the value of it which is index, and current index
*/
nums = [2,7,11,15];
nums2 = [3,2,4];
nums3 = [3,3];
nums4 = [9,7,11,2]
target = 9;
target2 = 6;
target3 = 6;
target4 = 18;
twoSum(nums4, target4);