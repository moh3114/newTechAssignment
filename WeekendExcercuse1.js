`use strict`

// EX1

function yesOrNow(boolValue) {
    return boolValue ? "YES" : "NO"
}

console.log(yesOrNow(true))

//////////////////////////////////////////

// EX2.1

function sumOfLowestNumbers(arrayOfNumbers) {
    let sortedArray = arrayOfNumbers.sort((a, b) => a - b)
    let sum = 0;
    for (let i = 0; i < 2 && i < sortedArray.length; i++) sum += sortedArray[i]
    return sum
}

console.log(sumOfLowestNumbers([3, 2, 0, 8, 9, 1, 200, 80000]));

//////////////////////////////////////////

// EX2.2

function convertBibaryToNumber(binarySeq) {
    return parseInt(binarySeq.join(""), 2)
}

console.log(convertBibaryToNumber([0, 1, 0, 1]))

//////////////////////////////////////////

// EX2.3

function findNextSquare(number) {
    const baseNumber = Math.floor(Math.sqrt(number))
    return Math.pow(baseNumber, 2) === number ? Math.pow(baseNumber + 1, 2) : -1
}

console.log(findNextSquare(122))

//////////////////////////////////////////

// EX2.4

function findUniq(numbersArray) {
    return numbersArray.find(number => numbersArray.indexOf(number) === numbersArray.lastIndexOf(number))
}

console.log(findUniq([1, 2, 2, 2]));

//////////////////////////////////////////

// EX2.5

function summation(number) {
    return number * (1 + number) / 2
}

console.log(summation(8))

//////////////////////////////////////////

// EX2.6

function centuryFromYear(year) {
    return 1 + Math.floor(year / 100)
}

console.log(centuryFromYear(1993));

//////////////////////////////////////////

// EX2.7

function basicOp(operation, num1, num2) {
    if (isNaN(num1) && isNaN(num2))
        return "input error"
    if (operation === `+`)
        return num1 + num2
    else if (operation === `-`)
        return num1 - num2
    else if (operation === `*`)
        return num1 * num2
    else if (operation === `/`)
        return num1 / num2
    else return "input error"
}

console.log(basicOp(`+`, 2, 6));

//////////////////////////////////////////

// EX3.1

function nb_year(populationStart, increasePersent, fixNewInhabitants, targetPopulation) {
    let currentPopulation = populationStart
    let years = 0
    while (currentPopulation < targetPopulation) {
        currentPopulation += currentPopulation * increasePersent / 100 + fixNewInhabitants
        years++;
    }
    return years
}

console.log(nb_year(1000, 2, 50, 1200));

//////////////////////////////////////////

// EX5.1

function stringTrim(str) {
    return str.slice(1, str.length - 1)
}

console.log(stringTrim(`NEWTECH`));

//////////////////////////////////////////

// EX5.2

function stringRepeat(repeatCount, str) {
    newStr = ``
    for (let i = 0; i < repeatCount; i++)
        newStr = newStr.concat(str)
    return newStr;
}

console.log(stringRepeat(5, `hello`));

//////////////////////////////////////////

// EX5.3

function toCamelCase(str){
    let words = str.split(`-`).join().split(`_`).join().split(`,`);
    let newStr = words.shift();    
    words.forEach(word => newStr = newStr.concat(word[0].toUpperCase()+word.slice(1)))
    return newStr
}

console.log(toCamelCase(`the-stealth-warrior`));

//////////////////////////////////////////

// EX5.4

function toWeirdCase(str){
    let newStr = ``
    str.split(``).forEach((letter, i) => i%2 === 0 ? newStr = newStr.concat(letter.toUpperCase()) : newStr = newStr.concat(letter.toLowerCase()))
    return newStr
}

console.log(toWeirdCase(`weird string case`));
console.log(toWeirdCase(`String`));

//////////////////////////////////////////

// EX5.5

function abbreviateTwoWords(str) {
    return str.split(` `).map(word => word[0].toUpperCase()).join(`.`)
}

console.log(abbreviateTwoWords("muhammad bsoul"));

//////////////////////////////////////////

// EX5.6

function mask(str) {
    let newStr = ``;
    for (let i = 0; i < str.length - 4; i++) {
        newStr = newStr.concat(`#`);
    }
    return newStr.concat(str.slice(str.length - 4, str.length))
}

console.log(mask(`nananannananananananaan!!!!`));

//////////////////////////////////////////

// EX5.7

function shortestWordLength(str) {
    const words = str.split(` `);
    let shortLength = words[0].length
    words.forEach(word => shortLength = word.length < shortLength ? word.length : shortLength)
    return shortLength
}

console.log(shortestWordLength(`My name is muhammad`));

//////////////////////////////////////////

// EX5.8

function longestWord(str) {
    const words = str.split(` `);
    let longLength = words[0].length
    words.forEach(word => longLength = word.length > longLength ? word.length : longLength)
    return words.filter(word => word.length === longLength)
}

console.log(longestWord(`My name is muhammad`));

//////////////////////////////////////////

// EX6.1

function mumbling(str) {
    let newStr = ``
    const letters = str.split(``);
    let count = 1
    letters.forEach(char => {
        newStr = newStr.concat(char.toUpperCase())
        for (let i = 1; i < count; i++) newStr = newStr.concat(char)
        count++
        newStr = newStr.concat(`-`)
    })
    return newStr.slice(0, newStr.length - 1)
}

console.log(mumbling(`abcd`));

//////////////////////////////////////////

// EX6.3

function organizeStrings(str1, str2) {
    const s = str1.concat(str2)
    const s2 = [];
    s.split(``).forEach(letter => !s2.includes(letter) ? s2.push(letter) : 0)
    return s2.sort().join(``);
}

console.log(organizeStrings(`xyaabbbcccccdefww`, `xxxxyyyyabklmopq`));
console.log(organizeStrings(`abc`, `abc`));

//////////////////////////////////////////

// EX6.4

function isogram(str) {
    const lowerCaseStr = str.toLowerCase();
    let newStr = ``
    for (let letter of lowerCaseStr){
        if (!newStr.includes(letter)){
            newStr = newStr.concat(letter);
        }
        else{
            return false
        }
    }
    return true;
}

console.log(isogram(`abABB`));

//////////////////////////////////////////
