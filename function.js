// let n;
// function test(n)
// {
//     console.log(`inside function.......${n}`);
//     return [];
// }
// let n=test(10);
// console.log(typeof n);

// ------------------------------------------------------------------------------------------------------------------------------------
// 22/11/2022

// function fun_one(arg1,arg2,arg3)
// {
//     console.log(arg1,arg2,arg3);
// }
// fun_one();
// fun_one("NodeJS","ReatJS","MongoDB");
// fun_one("nodeJS","ReatJS");
// fun_one(undefined,"hello");
// fun_one(undefined,"       ","hello");
// fun_one(null,null,null);
// fun_one(null,undefined,"ReatJS");
// fun_one(null,"   ");

// -----------------

// function fun_zero()
// {
//     console.log("inside fun_zero()");
//     return "Hello!";
// }

// function fun_one()
// {
//     console.log("inside fun_one()");
//     return fun_zero();
// }

// function fun_two()
// {
//     console.log("inside fun_two()");
//     return fun_one();
// }
// console.log(fun_two());

// -------------

// function fun_one()
// {
//     return "hello!";
// }
// function fun_two()
// {
//     return fun_one;
// }
// console.log(fun_two()());

// -------------

// function fun_one(arg1,arg2,arg3)
// {
    // console.log(arg1,arg2,arg3);
    // console.log(arg1(),arg2(),arg3());
// }

// function fun_two()
// {
//     return "Hello_1..";
// }

// function fun_three()
// {
//     return "Hello_2..";
// }

// function fun_four()
// {
//     return "Hello_3..";
// }
// fun_one(fun_two,fun_three,fun_four);


// -----------------------------------------------------------------------------------------------------------------------------

// 24/11/2022

// default parameters

// function fun_one(arg1="hello_1",arg2="hello_2",arg3="hello_3")
// {
//     console.log(arg1,arg2,arg3);
// }
// fun_one();
// fun_one("hii..");
// fun_one("hii..",undefined);
// fun_one("hii..","hello...","how r u..","welcome");
// fun_one(undefined,undefined,undefined);
// fun_one("hii..",null);
// fun_one(null,null);

// -----------

// function fun_one(arg1,arg2="hello"){
//     console.log(arg1,arg2);
// }
// fun_one();
// fun_one("hi..","hii..2");
// fun_one(undefined,undefined);
// fun_one(null,null);


// rest parameter

// function fun_one(arg1,...arg2){
//     console.log(arg1);
//     console.log(arg2);
// }
// fun_one();
// fun_one("hello_1")
// fun_one("hello_1","hello_2")
// fun_one(undefined,undefined);
// fun_one(null,null);
