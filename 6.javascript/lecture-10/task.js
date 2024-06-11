/*************************array length method****************************/
//1.
/*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
let arry2 = arry.join("+")
console.log(arry2);
console.log(arry2.length);
console.log(typeof(arry2));*/

//2.
/*let arry = ["vishva" , "srushti" , "jasmin" , "urmila", "ashiti" , "khushi" , "khushali"];
let arry2 = arry.join(" + ")
console.log(arry2);
console.log(arry2.length);
console.log(typeof(arry2));*/

//3.
/*let arry = ["student-1" , "student-2" , "student-3" , "student-4", "student-5" , "student-6" , "student-7"];
let arry2 = arry.join(" + ")
console.log(arry2);
console.log(arry2.length);
console.log(typeof(arry2));*/

/************************array popping method****************************/
//1.
/*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"]; 
document.getElementById("demo").innerHTML = arry;
document.getElementById("demo-1").innerHTML = arry.pop();
console.log(arry);
console.log(arry.length);*/

//2.
/*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"]; 
document.getElementById("demo").innerHTML = arry;
document.getElementById("demo-1").innerHTML = arry.pop();
document.getElementById("demo-2").innerHTML = arry.pop();
console.log(arry);
console.log(arry.length);*/

//3.
/*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"]; 
document.getElementById("demo").innerHTML = arry;
document.getElementById("demo-1").innerHTML = arry.pop();
document.getElementById("demo-2").innerHTML = arry.pop();
document.getElementById("demo-3").innerHTML = arry.pop();
console.log(arry);
console.log(arry.length);*/

/*************************array push method******************************/
//1.
/*const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
document.getElementById("demo").innerHTML = arry;
arry.push("brahma");
document.getElementById("demo-1").innerHTML = arry.push();
console.log(arry);*/

//2.
/*const arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
document.getElementById("demo").innerHTML = arry.push("kartikey");
document.getElementById("demo-1").innerHTML = arry.length;
console.log(arry);*/

//3.
/*const arry = ["student-1" , "student-2" , "student-3" , "student-4", "student-5" , "student-6" , "student-7"];
document.getElementById("demo").innerHTML = arry.push("student-8");
document.getElementById("demo-1").innerHTML = arry.length;
console.log(arry);*/

/*************************array shift method*****************************/
//1.
/*let array = ["krishna" , "radha" , "ganesh" , "riddhi" , "sidhhi" , "shiv" , "parvati"];
let array2 = array.shift();
let array3 = array.shift();
console.log(array2);
console.log(array3);*/

//2.
/*let array = ["student-1" , "student-2" , "student-3" , "student-4", "student-5" , "student-6" , "student-7"];
let array2 = array.shift();
let array3 = array.shift();
console.log(array2);
console.log(array3);*/

//3.
/*const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
console.log(arry);
document.getElementById("demo").innerHTML = arry.shift();
document.getElementById("demo-1").innerHTML = arry;*/

/*************************array unshift method***************************/
//1.
/*const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
document.getElementById("demo").innerHTML = arry.unshift("balram");
document.getElementById("demo-1").innerHTML = arry;*/

//2.
/*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
arry.unshift("kartikey");
console.log(arry);*/

//3.
/*let arry = ["student-1" , "student-2" , "student-3" , "student-4", "student-5" , "student-6" , "student-7"];
arry.unshift("student-8");
console.log(arry);*/

/***********************changing element method**************************/
//1.
/*const  arry = ["krishna" , "radha" , "ganesh" ,  "riddhi", "sidhhi" , "shiv" , "parvati"];
console.log(arry);
arry[20] = "balram";    
console.log(arry);*/

//2.
/*const  arry = ["student-1" , "student-2" , "student-3" , "student-4", "student-5" , "student-6" , "student-7"];
console.log(arry);
arry[4] = "student-9";   
console.log(arry);*/

//3.
/*const  arry = ["html" , "css" , "javascript" , "bootstrap", "sass" , "tailwind" , "react"];
console.log(arry);
arry[4] = "paython";   
console.log(arry)*/

/*************************javascript add element*************************/
//1.
/*const  arry = ["krishna" , "radha" , "ganesh" ,  "riddhi", "sidhhi" , "shiv" , "parvati"];
document.getElementById("demo").innerHTML = arry;
arry[arry.length] = "Ram";
document.getElementById("demo-1").innerHTML = arry;*/

