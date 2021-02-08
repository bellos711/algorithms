//Create a function that reverses a string
function reverseString(str){
    //do a check if value str is valid
    if(!str || str.length < 2 || typeof str !== "string"){
        return "We cannot reverse this.";
    }
    else{
        //created new variable to store reversed string
        let reversedStr = "";
        //create forloop to start at end of string and put that value in reversedStr 
        for(let i = str.length-1; i >= 0; i--){
            reversedStr+=str[i];
        }

        return reversedStr;
    }
}

//using built in methods in javascript
function reverseString2(str){
    //do a check if value str is valid
    if(!str || str.length < 2 || typeof str !== "string"){
        return "We cannot reverse this.";
    }
    else{
        return str.split('').reverse().join('')
    }
}

//using built in methods in javascript + ES6 syntax
const reverseString3 = str => str.split('').reverse().join('')

//using built in methods in javascript + ES6 syntax using ...spread operator
const reverseString4 = str => [...str].reverse().join('')

const myString = "This is an example string"
console.log(`Reverse of \"${myString}\" is:\n`)
console.log(reverseString(myString));
console.log(reverseString2(myString));
console.log(reverseString3(myString));
console.log(reverseString4(myString));