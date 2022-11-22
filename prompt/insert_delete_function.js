let prompt=require("prompt-sync")();

let arr=[1,2,3,4,5];
console.log(arr);

function FirstInsert() 
{
    arr.unshift(parseInt(prompt("enter n for first insert:")));
    console.log(arr);
}

function FirstDelete()
{
    arr.shift();
    console.log(arr);
}

function LastInsert()
{
    arr.push(parseInt(prompt("enter n for last insert:")));
    console.log(arr);
}

function LastDelete()
{
    arr.pop();
    console.log(arr);
}

while(1)
{
    console.log(`1. --> For First insert
    2. --> For Last  insert
    3. --> For First delete
    4. --> For last  delete
    0. --> For Exit `);
    let  choice=parseInt(prompt("Enter your choice : "));
  switch (choice)
  {
    case 1:
        FirstInsert();
        break;
    case 2:
        LastInsert();
        break;
    case 3:
        FirstDelete();
        break;
    case 4:
        LastDelete();
        break;
    case 0:
        exit(0);
        break;
    default:
        break;
  }
}