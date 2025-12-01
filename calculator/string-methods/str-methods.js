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


