                                                        
                                                        'string methods'

s = "heLlo world"
num = 123

console.log(s.length);
s2 = num.toString()
console.log(typeof s2);

console.log(s.toUpperCase());
console.log(s.toLowerCase());

console.log(s[0]);
console.log(s.charAt(0));
console.log(s.at(0));

console.log(s.trim());
console.log(s.trimStart());
console.log(s.trimEnd());

console.log(s.split(" ")); 

console.log(s.slice(0,5));     //0 to 4
console.log(s.substring(0,5));     //0 to 4
console.log(s.substr(0,5));     //0 to 4

console.log(s.padStart(10,"*"));

// date 

let today = new Date
y = today.getFullYear()
m = (today.getMonth()+1).toString().padStart(2,0)
d = today.getDate().toString().padStart(2,0)


fullDate = `${y}-${m}-${d}`
console.log(fullDate);



console.log(s.replace("l","*"));       
//  // case insensitive , g for search whole char
console.log(s.replaceAll(/l/ig,"*"));         // i nte koodey g venam - global ayaley i work aakuoo  
// console.log(s.replaceAll(/l/g,"*"));  

// matchALl() - //check patterns
// match



                                                            'Array Methods'


arr1 = [100,200,300,400,500]
console.log(arr1[0]);
console.log(arr1);
console.log(arr1.pop()); // remove from end
console.log(arr1);
console.log(arr1.shift()); // remove from start
console.log(arr1);
console.log(arr1.push(600,700)); // add multi at the end  - returns the length
console.log(arr1);
console.log(arr1.unshift(1,2,3));  // add multiple at the start - returns the length
console.log(arr1);

// delete arr1[0] // dont use
// console.log(arr1);  // [ <1 empty item>, 2, 3, 200, 300, 400, 600, 700 ]

console.log(arr1.slice(2,4));  //[ 3, 200 ]
console.log(arr1);

arr1.splice(2,0,1000); //shift and remove - (replacing pos,delete count ,replacing value) - if delete count 0 then no removel, if 1 then after the replace pos one element will remove.
console.log(arr1);
arr1.splice(2,1,1000)
console.log(arr1);


console.log(arr1.length);
console.log(arr1.at(0));

console.log("------------------------------------------------------------------------------");



                                                  'arrow function - anonymous finction' 

// (arguments) => (exp)
let f = (x,y) => (x+y)         // (exp) for single exp - it auto return the result
console.log(f(1,2));    // 3


 var m = (x,y) => {
    z = x+y;
    return z+10
 }

 console.log(m(2,3));  // 15
 
                                                        // synchromous and asynchronous 
// asynchronous

console.log("fisrt");

setTimeout(
    () => {
        console.log("timer");
        
    },2000
)

console.log("last");


// promises - always a respons - fullfilled, rejected, pending