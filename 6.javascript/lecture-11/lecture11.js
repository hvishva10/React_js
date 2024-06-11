/*Javascript Function and Function Eepression*/

/*
A function is a block of code that performs a specific task.
A function is declared using Function keyword.
The basic rules of naming are similar to naming a variable. It is better to write a descriptive name for your function. for  example, if a function is used to addd two number,you could  name the function add or addNumbers. */
{
    /*function printf(){
        console.log("Hello vishva");
        console.log(2*2);
    }*/
}

/*Function Parameters*/
// A function can also be declared with parameters. A Parameters is a value that is passed when declaring a function.
{
    /*function multiply(a , b){
        console.log(a);
        return a* b
    }
    console.log(multiply(10 , 10));*/
}

/*Function return*/

//The return statement can be used to return the value to a function call.

//The return statement denotes that the function has ended. Any code after return is not executed.

//If nothing is returned, the function returns an undefind value.

/*Benefits of Using a Function*/

//Function makes the code reusable. you can declare it once and use itmultiple times.
//Function makes the program easier as each small task is divided into a function.
//Function increase readability.
{
    /*function add (a , b){
        return a + b
    }
    console.log(add(23 , 45));
    console.log(add(23 , 10));
    console.log(add(23 , 56));
    console.log(add(23 , 101));
    console.log(add(23 , 89));
    console.log(add(23 , 7855));
    console.log(add(23 , 25));*/
}

/*Function Expressions*/
{
    //program to find the square of a number
    //function is declared inside the variable
    //let x = function(num){ return num * num};
    //console.log(x(10));

    //can be used as variable value for other variables
    //let y = x(3);
    //console.log(y);

    //variable x is used to store the function. here the function is treated as an expression. and the function is called using the variable name.

    //the function above is called an anonymous function
}

/*Javascript Arrow Function / Multiline Arrow Function*/
//Arrow function is one of the features introduce in the ES6 version of javascript. It allows you to create function in a cleaner way compared to regular functions.

/*Arrow Function with arguments*/
// function print(){
//     return console.log("Hello Function");
// }
// print();

// let x = () => console.log("Hello Arrow Function");

// x();

// let y = () => console.log(2*2);

// y();

//Arrow Function as an Expression
{
    /*let gender = "female"
    let x = (gender == "male") ?() => console.log("You are Male") :() => console.log("You are Female");
    x();*/
}

/*Javascript callback function*/
{
    //passing function as an argument
    //greet ('vishva' , callme);

    //callback function
    //function callme(){
        //console.log('I am First callback Function');
    //}

    //function
    /*function greet(name , callback){
        console.log('Hi' + '' + name);
        callback();
    }*/
}