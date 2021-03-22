const sum_from_strings = (myString) => {
    let sum = 0;
    // let myString = "sfg2cj3dj8"

    for(let i = 0; i < myString.length; i++){
        parsedChar = parseInt(myString[i]);
        console.log(parsedChar);
        if(!isNaN(parsedChar)){
            sum+=parsedChar;
        }
    }
    return sum;
}

let myData = parseInt("77");
console.log(sum_from_strings("asd5asdfjk6kag7"));
console.log(myData);
console.log(typeof(myData));
console.log("------------------------------------------------")






const sum_from_strings_complex = (thisString) => {
    let sum = 0;
    //let thisString = "kajsdf700a1sdjnk35d10"; //TEST STRING

    for(let i = 0; i < thisString.length; i++){
        parsedChar = parseInt(thisString[i]); //parse this character and if it is a number proceed.
        if(!isNaN(parsedChar)){ 

            //this is assuming we have multiple digits 
            let counter = 1; //counter will represent the index that is after the loop we are on
            let numberString = ""; //we will grab the next characters and add them to numberString
            numberString += parsedChar; //we add the first value first
            
            let followingValue = thisString[i+counter];

            if(!isNaN(followingValue)){ //if the value next to initial value IS A NUMBER
                while(!isNaN(followingValue)){ //while the followingValue is a number or NOT NaN
                    numberString += followingValue; //append to the numberString "" that following value

                    counter++   //increment the counter to move to next indexes
                    followingValue = thisString[i+counter]; //reassign followingValue to the one next to it
                }

            }

            // console.log(numberString)
            numberString = parseInt(numberString);
            // console.log(typeof(numberString));

            sum+=numberString;
            console.log(`sum so far is ${sum}`);
            i+=counter; //+= counter will make it so i skips the loop after the number assuming it was a multidigit one like 777
        }
    }
    return sum;
}

console.log(sum_from_strings_complex("kajsdf700a1sdjnk35d10"));