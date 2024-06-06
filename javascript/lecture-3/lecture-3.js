/*if...else statement*/
// 1.]
let num = 4;
console.log(num)
if(num % 2 == 0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}

// 2.]
var a=30
var b=20
console.log(a)
console.log(b)
if(a>b){
    console.log("A is largest number")
}
else{
    console.log("B is largest number")
}

// 3.]
{
    let input= 3;
    
    switch(input){
        case 1:
            let a = 10 - 7
            console.log(a)
            break; 
        case 2:
            let b = 10 - 7 
            console.log(b)
            break;
        case 3:
            let c = 10 * 7 
            console.log(c)
            break;
        case 4:
            let d = 10 / 7; 
            console.log(d)
            break;
        case 4:
            let e = 10 % 7; 
            console.log(e)
            break;
    }
    console.log(" arithmetic operations")
}

// 4.]
var m1=80
var m2=90
var m3=98
var m4=98
var m5=84

sum=m1+m2+m3+m4+m5
console.log("total marks", sum)
avg=sum/5
console.log('average=',avg)

if(avg>=90){
  console.log("Grade A")
}
else if(avg>=80){
  console.log("Grade B")
}
else if(avg>=70){
  console.log("Grade C")
}
else{
  console.log("Low Grade")
}

// 5.]
var x = 0;
var y = -1;
var z = 1;

if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    } else {
        console.log(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    } else {
        console.log(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    } else {
        console.log(z + ", " + y + ", " + x);
    }
    console.log("Sort three numbers")
} 



/*LOGICAL PROGRAM*/
// 1.]
{
    let a = -9 * 3
    let c= 17 % 5
    let d= 5 % 17
    let e= 5 / 10
    let f= (4 == 4)
    let g= (4 != 5)
    let h= (7 <= 8)
        console.log(h)
}

// 2.]
{
    var a= "value is"
    var b = 50
    var c = `"${a} ${b}"`
   console.log(c)
}