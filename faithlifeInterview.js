
// function leapYear(year) {
//     // return !year % 100 === 0 && year % 400 === 0 || year % 4 === 0;
//     if(year % 4 === 0) {
//         if(year % 100 === 0) {
//             if(year % 400 ===0) {
//                 return true
//             } 
//             return false
//         }
//         return true 
//     }
//     return false
// }

// let year3 = 1400;
// let year1 = 2000;
// let year2 = 1977;

function isLeapYear(year) {
    return year % 400 === 0 || !(year % 100 === 0) && year % 4 === 0;
}

console.log(isLeapYear(1927));
console.log(isLeapYear(2000));
console.log(isLeapYear(2004));
console.log(isLeapYear(1900));

for (let i = 0; i < 2021; i++) {
    console.log("The year " + i + " is a leap year?: " + isLeapYear(i));
}