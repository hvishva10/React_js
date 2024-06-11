/*1. Write a function that returns the square of a number 1 to 20*/
function square(i){
  return i*i
}
for(i=1; i<=20; i++){
    console.log(square(i))
}

/*************************************/

/*2. Write a function to convert Celsius to Fahrenheit*/
function celctofahr(n){
    return ((n * 9.0 / 5.0) + 32.0);
}
console.log(celctofahr(10));

/*************************************/

/*3. Write a function to find the area of a given Rectangle*/
function rectangle(a , b){
    let area = a * b;
    return area;
}
console.log("area =" + rectangle(5 , 6));

/***********************************/

/*4. Write a function to reverse a numbe*/
function reverse(j) {
    return j
}
console.log("reverse number:-")
for (j = 10; j >= 1; j--) {
    console.log(j)
}

/***********************************/

/*5. Count the number of Vowels in the String*/

{
    function num(string){
        let Vowels = 'aAeEiIoOuU';
        let count = 0;
  
        for(let i = 0; i < string.length; i++){
            if (Vowels.indexOf(string[i]) !== -1){
                count += 1;
            }
        }
        return count;
    }
    console.log("The Total Number Of Vowels is", num("vishva hirpara"));
  } 

/***********************************/

/*6. Write a function to calculate simple interest based on the principal amoun*/

function interest(p , t , r){
    return p * t * r / 100
}
console.log("intrest amount = " , interest(20 , 30 , 40));

/***********************************/

/*7. Write a function to generate a random number*/
function random(){
    let num = Math.random()
    console.log(num);
}
random();

/***********************************/

/*8. Write a JavaScript program to display the current day and time in the following format.*/ 

function date_time() {
    let days = ["Monday" , "Tuseday" , "Wensday" , "Thusrday" , "Fridy" , "Saterday" , "Sunday"];
    let date = new Date
    console.log(date);
    let day =days[date.getDay()]
    console.log(day);
    let time = date.getHours()
    console.log(time);
    let minits = date.getMinutes()
    console.log(minits);
}
date_time();

/***********************************/

/*9. Write a JavaScript function that returns a passed string with letters in
alphabetical order.*/

{    
    function order(string){

        return string.split('').sort().join('');

    }
    console.log("vishva =", order("vishva"));
}

/***********************************/

/*10. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.*/
let a = -10
let b = 20
let c = 30

if(a>0 && b>0 && c>0){
    alert("This is sign +")
}else{
    alert("This is sign -")
}
