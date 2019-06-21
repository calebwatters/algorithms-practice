
function validTime(t) {
    arr = t.split('')

    h = parseInt(t[0] + t[1]);
    m = parseInt(t[3] + t[4]);

    if(h > 24) {
        return false
    } else if (m > 60){
        return false
    } else {
       return true
    }
}
//weird error on spliting on ':' 

console.log(validTime("13:58"))

console.log(validTime("25:58"))

console.log(validTime("13:75"))
