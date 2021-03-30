function fibonacciRecursive(n){
    if(n < 2){
        return n;
    } else {
        return (fibonacciRecursive(n-1) + fibonacciRecursive(n-2));
    }
}

console.log(fibonacciRecursive(6));
console.log('---------------------------------------')

function fibonacciIterative(n){
    //using arrays
    let arr = [0,1];
    //start at 2 bec we go to index 2 onwards
    for(let i = 2; i <= n; i++){
        arr.push(arr[i-2]+arr[i-1])
    }
    return arr[n];
}
console.log(fibonacciIterative(6));