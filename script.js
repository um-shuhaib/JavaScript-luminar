// console.log("external script");



// data types in js 

// string , number, booleon, NaN, object (array like list and keyword like dict), undefined

// s= "hello"
// s1= 'hai'
// s2= `hai`

// console.log(typeof s2)

// keyword - let - localStorage, var - globalThis, const - local 

// let x = 10
// {
//     let x = 5
//     console.log("inner:",x);
// }
// console.log("outside:", x);
// out 
// inner: 5
// outside: 10



// var x = 10
// {
//     var x = 5
//     console.log("inner:",x);
// }
// console.log("outside:", x);
// out 
// inner: 5
// outside: 5



// const pi = 3.14
// {
//     const pi = 5
//     console.log("inner:",pi);
// }
// console.log("outside:", pi);
// out 
// inner: 5
// outside: 3.14



// let cant redefine the variable 



// let y    can assign later
// y = 4

// var x    can assign later
// x =  5

// const pi = 3.14 need to assing when initialise


// number 

// x = 10
// console.log(typeof x);
// out 
// mumber


// x = 10.5
// console.log(typeof x);
// out 
// number



// booleon 


// x = true   //small letter 
// console.log(typeof x);
// out 
// booleon 

// let x
// console.log(typeof x);
// out 
// undefined

// a=5;b=7


// NaN 


// console.log("hello"/2);
// out 
// NaN


// console.log("2"+2); 22
// console.log(2+2+"4"); 44


// object - keyword and array


// arr1 = [1,2,33,4,2] array
// console.log(arr1);
// console.log(typeof arr1); object


// obj = {                    
//     name:"shuahib",
//     place:"kkd"
// }
// console.log(obj);
// console.log(typeof obj);    object



// Operators 

// arithmetic - +, -, *, /, **, %, ++, --

// let x = 10
// console.log(x++); post increment - first return the x then increment
// out 
// 10

// let y = 20
// console.log(++y); pre increment - first uncrement then return 
// out 
// 21



// x = 10
// y = x++
// console.log(x); 11
// console.log(y); 10


// x = 10
// y = ++x
// console.log(x); 11
// console.log(y); 11


// assignment operators - =,+=

// relational operators -m <,>,=<, !=, == (checks value), === (checks data type and data)

// a = 10
// b = "10"

// a==b - true
// a===b - false


// logical operators - &&, ||, !

// console.log(!(true)); - false

// bitwise oprator - &, | 
// console.log(1&2); -0




// Ternery operator ?:

// num =12
// if(num<18){
//     console.log("not eligible");
    
// }
// else{
//     console.log("eligible");
    
// }

// so simple 

// console.log(num<18?"not eligible":"eligible");  - after ? true then : else

// a = parseInt(prompt("enter the 1st number"))
// b = parseInt(prompt("enter the 1st number"))         //it will only see in html, error will shows the console
// c = parseInt(prompt("enter the 1st number"))

// if (a>b && a>c){
//     // console.log(`${a} is large`);
//     alert(`${a} is large`);
    
// }else if(b>c){
//     // console.log(`${b} is big`);
//     alert(`${b} is big`);
    
// }else{
//     // console.log(c," is big");
//     alert(c," is big");
    
// }

// parseInt() - consider only int value - igonore the point values
// parseFloat() - consider float


// switch case 

// day =15
// switch(day){
//     case 1:
//         console.log("day One");
//         break;
//     case 2:
//         console.log("day One");
//         break;
//     default:
//         console.log("else");   
//         }




// looping statements - for, do while, while 

                                                        // for 
// for (let i=1;i<11;i++){
//     console.log(i);
    
// }

// out 
// 1,2,3,4,5,6...,10    



// for/in - index
// for/of - data


// s= "welcome"
// console.log(s.length);   //7

// for(let i in s){
//     console.log(i);   //in - index no. will print
// }


// s= "welcome"
// for(let i of s){
//     console.log(i);     //of - ch will print
// }



// largest 

// arr =[12,555,14,79,55]
// largest = 0
// for (let i of arr){
//     if (largest < i){
//         largest=i
//     }
// }
// console.log(largest);



