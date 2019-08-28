def weightDistro(arr)
    num1 = arr.sum / 3
    num2 = arr.sum.to_f / 3 
    return num2 > num1 ? num1 + 1: num1
end

puts weightDistro([1,1,3,2])