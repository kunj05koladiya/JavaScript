let arr=[2,3,4,5];
console.log(arr);

function FirstInsert(a) 
{
    arr.unshift(a);
    console.log(arr);
}
FirstInsert(1);

function FirstDelete(a)
{
    arr.shift(a);
    console.log(arr);
}
FirstDelete();

function LastInsert(a)
{
    arr.push(a);
    console.log(arr);
}
LastInsert(6);

function LastDelete(a)
{
    arr.pop(a);
    console.log(arr);
}
LastDelete();

