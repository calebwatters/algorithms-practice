function longestStrings(arr) {
    let lgth = 0;
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            lgth = arr[i].length;
        }
    } 
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length == lgth) {
            result.push(arr[j])
            break
        }
    }
  
    return result
}

console.log(longestStrings(['blah', 'stuff', "at"]))