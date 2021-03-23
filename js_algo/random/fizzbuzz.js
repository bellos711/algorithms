const fizzBuzz = (n) => {
    let fbArray = [];
    for(let i = 1; i <= n; i++){
        if(i%3 === 0){
            if(i%5 === 0) { fbArray.push("FizzBuzz"); }
            else { fbArray.push("Fizz"); }
        } else if (i%5 === 0 ){
            fbArray.push("Buzz");
        } else {
            fbArray.push(i);
        }
    }

    return fbArray;
}

console.log(fizzBuzz(45));
