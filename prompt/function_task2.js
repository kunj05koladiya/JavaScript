
// 1.Write a JS function that reverse a number.

// const prompt=require("prompt-sync")();
// function Reverse_Num()
// {
//     let rev = 0;
//     let num = parseInt(prompt("enter number:"));
//     let LastDigit;
//     while(num != 0)
//     {
//          LastDigit = num % 10;
//          rev = rev * 10 + LastDigit;
//          num = Math.floor(num/10);
//     }

// console.log("Reverse number : "+rev);
// }
// Reverse_Num();

// const prompt=require("prompt-sync")();
// let Reverse_Num=()=>
// {
//     let rev = 0;
//     let num = parseInt(prompt("enter number:"));
//     let LastDigit;
//     while(num != 0)
//     {
//         LastDigit=num%10;
//         rev=rev*10+LastDigit;
//         num=Math.floor(num/10);
//     }
//     console.log("Reverse number is : "+rev);    
// }
// Reverse_Num();

// ------------ * --------------

// 2. Write a JS function that checks string is 'palindrom' or not.

// const prompt=require("prompt-sync")();

// let str = prompt("enter string:");
// function Check_Palindrom(str)
// {
//     let len=str.length;

//     for(let i=0;i<len/2;i++)
//     {
//         if(str[i] !== str[len-1-i])
//         {
//             return "It is not palindrom..";
//         }
//     }
//     return "It is palindrom..";
// }
        
// console.log(Check_Palindrom(str));      // function calling


// const prompt=require("prompt-sync")();

// let str = prompt("enter string:");
// let Check_Palindrom=(str) =>
// {
//     let len=str.length;

//     for(let i=0;i<len/2;i++)
//     {
//         if(str[i] !== str[len-1-i])
//         {
//             return "It is not palindrom..";
//         }
//     }
//     return "It is palindrom..";
// }
        
// console.log(Check_Palindrom(str));      // function calling


// ------------ * --------------


// 3.Write a JS function that generates all combinations of a String.   exa. str= 'dog'   output= d,do,dog,o,og,g 

// const prompt=require("prompt-sync")();

// let str = prompt("enter string : ");

// function StrCombinations(str) 
// {
// 	let combinations = [];
// 	for(let i = 0 ;i < str.length; i++)
// 	{
// 		for(let j = i + 1; j <str.length + 1; j++)
// 		{
// 			combinations.push(str.slice(i , j));
// 		}
// 	}
//     return combinations;
// }
// console.log(StrCombinations(str));


// const prompt=require("prompt-sync")();
// let str = prompt("enter string : ");

// let StrCombinations=(str) => 
// {
// 	let combinations = [];
// 	for(let i = 0 ;i < str.length; i++)
// 	{
// 		for(let j = i + 1; j <str.length + 1; j++)
// 		{
// 			combinations.push(str.slice(i , j));
// 		}
// 	}
//     return combinations;
// }
// console.log(StrCombinations(str));


// ------------ * --------------


// 4.Write a JS function that returns a passed str with letters in alphabetical order. exa. str='webmaster'  output :'abeemrstw'

// const prompt=require("prompt-sync")();
// let str=prompt("enter str: ");

// function Alpha(str) 
// {
//     let arr = str.split(""); 		// splits the string
//     res = arr.sort().join(""); 		// sort the array and joins to form a string
//     return res; 				// returns the result
// }
// console.log(Alpha(str));


// const prompt=require("prompt-sync")();
// let str=prompt("enter str: ");

// let Alpha=(str)=> 
// {
//     let arr = str.split(""); 		// splits the string
//     res = arr.sort().join(""); 		// sort the array and joins to form a string
//     return res; 				// returns the result
// }
// console.log(Alpha(str));

// --------
// 	example of split function
// const myString = "Hello World. How are you doing?";
// const splits = myString.split("");
// const splits = myString.split(" ");
// const splits = myString.split("  ");
// const splits = myString.split("",3);
// const splits = myString.split(" ",3);
// const splits = myString.split("  ",3);

// console.log(splits); 


// ------------ * --------------

// 5. Write a JS function that accepts a str as a parameter & converts the first letters of each word of the str in upper case. exa. 'the quick'  output:'The Quick'

// const prompt=require("prompt-sync")();
// let str=prompt("enter str:");

// function Uppercase(str)
// {
//   let arr = str.split(" ");
//   let new_arr = [];
    
//   for(let i = 0; i < arr.length; i++){
//       new_arr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
//   }
//   return new_arr.join(" ");
// }
// console.log(Uppercase(str));


// const prompt=require("prompt-sync")();
// let str=prompt("enter str:");

// let Uppercase=(str) =>
// {
//   let arr = str.split(" ");
//   let new_arr = [];
    
//   for(let i = 0; i < arr.length; i++){
//       new_arr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
//   }
//   return new_arr.join(" ");
// }
// console.log(Uppercase(str));


// ------------ * --------------


// 6. Write a JS function that input a num and return square & qube of num in array.

// const prompt=require("prompt-sync")();
// let arr=parseInt(prompt("enter num :"));

// function Square_Qube()
// {
//     let square_arr=arr*arr;
//     let qube_arr=arr*arr*arr;
//     console.log("\nsquare of entered number is: ",square_arr);
//     console.log("\nqube of entered number is  : ",qube_arr);
// }
// Square_Qube();


// const prompt=require("prompt-sync")();
// let arr=parseInt(prompt("enter num :"));

// let Square_Qube =() =>
// {
//     let square_arr=arr*arr;
//     let qube_arr=arr*arr*arr;
//     console.log("\nsquare of entered number is: ",square_arr);
//     console.log("\nqube of entered number is  : ",qube_arr);
// }
// Square_Qube();


// ------------ * --------------

// 7. Write a js function that accepts a num as a parameter & check the num is prime or Not.

// const prompt=require("prompt-sync")();

// const number = parseInt(prompt("Enter a number: "));

// let isPrime = true;
// if (number === 1)   
// {
//     console.log("1 is neither prime nor composite number.");
// }

// else if (number > 1) {

//     for (let i = 2; i < number; i++) 
//     {
//         if (number % i == 0) 
//         {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) 
//     {
//         console.log(`${number} is a prime number`);
//     } 
//     else 
//     {
//         console.log(`${number} is a not prime number`);
//     }
// }
// else        // check if number is less than 1 
// {
//     console.log("The number is not a prime number.");
// }

// ------------ * --------------

// 8. Write a js function which will taken an array of numbers stored and find the second lowest & second greatest numbers,respectively.


const prompt=require("prompt-sync")();

const arr_num = parseInt(prompt("Enter a number: "));

function Second_Greatest_Lowest(arr_num)
{
    arr_num.sort(function(x,y)
    {
        return x-y;
    });
    var uniqa = [arr_num[0]];
    var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([arr_num]));

