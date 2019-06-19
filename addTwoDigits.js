function twoDigits(n) {
    n.split('');
    let result =  parseInt(n[0]) + parseInt(n[1])
    return result
}

console.log(twoDigits("15"));