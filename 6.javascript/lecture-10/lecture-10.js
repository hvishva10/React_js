/*let newarray = [1 , false , "string"]
console.log(newarray);
console.log(newarray.length);

let newarray2 = ["vishva" , "srushti" , "jasmin" , , "ashiti"]
console.log(newarray2);
console.log(newarray2[0]);
console.log(Object.keys(newarray2));
console.log(newarray2.length)

newarray2.length = 10;
console.log(newarray2);
console.log(Object.keys(newarray2));
newarray2[4] = "khushi"
console.log(newarray2);

let newstring = newarray2.toString();
console.log(newstring);
console.log(typeof(newstring));*/


//Array length properties
//Accesing the First Array Element
//Accesing the Last Array Element
//Adding Array Elements
//Converting Arrays to String

// Array indexes strat with 0:
//[0] is the First array Element
//[1] is the Secound array Element

/* Array Length Properties */
/*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
console.log(arry);
console.log(arry[0]);
console.log(arry[5]);
arry.push("shrinathji");
console.log(arry);
arry.pop()
arry.pop()
console.log(arry);
arry[0] = "brmha"
console.log(arry);*/

/* The Length property provides an easy way to append new elements to an array without using the push() method. */

/* The join() method also joins all array elements into a string*/
{
    /*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    let arry2 = arry.join("+")
    console.log(arry2);
    console.log(typeof(arry2));*/
}

/*Popping in Javascript Array */

{
    /*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"]; 
    document.getElementById("demo").innerHTML = arry;
    document.getElementById("demo-1").innerHTML = arry.pop();
    console.log(arry);
    console.log(arry.length);*/
}

/*The pop() Method return the value that was "popped out"*/
{
    /*const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    document.getElementById("demo").innerHTML = arry;

    document.getElementById("demo-1").innerHTML = arry.pop();
    document.getElementById("demo-2").innerHTML = arry.pop();
    document.getElementById("demo-3").innerHTML = arry.pop();
    console.log(arry);*/
}

/*Pushing in javascript Array*/
/* The Push() method adds a new element to an array (at the end)*/

{
    // const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // document.getElementById("demo").innerHTML = arry;
    // arry.push("brahma");
    // document.getElementById("demo-1").innerHTML = arry.pop();
    // console.log(arry);
}

// {
//     const arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
//     document.getElementById("demo").innerHTML = arry.push("kartikey");
//     document.getElementById("demo-1").innerHTML = arry.length;
// }

/*Shifting Element*/
/*Javascript Array Shift()*/

/* The Shift() method remove the first array element and "shifts" all other element to a lower index*/
{
    // let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // let arry2 = arry.shift();
    // let arry3 = arry.shift();
    // console.log(arry2);
    // console.log(arry3);
    // console.log(arry);
}

/*The shift method returns the value that was "shifed out"*/
{
    // const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // console.log(arry);
    // document.getElementById("demo").innerHTML = arry.shift();
    // document.getElementById("demo-1").innerHTML = arry;
}

/*Javascript Array unshift()*/
/* The unshift() method add a new elementnto an array (at the begning), and "unshifts" older elements*/
{
    // let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // arry.unshift("kartikey");
    // console.log(arry);
}

/* The unshift() method returns the new array length*/
{
    // const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // document.getElementById("demo").innerHTML = arry.unshift("balram");
    // document.getElementById("demo-1").innerHTML = arry;
}

/*changing elements*/
{
    // const  arry = ["krishna" , "radha" , "ganesh" , , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // console.log(arry);
    // arry[10] = "balram";
    
    // console.log(arry);
}

/*javascript Add elements*/
{
    // const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // document.getElementById("demo").innerHTML = arry;
    // arry[arry.length] = "Ram";
    // document.getElementById("demo-1").innerHTML = arry;
}

/*Javascript Array delete()*/
/*Array elements can be deleted using the Javascript operator delete.*/
/*Using delete leaves undefined holes in the array.*/
/*Use pop() or shift() instead.*/
{
    // let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // console.log(arry);
    // console.log(arry.length);
    // delete arry[4]
    // console.log(arry);
    // console.log(arry.length);

    // arry.length = 20;
    // console.log(arry);

    // arry[16] = "Sita"
    // console.log(arry);
}

/*Merging (Concatenating) Arrays*/
{
    /*let arry1 = ["Ram" , "Lakshman" , "Shita" , "hanuman" , "lav" , "kush"];
    let arry2 = ["krishna" , "Radha" , "rukshmani" , "Tulsi" , "balram" , "Revti" , "Sudama"];
    let arry3 = ["shiv" , "parvati" , "ganesh" , "Ridhhi" , "Siddhi" , "Kartikey"];

    let arry4 = arry2.concat(arry1 , arry3)
    console.log(arry4);*/
}

/* The Concate() method dose not change the existing arrays. It always returns a new array.*/

/*Splicing and Slicing Arrays*/

/*Javascript Array splice()*/

//splice(start)
//splice(start , deleteCount)
//splice(start , deleteCount , item1)
//splice(start , deleteCount , item1 , item2)
//splice(start, deleteCount, item1, item2, /* …, */ itemN)

{
    /*const arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    console.log(arry);
    let arry2 =arry.splice(2 , 3);
    console.log(arry2);*/
}

{
    /*const arry = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
    document.getElementById("demo").innerHTML = "Original Array:<br>" + arry;
    let removed = arry.splice(2 , 2 , "Ram");
    document.getElementById("demo-1").innerHTML = "New Array:<br>" + arry;
    document.getElementById("demo-2").innerHTML = "Removed Items:<br>" + arry;*/
}

/*Javascript Array slice*/
//slice()
//slice(start)
//slice(start , end)

