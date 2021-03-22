const diagonalMatrixSum = (matrixArray) => {
    sum1 = 0;
    sum2 = 0;

    
    //nested for loop way
    for(let i = 0; i < matrixArray.length; i++){

        //nested loop for columns
        for(let j = i; j <= i; j++){
            if(isNaN(matrixArray[i][j])){continue;}
            console.log("J is " + matrixArray[i][j]);
            sum1 += matrixArray[i][j];
        }
        // console.log(`length is ${matrixArray.length-1}`)

        const endColIndex = (matrixArray.length-1);
        for(let k = (endColIndex-i); k === (endColIndex-i); k--){
            if(isNaN(matrixArray[i][k])){continue;}
            console.log("K is " + matrixArray[i][k]);
            sum2 += matrixArray[i][k];
        }
    }

    //  without using built in Absolute value function Math.Abs
    if(sum1 < 0){
        sum1 = sum1 * (-1);
    } 
    if (sum2 < 0){
        sum2 = sum2 * (-1);
    }

    let differenceOfSums = Math.abs(sum1 - sum2)

    console.log('Absolute value of sum1 and sum2');
    console.log('Left to right sum = ' + sum1);
    console.log('Right to left sum = ' + sum2);
    console.log('Difference of sums = ' + differenceOfSums);
}


// const myMatrix = [[1,2,3],[4,5,6],[-25,8,9]]
const myMatrix = [[1,2,3],[6],[-25,8,9]]
diagonalMatrixSum(myMatrix);