
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

// -----------------

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


// -----------------


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

const prompt=require("prompt-sync")();

let str = prompt("enter string : ");

let StrCombinations=(str) => 
{
	let combinations = [];
	for(let i = 0 ;i < str.length; i++)
	{
		for(let j = i + 1; j <str.length + 1; j++)
		{
			combinations.push(str.slice(i , j));
		}
	}
    return combinations;
}
console.log(StrCombinations(str));








