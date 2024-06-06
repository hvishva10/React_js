/***************variable using var() in javascript*****************/
{
    var box = "Livescript"
    console.log(box)

    var Names="foo";
    var names="Javascript";
    console.log(Names);

    var number1 = 15;
    var number2 = 2;
    console.log(number1 + number2)

    var box1="toys";
    var box1="cloths";
    var box1 = 45;

    console.log(box1)
}

box1 = "apple"
box1 = 45
console.log(box1);

/*******New Html Element Add In Though Javascript *********/
{
    var newelement = document.createElement("h1");
    newelement.textContent="hello world";
    document.body.appendChild(newelement);

    var newelement = document.createElement("marquee" , Option);
    newelement.textContent="hello world";
    document.body.appendChild(newelement);

    var newelement=document.createElement("pre");
    newelement.textContent="how are you!";
    document.body.appendChild(newelement);
}

document.write('hello javascript!');

// Template literals
{
    var _nameone = "5";
    var name20 = '5';

    console.log(name20);

    console.log(typeof(_nameone))
}

{
    //alert("_nameone + ${name20}")
    alert(`${_nameone} + ${name20}`); 
}

// Rules for Naming In JavaScript Variables
{
    //valid
    //let a = 'hello';
    //let _a = 'hello';
    //let $a = 'hello';
}
{
    //invalid
    // Let 1a = 'hello'; // this gives an error
}

// JavaScript is case-sensitive. So y and Y are different variables
{
    let y = "hi";
    let Y = 5;

    console.log(y);
    console.log(Y); 
}

