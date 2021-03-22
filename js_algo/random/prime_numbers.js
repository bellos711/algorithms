
const primeNumber = (n)=>{
    let primeNumbersArray = [];
    if(n>=2){
        primeNumbersArray.push(2);
    }// since 2 is the ONLY even prime number

    for(let i = 3; i <= n; i++){
        if(i%2 !== 0){
            //cool that means it isn't a whole number
            if(i===3 || i===5 || i===7 || i===11){
                //if it's more than 11, we kinda need to include these starting prime numbers
                primeNumbersArray.push(i);
            } else if ((i%3 !== 0) && (i%5 !== 0) && (i%7 !== 0) && (i%11 !== 0)){
                //yup, if they're not divisible by any of these OG prime numbers, then it must be prime!
                primeNumbersArray.push(i);
            }
        }
    }

    return primeNumbersArray;
}

console.log(primeNumber(79)); //parameter up to what prime?