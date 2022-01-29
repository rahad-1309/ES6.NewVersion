// normal function
function sum(num,num2=13){
    return num+num2;
}
console.log(sum(23,144))

// another type of function
const doubleIt = function(num){
    return num*2
}

const result = doubleIt(32);
console.log(result)

// arrow function
const doSum = num => num*3;
console.log(doSum(23))

const doSum2 = (num1,num2,num3) => {
    const plus = num1+num2+num3;
    const minus = num3-num2+num1;
    const total = plus*3 - minus*2 + (num1*num2)/num3
    return total


}
console.log(doSum(34,56,21))