//2.
/*const  arry = ["student-1" , "student-2" , "student-3" , "student-4", "student-5" , "student-6" , "student-7"];
document.getElementById("demo").innerHTML = arry;
arry[arry.length] = "student-8";
document.getElementById("demo-1").innerHTML = arry;*/

//3.
/*const  arry = ["html" , "css" , "javascript" , "bootstrap", "sass" , "tailwind" , "react"];
document.getElementById("demo").innerHTML = arry;
arry[arry.length] = "paython";
document.getElementById("demo-1").innerHTML = arry;*/

/*****************javascript array delete method*************************/
//1.
/*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
console.log(arry);
console.log(arry.length);
delete arry[4]
console.log(arry);
console.log(arry.length);*/

//2.
/*let arry = ["student-1" , "student-2" , "student-3" , "student-4", "student-5" , "student-6" , "student-7"];
console.log(arry);
console.log(arry.length);
delete arry[2]
console.log(arry);
console.log(arry.length);*/

//3.
/*let arry = ["html" , "css" , "javascript" , "bootstrap", "sass" , "tailwind" , "react"];
console.log(arry);
console.log(arry.length);
delete arry[4]
console.log(arry);
console.log(arry.length);*/

/****************javascript array merg(concateing) method****************/
//1.
/*let array1 = ["student-1" , "student-2" , "student-3"];
let array2 = ["student-4" , "student-5"];
let array3 = ["student-6"];

let array4 = array1.concat(array2 , array3)
console.log(array4);*/

//2.
/*let array1 = ["vishva" , "mansi" , "nandani"];
let array2 = ["jadi" , "priyanka"];
let array3 = ["ashiti"];

let array4 = array1.concat(array2 , array3)
console.log(array4);*/

//3.
/*let array1 = ["krishna" , "radha" , "balram"];
let array2 = ["shiv" , "parvati"];
let array3 = ["ganesh"];

let array4 = array1.concat(array2 , array3)
console.log(array4);*/

/**********************javascript splice method**************************/
//1.
/*const arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
console.log(arry);
let arry2 =arry.splice(2 , 4);
console.log(arry2);*/

//2.
/*const arry = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
document.getElementById("demo").innerHTML = "Original Array:<br>" + arry;
let removed = arry.splice(2 , 2 , "Ram");
document.getElementById("demo-1").innerHTML = "New Array:<br>" + arry;
document.getElementById("demo-2").innerHTML = "Removed Items:<br>" + arry;*/

//3.
/*const arry = ["html" , "css" , "javascript" , "bootstrap", "sass" , "tailwind" , "react"];
console.log(arry);
let arry2 =arry.splice(2 , 4);
console.log(arry2);*/

/**********************javascript slice method***************************/
//1.
/*const arry = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
const newremove = arry.slice(1 , 3);
document.getElementById("demo").innerHTML = arry + "<br><br>" + newremove;
console.log(arry);*/

//2.
/*let arry1 = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
console.log(arry1);
let arry2 = arry1.slice(0 , 3)
console.log(arry2);*/

//3.
/*let arry1 = ["html" , "css" , "javascript" , "bootstrap", "sass" , "tailwind" , "react"];
console.log(arry1);
let arry2 = arry1.slice(0 , 3)
console.log(arry2);*/

/******************javascript array is array method**********************/
//1.
/*let book = ["math" , "chemistry" , "physics" , "bio"];
let books = "string";
console.log(Array.isArray(books));*/

//2.
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);
console.log(result);*/

//3.
/*let student = ["student-1" , "student-2" , "student-3" , "student-4"];
let students = "student-5";
console.log(Array.isArray(student));*/

/******************javascript sorting array method***********************/
//1.
/*let book = ["math" , "chemistry" , "physics" , "bio"];
let books = book.sort();
console.log(books);*/

//2.
/*let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.sort();
console.log(fruit);*/

//3.
/*let arry1 = ["html" , "css" , "javascript" , "bootstrap", "sass" , "tailwind" , "react"];
let arry2 = arry1.sort();
console.log(arry2);*/

/*******************javascript array reverse method**********************/
//1.
/*let book = ["math" , "chemistry" , "physics" , "bio"];
console.log(book);
let bookss = book.reverse();
console.log(bookss);*/

//2.
/*let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.reverse();
console.log(fruit);*/

//3.
/*let students = ["student-1" , "student-2" , "student-3" , "student-4"];
let student = students.reverse();
console.log(student);*/

