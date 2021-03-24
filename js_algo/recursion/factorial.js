//Recursive
function factorial(n){
    console.log(n);
    if(n < 2){
        return 1;
    }

    return (n*factorial(n-1));
}

console.log(factorial(5))
console.log("----------------------------------")

//iterative
function factorialIteration(n){
    let factorialValue = n;
    for(let i = n-1; i >= 1; i--){
        console.log(factorialValue);
        factorialValue = factorialValue * i;
    }

    return factorialValue
    /*
    let answer = 1;
    if(n === 2){
        answer = 2;
    }
    for (let i = 2; i <= n; i++){
        answer = answer * i;
    }
    return answer
    */
}

console.log(factorialIteration(5));