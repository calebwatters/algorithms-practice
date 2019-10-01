function leapYearCalc(year) {
    return year % 400 == 0 || !year % 100 == 0 && year % 4 == 0;
}

console.log(leapYearCalc(2000),
leapYearCalc(1924),
leapYearCalc(1900)