/********************javascript number sort method***********************/
//1.
/*const number1 = [40 , 12 , 15 , 81 , 150 , 200];
let number = number1.sort()
console.log(number);*/


//2.
/*const number1 = [40 , 12 , 15 , 81 , 150 , 200];
const number2 = number1.sort(function(a , b){return a- b});
console.log(number2);*/

//3.
/*const number1 = [400 , 12 , 500 , 800 , 150 , 200];
const number2 = number1.sort(function(a , b){return a- b});
console.log(number2);*/

/*********************javascript array map method************************/
//1.
/*const number1 = [56 , 798 , 345 , 35];
const number2 = number1.map(myFunction);
const number3 = number2.sort((a, b) => a - b)
console.log(number2);
function myFunction(value){
    return value * 2;
}*/

//2.
/*const number1 = [50 , 78 , 45 , 35];
const number2 = number1.map(myFunction);
const number3 = number2.sort((a, b) => a - b)
console.log(number2);
function myFunction(value){
    return value * 2;
}*/

//3.
/*const number1 = [565 , 798 , 345 , 335];
const number2 = number1.map(myFunction);
const number3 = number2.sort((a, b) => a - b)
console.log(number2);
function myFunction(value){
    return value * 2;
}*/

/*******************javascript array flatmap method**********************/
//1.
/*let flatmap = [1 , 2 , 3 , 4]
let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1,1] : 2)
console.log(flatmap1);*/

//2.
/*let flatmap = [1 , 2 , 2 , 4]
let flatmap1 = flatmap.flatMap((num) => num === 2 ? [1,1] : 2)
console.log(flatmap1);*/

//3.
/*let flatmap = [1 , 2 , 1 , 1]
let flatmap1 = flatmap.flatMap((num) => num === 1 ? [1,1] : 2)
console.log(flatmap1);*/

/*********************javascript array flat method***********************/
//1.
/*let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ,[66 , 77]]]]
let flatmap2  = flatarray.flat(3)
console.log(flatmap2);*/

//2.
/*let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ]]]
let flatmap2  = flatarray.flat(1)
console.log(flatmap2);*/

//3.
/*let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ,[66 , 77]]]]
let flatmap2  = flatarray.flat(2)
console.log(flatmap2);*/

/*******************javascript array filter method***********************/
//1.
/*const number1 = [45 , 17 , 2 , 46 , 78 , 15];
const number2 = number1.filter(myFunction);

function myFunction(age){
    return age <= 100;
}
console.log(number2);*/

//2.
/*const number1 = [45 , 17 , 2 , 46 , 78 , 15];
const number2 = number1.filter(myFunction);

function myFunction(age){
    return age <= 50;
}
console.log(number2);*/

//3.
/*const number1 = [45 , 17 , 2 , 46 , 78 , 15];
const number2 = number1.filter(myFunction);

function myFunction(age){
    return age <= 25;
}
console.log(number2);*/

/***********************javascript array fill method*********************/
//1.
/*const arry = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
const newfill = arry.fill("vishva");
console.log(newfill);*/

//2.
/*const arry = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
const newfill = arry.fill("1 , 3");
console.log(newfill);*/

//3.
/*const arry = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
const newfill = arry.fill("students");
console.log(newfill);*/

/******************javascript array copywithin method********************/
//1.
/*const arry = ["A" , "B" , "C" , "D" , "E" , "F"];
const newcopy = arry.copyWithin(0 , 3 , 4);
console.log(newcopy);*/

//2.
/*const arry = [1 , 2 , 3 , 4 , 5 , 6 , 7];
const newcopy = arry.copyWithin(0 , 3 , 4);
console.log(newcopy);*/

//3.
/*const arry = [10 , 9 , 8 , 7 , 6 , 5 , 3];
const newcopy = arry.copyWithin(0 , 3 , 7);
console.log(newcopy);*/

/*****************javascript array valueof methhod***********************/
//1.
/*const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango" , "watermelon" , "kiwi"  , "Olive"];
const newfruits = fruits.valueOf();
console.log(newfruits);*/

//2.
/*const students = ["student-1" , "student-2" , "student-3" , "student-4"];
const newstudents = students.valueOf();
console.log(newstudents);*/

//3.
/*const students = ["vishva" , "srushti" , "jasmin" , "ashiti"];
const newstudents = students.valueOf();
console.log(newstudents);*/