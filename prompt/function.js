let prompt=require("prompt-sync")();
let arr=[2,3,4,5];
console.log(arr);

let n=parseInt(prompt("enter n:"));
function FirstInsert(n) 
{
    arr.unshift(n);
    console.log(arr);
}
FirstInsert(n);

let n2=parseInt(prompt("enter n:"));
function FirstDelete(n2)
{
    arr.shift(n2);
    console.log(arr);
}
FirstDelete(n2);

let n3=parseInt(prompt("enter n:"));
function LastInsert(n3)
{
    arr.push(n3);
    console.log(arr);
}
LastInsert(n3);

let n4=parseInt(prompt("enter n:"));
function LastDelete(n4)
{
    arr.pop(n4);
    console.log(arr);
}
LastDelete(n4);