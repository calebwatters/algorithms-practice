// function keyDuplicates(arr) {
//     arr.sort();
//     let results = {};
//     let current = null;
//     let count = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== current) {
//             if (count > 1) {
//                 if(results[count]) {
//                     results[count].push(current)
//                 } else {
//                     results[count] = [current]
//                 }
//             }
//             current = arr[i];
//             count = 1;
//         } else {
//             count++;
//         }
//     }
//     if (count > 1) {
//         results[count].push(current)
//     }
//     return results;
// }

function keyDuplicates(arr) {
    let testObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (testObj[arr[i]]) {
            testObj[arr[i]] += 1;
        } else {
            testObj[arr[i]] = 1;
        }
    }
    let results = {};
    for (let key in testObj) {
        if(testObj[key] > 1) {
            if (results[testObj[key]]) {
                results[testObj[key]].push(key)
            } else {
                results[testObj[key]] = [];
                results[testObj[key]].push(key)
            }
        }
    }
    return results
}

let arrObject = {'test': 'test'}

arr = [1, 2, 2, 5, "Danny", "Danny", 5, 5, 5]
let input1 = [3, 1, "cats", 1, 1, "cats", 3, 3, arrObject, arrObject, arrObject ]
console.log(keyDuplicates(arr));
console.log(keyDuplicates(input1));