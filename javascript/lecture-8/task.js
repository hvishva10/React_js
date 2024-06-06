/*---------------------javascript string method-------------------------*/
/**********************string length method*****************************/
//1.
/*let string1 = "Hy, My name is vishva."
console.log(string1.length);*/

//2.
/*let string2 = "Hello world"
console.log(string2.length);*/

//3.
/*let string3 = "Welcome to my world."
console.log(string3.length);*/

/***********************String charAt method*****************************/
//1.
/*let String1 = "Hy, My name is vishva."
let string2 = String1.charAt(7)
console.log(string2);*/

//2.
/*let String1 = "Hello world"
let string2 = String1.charAt(3)
console.log(string2);*/

//3.
/*let String1 = "Hello world"
let string2 = String1.charAt(5)
console.log(string2);*/

/*************************string slice method****************************/
//1.
/*let string1 = "Hy, My name is vishva."
let string2 = string1.slice(6)
console.log(string2);*/

//2.
/*let string1 = "Hy, My name is vishva."
let string2 = string1.slice(6,10)
console.log(string2);*/

//3.
/*let string1 = "Hy, My name is vishva."
let string2 = string1.slice(-6)
console.log(string2);*/

/**********************string substring method**************************/
//1.
/*let string1 = "Hy, My name is vishva."
let string2 = string1.substring(10)
console.log(string2);*/

//2.
/*let string1 = "Hy, My name is vishva."
let string2 = string1.substring(-10)
console.log(string2);*/

//3.
/*let string1 = "Hy, My name is vishva."
let string2 = string1.substring(5)
console.log(string2);*/

/************************string replace method***************************/
//1.
/*let string1 = "Hy, My name is vishva."
let string2 = string1.replace("name" , "nickname")
console.log(string2);*/

//2.
/*let string1 = "Hy, My name is vishva."
let string2 = string1.replace("NAME" , "nickname")
console.log(string2);*/

//3.
/*let string1 = "Welcome to my world."
let string2 = string1.replace("name" , "nickname")
console.log(string2);*/

/************************string replaceall method************************/
//1.
/*let String1 = "Hy, My name is vishva."
let String2  = String1.replaceAll(/NAME/g , "hello")
console.log(String28);*/

//2.
/*let String1 = "Hy, My name is vishva."
let String2  = String1.replaceAll(/name/g , "hello")
console.log(String28);*/

//3.
/*let String1 = "Hy, My name is vishva."
let String2  = String1.replaceAll(/name/i , "hello")
console.log(String28);         //error*/

/***********************string touppercase method************************/
//1.
/*let string1 = "Hy My Name Is Vishva"
let string2 = string1.toUpperCase();
console.log(string2);*/

//2.
/*let string1 = "hellow world"
let string2 = string1.toUpperCase();
console.log(string2);*/

//3.
/*let string1 = "welcome to my world"
let string2 = string1.toUpperCase();
console.log(string2);*/

/***********************string toLowerCase method************************/
//1.
/*let string1 = "Hy My Name Is Vishva"
let string2 = string1.toLowerCase();
console.log(string2);*/

//2.
/*let string1 = "HELLO WORLD"
let string2 = string1.toLowerCase();
console.log(string2);*/

//3.
/*let string1 = "WELCOME TO MY WORLD"
let string2 = string1.toLowerCase();
console.log(string2);*/

/*************************string concat method***************************/
//1.
/*let string1 = "hy,"
let string2 = "my name is"
let string3 = "vishva"
let string4 = string1.concat("" + string2 + "" + string3)
console.log(string4);*/

//2.
/*let string1 = "vishva"
let string2 = "my name is"
let string3 = "hy,"
let string4 = string3.concat(" " + string2 + " " + string1)
console.log(string4);*/

//3.
/*let string1 = "vishva"
let string2 = "hy,"
let string3 = "my name is"
let string4 = string2.concat(" " + string3 + " " + string1)
console.log(string4);*/

/*************************string trim method*****************************/
//1.
/*let String1 = "    Hy My Name Is Vishva     "
console.log(String1.length);
String2 = String1.trim()
console.log(String2);
console.log(String2.length);*/

//2.
/*let String1 = "           My Name Is Vishva     "
console.log(String1.length);
String2 = String1.trim()
console.log(String2);
console.log(String2.length);*/

//3.
/*let String1 = "            Vishva     "
console.log(String1.length);
String2 = String1.trim()
console.log(String2);
console.log(String2.length);*/

/***********************string trimstart method**************************/
//1.
/*let String1 = "    Hy My Name Is Vishva     "
console.log(String1.length);
String2 = String1.trimStart()
console.log(String2);
console.log(String2.length);*/

//2.
/*let String1 = "           My Name Is Vishva     "
console.log(String1.length);
String2 = String1.trimStart()
console.log(String2);
console.log(String2.length);*/

//3.
/*let String1 = "            Vishva     "
console.log(String1.length);
String2 = String1.trimStart()
console.log(String2);
console.log(String2.length);*/