{
    /*const arry = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
    const newremove = arry.slice(1 , 3);
    document.getElementById("demo").innerHTML = arry + "<br><br>" + newremove;
    console.log(arry);*/
}
{
    /*let arry1 = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
    console.log(arry1);
    let arry2 = arry1.slice(0 , 3)
    console.log(arry2);*/
}

/*Array.isArray*/
{
    /*let book = ["math" , "chemistry" , "physics" , "bio"];
    let books = "string";
    console.log(Array.isArray(books));*/
}
{
    //console.log(Array.isArray([]));
}

/*Javascript Sorting Araay*/
{
    /*let book = ["math" , "chemistry" , "physics" , "bio"];
    let books = book.sort();
    console.log(books);*/
}

/*Reversing Array*/
{
    /*let book = ["math" , "chemistry" , "physics" , "bio"];
    console.log(book);
    let bookss = book.reverse();
    console.log(bookss);*/
}

/*Number sort*/
{
    /*const number1 = [40 , 12 , 15 , 81 , 150 , 200];
    let number = number1.sort()
    console.log(number);
    const number2 = number1.sort(function(a , b){return a- b});
    console.log(number2);*/
}

/*Javascript Array Iteration*/
{
    /*const number1 = [45 , 56 , 78 , 23 , 96];
    let number2 = "";
    number1.forEach(myFunction);

    document.write(number2);
    function myFunction(value , index , array){
        number2 += value * 2 + "<br>";
    }*/
}

/*Javascript array map()*/
{
    /*const number1 = [56 , 798 , 345 , 35];
    const number2 = number1.map(myFunction);
    const number3 = number2.sort((a, b) => a - b)
    console.log(number2);
    function myFunction(value){
        return value * 2;
    }*/
}

/*javascript Array flatMap*/
{
    /*let flatmap = [1 , 2 , 3 , 4]
    let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1,1] : 2)
    console.log(flatmap1);*/
}

/* Javascript Array flat() */

{
    /*let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ,[66 , 77]]]]
    let flatmap2  = flatarray.flat(3)
    console.log(flatmap2);*/
 }

/*javascript array filter */
{
    /*const number1 = [45 , 17 , 2 , 46 , 78 , 15];
    const number2 = number1.filter(myFunction);

    function myFunction(age){
        return age <= 100;
    }
    console.log(number2);*/
}

/*javascript array fill method*/
{
    /*const arry = ["radha" , "krishna" , "shiv" , "parvati", "ganesh" , "Ridhi" , "sidhhi"];
    const newfill = arry.fill("1 , 3");
    console.log(newfill);*/
}

/*javascript array copywithin() method*/
{
    /*const arry = ["A" , "B" , "C" , "D" , "E" , "F"];
    const newcopy = arry.copyWithin(0 , 3 , 4);
    console.log(newcopy);*/
}

/*javascript valueof() method*/
{
    /*const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango" , "watermelon" , "kiwi"  , "Olive"];
    const newfruits = fruits.valueOf();
    console.log(newfruits);*/
}

/*javascript flat() method*/
{
    /*const arry = [1 , 2 , 3[4,[5 , 6 ,[7 , 8 , 9]]]];
    const newarry1 = arry.flat();
    const newarry2 = arry.flat(2);
    const newarry3 = arry.flat(3);
    const newarry4 = arry.flat(4);
    console.log(newarry1);
    console.log(newarry2);
    console.log(newarry3);
    console.log(newarry4);*/
}

/*javascript Multidimensional Array*/
/*A multidimensional array is ans array that contains another array*/
{
    //const data = [[1 , 2 , 3] , [4 , 5 ,6]];
}
{
    /*let studentsData = [['Jack' , 24] , ['Sara' , 23] , ['Peter' , 24]];
    let student1 = ['Jack' , 24];
    let student2 = ['Sara' , 23];
    let student3 = ['Peter' , 24];*/
}

/*Access Elements of an Array*/
{
    /*let x = [
        ['Jack' , 24],  
        ['Sara' , 23],
        ['Peter' , 24]
    ];

    //console the first item
    console.log(x[0]);

    // access the first item of the first  inner array
    console.log(x[0][0]);

    //acces the secound item of the third inner array
    console.log(x[2][1]);*/
}

/*add an element to a multidimensional array*/
{
    //add the element to the outer array
    /*let studentData = [['Jack' , 24] , ['Sara' , 23],];
    studentData.push(['peter' , 24]);
    console.log(studentData);*/
}
{
    //adding element to the inner array
    /*{
        //using index notation
        let studentsData = [['Jack' , 24] , ['sara' , 23],];
        studentsData[1][2] = 'hello';
        console.log(studentsData);
    }

    {
        //using push
        let studentsData = [['Jack', 24], ['Sara', 23],];
        studentsData[1].push('hello');
        console.log(studentsData);
    }

    {
        // the Array's splice() method to add an element at a specified index.
        let studentsData = [['Jack', 24], ['Sara', 23],];

        // adding element at 1 index
        studentsData.splice(1, 0, ['Peter', 24]);

        console.log(studentsData);
    }*/

    /*  Remove an Element from a Multidimensional Array */
    /*{
        // remove the array element from outer array
        let studentsData = [['Jack', 24], ['Sara', 23],];
        studentsData.pop();
        console.log(studentsData);
    }

    {
        // remove the element from the inner array
        let studentsData = [['Jack', 24], ['Sara', 23]];
        studentsData[1].pop();

        console.log(studentsData); // [["Jack", 24], ["Sara"]]
    }

    {
        // the splice() method to remove an element at a specified index.
        let studentsData = [['Jack', 24], ['Sara', 23],];

        // removing 1 index array item
        studentsData.splice(1,1);
        console.log(studentsData);
    }*/
}