var reverse = function(x) {
  let reversed =
    parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);
    //test for int overflow
  if (reversed > 2147483647 || reversed < -2147483647) {
    return 0;
  } else {
    return reversed;
  }
};