/************************string trimend method***************************/
//1.
/*let String1 = "    Hy My Name Is Vishva     "
console.log(String1.length);
String2 = String1.trimEnd()
console.log(String2);
console.log(String2.length);*/

//2.
/*let String1 = "           My Name Is Vishva     "
console.log(String1.length);
String2 = String1.trimEnd()
console.log(String2);
console.log(String2.length);*/

//3
/*let String1 = "            Vishva     "
console.log(String1.length);
String2 = String1.trimEnd()
console.log(String2);
console.log(String2.length);*/

/*************************string padstart method*************************/
//1.
/*let string1 = "jay shree krishna."
console.log(string1.length);
string2 = string1.padStart(30 , "1")
console.log(string2);
console.log(string2.length);*/

//2.
/*let string1 = "jay shree krishna."
console.log(string1.length);
string2 = string1.padStart(20 , "hy")
console.log(string2);
console.log(string2.length);*/

//3.
/*let string1 = "jay shree krishna."
console.log(string1.length);
string2 = string1.padStart(40 , "*")
console.log(string2);
console.log(string2.length);*/

/**********************string padend method******************************/
//1.
/*let string1 = "jay shree krishna."
console.log(string1.length);
string2 = string1.padEnd(30 , "1")
console.log(string2);
console.log(string2.length);*/

//2.
/*let string1 = "jay shree krishna."
console.log(string1.length);
string2 = string1.padEnd(20 , "hy")
console.log(string2);
console.log(string2.length);*/

//3.
/*let string1 = "jay shree krishna."
console.log(string1.length);
string2 = string1.padEnd(40 , "*")
console.log(string2);
console.log(string2.length);*/

/***********************string concat method*****************************/
//1.


/************************string split method*****************************/
//1.
/*let String1 = "Wow! What a Place."
console.log(String1);
let String2 = String1.split("");
console.log(String2);*/

//2.
/*let String1 = "Welcome to my world."
console.log(String1);
let String2 = String1.split("");
console.log(String2);*/

//3.
/*let String1 = "My name is vishva."
console.log(String1);
let String2 = String1.split("");
console.log(String2);*/

/*************************string include method**************************/
//1.
/*let String1 = "Wow !What a Place."
console.log(String1);
let String2 = String1.includes(".")
console.log(String2);*/

//2.
/*let String1 = "Wow ! this is my world."
console.log(String1);
let String2 = String1.includes(".")
console.log(String2);*/

//3.
/*let String1 = "my name is vishva."
console.log(String1);
let String2 = String1.includes(".")
console.log(String2);*/

/************************string indexof method***************************/
//1.
/*let String1 = "Wow! What a Place."
console.log(String1);
let String2  = String1.indexOf("a" , 8)
console.log(String2);*/


//2.
/*let String1 = "Wow nice."
console.log(String1);
let String2  = String1.indexOf("w" , 4)
console.log(String2);*/

//3.
/*let String1 = "nice to meet you."
console.log(String1);
let String2  = String1.indexOf("y" , 8)
console.log(String2);*/

/***********************string lstindexof method*************************/
//1.
/*let String1 = "Why Need Form Valiadation In Web Development"
console.log(String1);
let String2  = String1.lastIndexOf("m" , 20)
console.log(String2);*/

//2.
/*let String1 = "wow! what a prasent surprise"
console.log(String1);
let String2  = String1.lastIndexOf("e" , 20)
console.log(String2);*/

//3.
/*let String1 = "Why name is vishva"
console.log(String1);
let String2  = String1.lastIndexOf("m" , 20)
console.log(String2);*/

/************************string serch method*****************************/
//1.
/*let String1 = "jay shree krishna"
console.log(String1);
let String2 = String1.search("v")
console.log(String2);*/

//2.
/*let String1 = "nice place in the  world"
console.log(String1);
let String2 = String1.search("c")
console.log(String2);*/

//3.
/*let String1 = "om namah shivay"
console.log(String1);
let String2 = String1.search("v")
console.log(String2);*/

/*********************string starts with method*************************/
//1.
/*let String1 = "Why Need Form Valiadation In Web Development"
console.log(String1);
let String2 = String1.startsWith("w");
console.log(String2);*/

//2.
/*let String1 = "my name is chin chin cha"
console.log(String1);
let String2 = String1.startsWith("a");
console.log(String2);*/

//3.
/*let String1 = "my name is vishva"
console.log(String1);
let String2 = String1.startsWith("m");
console.log(String2);*/

/**********************string end with method****************************/
//1.
/*let String1 = "Why Need Form Valiadation In Web Development"
console.log(String1);
let String2 = String1.endsWith("t");
console.log(String2);

//2.
/*let String1 = "my name is chin chin cha"
console.log(String1);
let String2 = String1.endsWith("F");
console.log(String2);*/

//3.
/*let String1 = "my name is vishva"
console.log(String1);
let String2 = String1.endsWith("a");
console.log(String2);*/