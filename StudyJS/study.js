let age=20;
let year=2024;

console.log(age, year);

const points= 15;
var point =25;

console.log(points);
console.log(point);

//strings
console.log("Hello World");
let email = "oman.k@gmail.com"
console.log(email);

//string concatenation
let firstName="Brandon"
let surname="Oman"
let fullName = firstName + ' ' +surname;
console.log(fullName)

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

//string methods(A method is function related to a certain function that performs a certain task)
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);
// let num = email.lastIndexOf('o')
// console.log(num);
// let newNum = email.slice(0-9);
// console.log(newNum);
// let results = email.substr(1-5)
// console.log(results);
// let newResult = email.replace('man', 'woman')
// console.log(newResult);

// //math operators
// let radius =10;
// const pi=3.14;
// let answer = pi* radius**2;
// console.log(radius, pi);
// console.log(answer);
// let post=5;
// post+=2;
// post-=2;
//animals*=2;
//animals**=2;

// console.log(post);
// sentence = "There are "+ post+" posts on your blog ";
// console.log(sentence);

//template strings

// const title = "Ananse in the Land of Idiots";
// const author= "Ama Atta Aidoo";
// const copies = 1500;

// //concatenation way
// let outpu ="The blog called " +title+" by "+author+" has "+copies+" copies sold this month";
// console.log(outpu);

// //template string way
// let output = `The book called ${title} by ${author} has over ${copies} copies sold this month`
// console.log(output);

// //creating html templates
// let html= `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This book has ${copies} copies</span>
// `;
//Arrays
// let ninjas =['shaun', 'ryu', 'chun-li']
// console.log(ninjas);

// ninjas[1]='kelly';
// console.log(ninjas);

// let ages = [20,25,30,35];
// console.log(ages[0]);

// let random = ['shuan',ages,40 ,ninjas, 45 ];
// console.log(random[3]);

// let cry = ['baby', 'toddler','girls', '2yrs', '1yrs','5months'];
// console.log(cry);

// console.log(cry.length);
// array methods
//let answers = cry.indexOf('5months');
// let answersB = cry.concat('speak',8);
// console.log(answersB);

// let answers = cry.push('9yrs');
// console.log(answers);
// let answersT = cry.pop()
// console.log(cry);

// let yourAge;
// yourAge=null;
// console.log(yourAge, yourAge + 3, `the age is ${yourAge}`);

// //boolean & comparison
// console.log(true,false, "true", 'false');

//methods can return booleans

// let mail = 'omankmt@gmail.com';
// let resultss= mail.includes('m');
// console.log(resultss);

// //comparison operator

// let object = 25;

// // console.log(object == 25);
// // console.log(object!=30);
// // console.log(object >=28);

// let name = 'shaun';

// // console.log(name=='shaun');
// // console.log(name=='Shaun');
// // console.log(name > 'Crystal');
// // console.log(name <'shaun');

// console.log(name ==='shaun');
// console.log(name ==='Shaun');
// console.log(name !== 'Crystal');
// console.log(name !=='shaun');

// //type conversion
// let score ='100';
// let section = 'Red'
// score = Number(score)
// console.log(score + 1);
// console.log(typeof score);

// //let ourAnswer = Number(section);
// let ourAnswer=Boolean('100')
// console.log(ourAnswer, typeof section);


// //for loops

// // for(let i=0; i < 5;i++){
// //     console.log("In loop:", i)
// // }
// // console.log("loop is finished.");

// const names=['lawn', 'ken', 'luigi', 'kelvin'];
// for(let i= 0; i< names.length;i++){
//     console.log("List of array items:", names[i])
// }
// console.log("Loop is finished.");

//while loop
// let i =0;
// while(i<5){
//     console.log("in loop; ", i)
//     i++;
// };
// while(i<5){
//     let box=names.length;
//     console.log("in loop; ", names[i])
//     i++;
// };
// do while loop
// let i=0;
// do {
//     let box = names.length;
//     console.log('Worked', names[i])
//     //print(names[i])
//     i++;
// }
// while(i<4);

// if statements

// var agees = 20;

// if (agees > 23){
//     console.log('You are below 20 years')
// }
// const password = 'passalieu'

// if (password.length >= 8){
//     console.log("Good password")
// }else if (password.length >=12 ){
//     console.log("Strong password")
// }
// else{
//     console.log("Weak password.")
//}
//logical operators OR|| and AND $$ 
// const password = 'Password@'

// if ( password.length >= 12 && password.includes('@')){
//     console.log('Strong Password')
// }else if(password.length >=8 && /\d/.test(password)){
//     console.log('Fairly good')
// }else {
//     console.log('Retry')
// }


//logical Not(!)
 let que = true

 if(!que){
    console.log("Are you in the que")
 }
 console.log(que)
 console.log(false)


// function fibonacci(n) {
//     // write your code below
//     let arr = [0,1]
//     for( i=2; i<=(n); i++){
//         arr[i] = arr[i-1] + arr[i-2]
//     }
//     console.log(arr[n])
//     console.log('adam')
// }
// fibonacci(6);
// [0,1,1,2,3,5]

console.log(!true);   // Output: false
console.log(!false);  // Output: true

let x = 10;
console.log(!(x > 5)); // Output: false (because x > 5 is true, so !(x > 5) is false)

let userLogin = false
if (!userLogin){
    console.log('You can login now')
}

let isEmpty = true;
if (!isEmpty) {
  console.log("The container is not empty."); // This will not execute
}
//break and continue

let a = 5
let b = "5"
let c = 5
     
const comp1 = a==b
const comp2 = a != c
const comp3 = a == c
const comp4 = a === c
console.log(comp1)
console.log(comp2)
// console.log(comp3)
// console.log(comp4)
const wind = parseInt(4)
let windStatus = "unset"
// Write your code below
if (wind < 8){
    windStatus = console.log("Calm")
}else if (wind >=8 && wind <= 31){
    windStatus = console.log("Breeze")
}else if(wind >=32 && wind <= 63){
    windStatus = console.log("Gale")
}else{
    windStatus = console.log("Storm")
}

console.log("1" === 1)


// let n1 = 4
// let n2 = 2.4
// let n3 = parseFloat(n1 + n2)
// console.log(n3)

// const ages = 24.5
// let myAge = ages
// myAge = parseFloat(myAge)
// console.log(`${120 - myAge} years till 120 `)


const scoress = [50,20,0,70,75,80,90,100];
let sumNubers = 0;
for(let i = 1; i <=100; i++){
    
}
let number = 20;
let powerOfTwo = 1;
while (powerOfTwo <= number) {
     powerOfTwo *= 2;
}
console.log(powerOfTwo);  // Output: 32


// let powerofNumber = 1;

// while (powerofNumber){
//     powerofNumber *=2;
// }
// console.log(powerofNumber)
function findFirstNumberLessThan3_5(input) {
     let currentNumber = input;
    
      while (currentNumber >= 3.5) {
        currentNumber /= 2;
      }
    
      return currentNumber;
    }
    
    // Example usage
    let inputNumber = 15;
    let result = findFirstNumberLessThan3_5(inputNumber);
    console.log(result); // Output: 3.125