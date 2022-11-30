// function sum(num1,num2,num3,num4,num5,num6)
// {
//     return num1+num2+num3+num4+num5+num6
// }
// function calculate(num1,num2,num3,num4,num5,num6,sum)
// { 
//     return sum(num1,num2,num3,num4,num5,num6);
// }
// let result = calculate(1,2,3,4,5,6,sum);
// console.log(result); 


// -------------------------------------

// using recursion

// function getSum(num)
// {
//     let sum = 0;
//     while (num != 0) 
//     {
//         sum = sum + num % 10;
//         num = parseInt(num / 10);
//     }
//     function FindSum()
//     {
//         let nnum = sum
//         let nsum = 0;
//         while (nnum != 0) 
//         {
//             nsum = nsum + nnum % 10;
//             nnum = parseInt(nnum / 10);
//         }
//         return nsum
//     }
//     return FindSum()
    
// }

// console.log(getSum(666666111))


// -------------------------------------

// using call back

let sum = (number1) =>{

    let sum1 = 0;
    console.log(number1);
    while (number1 != 0) {
        sum1 = sum1 + number1 % 10;
        number1 = parseInt(number1 / 10);
    }
    return sum1;

}

let check = (value) => {
    if (value <= 9) {
        return value;
    }
    else 
        return 0;
    
}

let total = (number, callback) => {
    let n= callback(number);
    if(n >= 9)
        return sum(n)
}

let number = 9898989898;
console.log(total(number, sum));

