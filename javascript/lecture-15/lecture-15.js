//javascript promise and promise chaining

//in javascript, a promise is a good to hendal asynchronous operation. it is use to find out if the asynchronous opration is successfully completed or not.

//a promise may have one of three states.

//panding
//fulfiled
//rejected

//a promise starts in a panding state. that means process is not complate.if opration is successful, the process end is a fulfild state. and, if an occurs, the process ends in rejected state.

//for example,when you request data from the server by using a promise,it will be in a pending state.when the data arrives successfuly, it will be a fullfild be in a fullfild  state. if an arror occurs, then it will be in a rejected stste.

//create a promise

//to create a promise object, we use a promise() constructor.

{
    let promise = new Promise(function (resolve, reject) { });
}

//the promise() consturctor takes a function as an argument.the function also accepts two function resolve() and reject().

//program with promise
{
    /*const count = true;

    let conutvalue = new Promise(function (resolve, reject) {
        if (count) {
            resolve("there is a count value");
        } else {
            reject("there is no count value");
        }
    });
    console.log(conutvalue);*/
}



//javascript promise chining
//promise are useful when you have to handle more than one asynchronous task , one after another. for that, we use promise chaining
//you con perform an operation after a promise is resolved using methods than(), catch() and finally().

// javascript then() method:-

// The then() method is used with the callback when the promise is successfully fulfilled or resolved
//The syntax of then() method is

{
    //PromiseObject.then(onFulfillled, onRejected)
}

// Chaning the Promise with then()

// {
//     let conutvalue = new Promise(function (resolve, reject) {
//         reject("promise is not resolved");
//     });
// }

// conutvalue
//     .then(function successvalue(result) {
//         console.log(result);
//     })

//     .then(function successvalue1() {
//         console.log("you can call multipale functions this way.");
//     });

//the then() method is used to chin the functions to the promise. the then() method is called when the promise is resolved successfully.
//you can chain multiple then() method with the promise.

// JAvascript catch() method:-
// {
//     let conutvalue = new Promise(function (resolve, reject) {
//         resolve("Promise is not rejected");
//     });

//     conutvalue
//         .then(function successvalue() {
//             let text = 8 * 10;
//             console.log(text);
//         })

//         .catch(function errorvalue(result) {
//             console.log(result);
//         });
// }

// Javascript Promise versus callback

//promise are similer to callback functions in a sense that they both can be used to handle asynchronous tasks.
//javascript callback functions can also be used to perform asynchronous tasks.

// javascript promise

//the syntax is user-friendly and easy to read.

//Error handling is eassier to mange.

// {
//  api().then(function(reslut){
//     return api2()
// }).then(function(reslut){
//     return api2()
// }).then(function(reslut){
//     return api2()
// }).catch(function(error){
//handle any error that occur before this point
// })
// }

// javascript callback
//the syntax is difficula to understand.
//Error handling may be hard to mange.

{
    //api(function(result){
    //     api2(function(reslut2){
    //do work
    //   if (error) {
    //do something
    //   } else {
    //do something
    //   }
    //     })
    // })
}

// javascript finally() method

{
    //you can also use the finally() method with promises. the finally() method gets exeuted when the promise when the promise is either resolved successfully or rejected.

    let conutvalue = new Promise(function(resolve ,reject){
        resolve();
    });

    conutvalue.finally(
        function greet(){
            console.log('this code is executed.')
        }
    );

    let promise = new Promise(function(resolve , reject){
        setTimeout(
            function(){
                console.log('Hello Promises')
                // reject('this task is not complete!')
                resolve()
            },5000
        )
    })
    promise.then(function(){
        setTimeout(
            function(){
                console.log('Frist then function')
            },1000
        )
    })
   .then(function(){
        setTimeout(
            function(){
                console.log('second then function')
            },5000
        )
    })
    .then(function(){
        setTimeout(
            function(){
                console.log('Third then function')
            },4000
        )
    })
    .then(function(){
        setTimeout(
            function(){
                console.log('Fourth then function')
            },5000
        )
    })
    .then(function(){
        setTimeout(
            function(){
                console.log('Fifth then function')
            },1000
        )
    })
    .catch(function(reslut){
        console.log(reslut)
    })
    .finally(function(){
        console.log('the Asyncronous task complete!...')
    })
}