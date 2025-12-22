`use strict`

// EX1

function yesOrNow(boolValue){
    return boolValue ? "YES" : "NO"
}

console.log(yesOrNow(true))

////////////////////////////////////////

// EX2

function sumOfLowestNumbers(arrayOfNumbers){
    let sortedArray = arrayOfNumbers.sort((a,b) => a-b)
    let sum = 0;
    for(let i=0; i<2 && i<sortedArray.length; i++) sum += sortedArray[i]
    return sum
}

console.log(sumOfLowestNumbers([3,2,0,8,9,1,200,80000]));

/////////////////////////////////////////
