// 19/11/2022
//   Array

// let arr=[10,11,12,13,14,15,16,17];                                
// console.log(typeof arr);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);
// console.log(arr["10"]);
// console.log(arr[3.1]);

// let arr=["ten",11,"twelve",13,14,"15",16,"17"];                                
// console.log(arr);
// console.log(arr.length);
// arr.length = 10;
// console.log(arr);
// console.log(arr.length);
// arr[9]=undefined;
// arr[5]=undefined;
// arr[5]=20;
// arr[3.1]=3.1;
// arr["A"]="a";
// console.log(arr);
// console.log(arr.length);
// console.log(arr[9]);
// arr.length=100;
// console.log(arr);
// arr[50]=50;
// console.log(arr.length);
// arr['50']="fifty";
// console.log(arr.length);


// let arr1={"A":"a","B":"b"}
// // let arr11=["A":"a","B":"b]
// console.log(arr1);

// let arr_new=[10,11,12,13,14,15,16,17];
// console.log(arr_new[-2])
// arr_new.push(18);
// a=[1,2,3];           // merge array
// b=[4,5,6];
// a.push(b);
// console.log(a);
// arr_new.pop();
// arr_new.pop();
// arr_new.pop();
// console.log(arr_new)
// arr_new.shift();
// arr_new.shift();
// arr_new.shift();
// arr_new.unshift(9);
// console.log(arr_new)
// arr_new.splice(5);
// arr_new.splice(5,1);
// arr_new.splice(-4,2);
// arr_new.splice(-4,-2);
// arr_new.splice(4,-2);
// arr_new.splice(-3);
// arr_new.splice(0,2,30,31);
// arr_new.splice(0,2,30,31,32,33);
// arr_new.splice(0,arr_new.length,30,31,32,33);
// arr_new.splice(0,0,30,31,32,33);
// arr_new.splice(5,30,31,32,33);
// arr_new.splice(0,5,30,31,32,33);
// arr_new.splice(5,0,30,31,32,33);
// console.log(arr_new)


// console.log(arr_new.splice(2));

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];                                
// console.log(arr_new.splice(3));
// console.log(arr_new.splice(3,3));
// console.log(arr_new.splice(3,100,21,22,23));
// console.log(arr_new);


// -------------------------------------------------------------------------------------------------------------
//  21/11/2022

// at
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20]
// console.log(arr_new.at(6));
// console.log(arr_new.at(10));
// console.log(arr_new.at(-1));
// console.log(arr_new.at(-7));


// slice
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20]

// arr_new.slice(2);
// console.log(arr_new);

// console.log(arr_new.slice(3));
// console.log(arr_new.slice(2,7));
// console.log(arr_new.slice(-3,2));    // []
// console.log(arr_new.slice(-3,-5));   // []
// console.log(arr_new.slice(-5,-3));

// let arr_new2=arr_new.slice();
// console.log(arr_new2);


// Join
// console.log(arr_new.join());
// console.log(arr_new.join(""));
// console.log(arr_new.join("   "));
// console.log(arr_new.join("-"));
// console.log(arr_new.join("*"));
// console.log(arr_new.join(" ~ "));
// console.log(typeof arr_new.join());



// -------------------------------------------------------------------------------------------------------------

// 24/11/2022

// let arr1=[10,20,30];
// let arr2;

// arr2=arr1;
// console.log(arr2);
// console.log(arr1==arr2);
// console.log(arr1===arr2);   // copy array

// let arr1=[10,20,30];
// let arr2;

// arr2=arr1.slice();
// console.log(arr2);
// console.log(arr1==arr2);    // copy array using slice

// let arr1=[10,20,30];
// let arr2=[1,2,3];
// let copy_array;

// copy_array=[...arr1,arr2];       // "spread operator" --> "..."  --> 3 dot
// copy_array=[...arr1,...arr2];    
// copy_array=[arr1,...arr2];
// copy_array=[arr1,arr2];

// copy_array=arr1;
// copy_array=arr1.slice();
// arr1.push(40);
// copy_array.push(50);

// console.log(arr1);
// console.log(copy_array);
// console.log(arr1==copy_array);


// -----------------------------------------------------------------------------

// 6/12/2022 

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled)


// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// console.log(
//     [1, 2, 3, 4, 5].filter((element) => {
//         return element >= 3;
//     })
// ); 
//[ 3, 4, 5 ]

// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens);


// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];
  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   console.log( studentGrades); 



// console.log(
//     [1, 2, 3, 4, 5].map((element, index) => {
//         return element * 100;
//     }).filter((element, index) => {
//         return element >= 300;
//     })
// );

console.log(
    [1, 2, 3, 4, 5].reduce((firstElement, nextElement) => {
        console.log(firstElement +" - " + nextElement)
        return firstElement + nextElement;
    },10)
);