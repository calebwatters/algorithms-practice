

// function largestOfFour(array) {
//     newArr = []
//     array.forEach(function (nestedArray) { newArr.push( Math.max.apply(Math, nestedArray)); });
//     return newArr
// }

// function largestOfFour(array) {
//     results = array.map(function (nestedArray) { return Math.max.apply(Math, nestedArray); });
//     return results
// }

function largestOfFour(array) {
    results = [];
    for(let i = 0; i < array.length; i++) {
        let maxNum = array[i][0]
        let nestedArray = array[i]
        for(let j = 0; j < nestedArray.length; j++) {
            if (nestedArray[j] > maxNum) {
                maxNum = nestedArray[j]
            }
        }
        results.push(maxNum)
    }
    return results
}

//Which of these functions is prefereable to demonstrate understanding in interview context?
//Is using the Math operator or map functions frowned upon? Is it better to start there and work
//through the logic as they ask you to modify it? ie: 'Now do it without map/Math'


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))

