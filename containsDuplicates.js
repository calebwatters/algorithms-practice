function containsDuplicates (arr) {
    let matchCount = 0;
    let compArr = arr.slice().sort();
    let result;
    for(let i = 0; i < arr.length; i++) {
        if(compArr [i + 1] == compArr[i]){
            result = true
        }
    }
    if( result == true) {
        return true
    } else {
        return false
    }
}


console.log(containsDuplicates(["hippo", "cat", "dog", "cat"]))
console.log(containsDuplicates([1, 2, 3, 4, 5, 2]))
console.log(containsDuplicates([1, 2, 3, 4, 5]))
console.log(containsDuplicates([]))




 


 
