// function containsDuplicates (arr) {
//     let compArr = arr.slice().sort();
//     let result;
//     for(let i = 0; i < arr.length; i++) {
//         if(compArr [i + 1] == compArr[i]){
//             result = true
//         }
//     }
//     if( result == true) {
//         return true
//     } else {
//         return false
//     }
// }

//more effecient?

function containsDuplicates (arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if( arr[i] === arr[j]) {
                return true
            }
        }
    }
    return false
}


console.log(containsDuplicates(["hippo", "cat", "dog", "cat"]))
console.log(containsDuplicates([1, 2, 3, 4, 5, 2]))
console.log(containsDuplicates([1, 2, 3, 4, 5]))
console.log(containsDuplicates([]))
console.log(containsDuplicates([1]))




 


 
