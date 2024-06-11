/*❖ while / do-while / for Program*/

/*1. Countdown using a while loop*/
    //1.]while loop
    /*let i=10;

    while(i >= 0){
        document.write(i + "<br>")
        i--;
    }*/
   
    //2.] do-while loop
    /*let i=10;
    do{
        document.write(i + "<br>") 
        i--;
    }while(i>=0)*/

    //3.]for loop
    /*let  i = 10;

    for(i; i>=0; i--){
        document.write(i + "<br>")
    }*/



/*2. Sum of numbers from 1 to 10 using a while loop*/
    //1.]while loop
    /*let i=1,  sum = 0
        while (i<=11){
            document.write(sum + "<br>")
            sum += i;
            i++;
           
        }*/

    //2.] do while loop
    /*let i=1, sum=0
        do{
            document.write(sum + "<br>")
            sum += i;
            i++;
        }while(i<=11)*/
    
    //3.] for loop
    /*let i=1, sum=0

        for(i; i<=11; i++){
            document.write(sum + "<br>")
            sum += i;
        }*/



/*3. Multiplication table for a given number using a while loop*/
    //1.]while loop
    /*let n,tab,res;

        tab=prompt("Enter value for table")
        n=1;
        while(n<=10){
            res=tab*n;
            document.write(n+" * " + tab+"="+res+"<br>");
            n++;   
         }*/
   
    //2.]do while loop
    /*let n,tab,res;
    
        tab=prompt("Enter value for table");
        n=1;
        do{
            res=tab*n;
            document.write(n+" * " + tab+"="+res+"<br>");
            n++;
        }while(n<=10);*/

    //3.]for loop
    /*let n,tab,res;

        tab=prompt("Enter value for table");
        
        for(n=1; n<=10; n++){
            res=tab*n;
            document.write(n+" * " + tab+"="+res+"<br>");
        }*/  



/*4. Guess the number game using a while loop*/
    //1.]while loop
    {
        /*let Number = 38;
        let guessCount = 0;
        let guess = 5;

        while(guessCount < guess){
            let user = prompt("Enter a number between 1 and 100");
      
          if (user == Number) {
            alert(
              "Congratulations! You guess the number"
            );
            break;
          }
      
          if (user > Number) {
            alert("guess is too high. Try again.");
          } else if (user< Number) {
            alert(" guess is too low. Try again.");
          }
      
          if (guessCount == guess) {
            alert(
              "Sorry, your guess limit over."
            );
          }
          guessCount++;
        }
    }

    //2.]do while loop
    {
        /*let Number = 38;
        let guessCount = 0;
        let guess = 5;
        do{
            let user = prompt("Enter a number between 1 and 100");
      
          if (user == Number) {
            alert(
              "Congratulations! You guess the number"
            );
            break;
          }
      
          if (user > Number) {
            alert("guess is too high. Try again.");
          } else if (user< Number) {
            alert(" guess is too low. Try again.");
          }
      
          if (guessCount == guess) {
            alert(
              "Sorry, your guess limit over."
            );
          }
          guessCount++;
        }while(guessCount < guess)*/
    }

    //3.]for loop
    {
       /* let Number = 38;
        let guessCount = 0;
        let guess = 5;
      
        for (guessCount; guessCount < guess; guessCount++) {
          let user = prompt("Enter a number between 1 and 100");
      
          if (user == Number) {
            alert(
              "Congratulations! You guess the number"
            );
            break;
          }
      
          if (user > Number) {
            alert("guess is too high. Try again.");
          } else if (user< Number) {
            alert(" guess is too low. Try again.");
          }
      
          if (guessCount == guess) {
            alert(
              "Sorry, your guess limit over."
            );
          }
        }*/
      }




/*5. Generate the Fibonacci sequence using a while loop*/
    //1.]while loop
    /*let n1 = 0,  n2 = 1, next_num, i=1;  
    let num = 5
        
        document.write("Fibonacci series:");
        while(i <= num){
            document.write("<br>" + n1);
            next_num = n1 + n2;
            n1 = n2;
            n2 = next_num;
            i++;
        }*/

    //2.]do while loop
    /*let n1 = 0,  n2 = 1, next_num, i;  
    let num = 4
        document.write( "Fibonacci Series: ");
        do{
            document.write (" <br> " +  n1); 
            next_num = n1 + n2; 
            n1 = n2;  
            n2 = next_num;
            i++; 
        }while(i <= num)*/


    //3.]for loop
    /*let n1 = 0,  n2 = 1, next_num, i;  
    let num = 6

        document.write( "Fibonacci Series: ");  
        for ( i = 1; i <= num; i++){
            document.write (" <br> " +  n1); 
            next_num = n1 + n2; 
            n1 = n2;  
            n2 = next_num; 
        }  



/*6. Calculate factorial of a number using a while loop*/

    //1.]while loop
    /*ylet n=6, i=1, fact=1

        while(i<=n){
            document.write(fact + "<br>")
            fact = fact*i;
            i++;
        }

    //2.]do while loop
    /*let n=6, i=1, fact=1

        do{
            document.write(fact + "<br>")
            fact = fact*i;
            i++;
        }while(i<=n)*/

    //3.]for loop
    /*let n=6, i=1, fact=1

        for(i=1; i<=n; i++){
            document.write(fact + "<br>")
            fact = fact*i;
        }*/



/*7. Check if a word is a palindrome using a while loop*/   
    //1.]while loop
    /*let string = prompt("please enter a string");
    let len = string.length;
    let msg = 'it is not palidrome';
    let i=0;

    while(i <len/2){
        if(string[i] != string[len - 1 - i]){
            msg = 'it is not palidrome';
        }
        i++;
    }
    document.write(`${string}: ${msg}`);*/

    //2.]do while loop
    /*let string = prompt("please enter a string");
    let len = string.length;
    let msg = 'it is not palidrome';
    let i=0;
    do{
        if(string[i] != string[len - 1 - i]){
            msg = 'it is not palidrome';
        }
        i++;
    }while(i <len/2)
    document.write(`${string}: ${msg}`);*/

    //3.]for loop
    /*let string = prompt("please enter a string");
    let len = string.length;
    let msg = 'it is not palidrome';
    for(let i=0; i <len/2; i++){
        if(string[i] != string[len - 1 - i]){
            msg = 'it is not palidrome';
        }
    }
    document.write(`${string}: ${msg}`);*/


/*8. Calculate the power of a number using a while loop*/
    //1.]while loop
    /*const n=2;
    const power=5;
    let num=2, i=0;

        while(i<power){
            document.write(num + "<br>");
            num  *= n;
            i++;
        }*/

    //2.]do while loop
    /*const n=2;
    const power=5;
    let num=2, i=0;

    do{
        document.write(num + "<br>");
        num  *= n;
        i++; 
    }while(i<power)*/

    //3.]for loop
   /*const n=2;
   const power=5;
   let num=2;
        for(let i=0; i<power; i++){
            document.write(num + "<br>");
            num  *= n;
        }*/



/*9. Print a pattern using a while loop*/
    //1.]while loop
    /*let n=5 ,b
    let a=1
        while(a<=n){
            b=1
            while(b<=a){
                document.write(" * ")
                b+=1
            }
            document.write("<br>")
            a+=1
        }*/


    //2.]do while loop
    /*let n = 5, b;
    let a = 1;
        do{
            b = 1;
            do {
                document.write(" * ");
                b += 1;
            } while (b <= a);
            document.write("<br>");
            a += 1;
        } while (a <= n);*/


    //3.]for loop
    /*let x, y;

        for(x=0; x<=5; x++){
            for(y=1; y<=x; y++){
                document.write("*" + "")
            }
            document.write("<br>");
        }*/



/*❖ break statement*/

/*10. Search for a specific number using a for loop and break statement*/
/*{
    let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    let searchNumber = 20; 
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchNumber) {
           document.write("Number found at index:", i);
           break;
        }
    }
}

/*11. Find the first odd number in a sequence using a while loop and break
statement*/



/*12. Check if a number is prime using a for loop and break statement*/
/*0
{
    let num = 5;
    let i = 2
       for ( i = 2; i < num; i++) {
            if (num % i === 0) {
                document.write(num + " is not a prime number.");
                break;
            }
        }
        if (i === num) {
            document.write(num + " is a prime number.");
        }    
}*/

/*13. Loop with a conditional break statement based on user input*/
{
   /* let sum = 0, i;

    while(true){
        i = parseInt("Enter number :");

        if(i < 0){
            break;
        }
        sum += i;
    }
    document.write(Total Number ${sum}.);
    document.write("<br>");*/
 }

/*❖ continue statement*/


/*14. Skip printing odd numbers using a for loop and continue statement*/
/*for (let i = 1; i <= 10; i++) {
    if ((i % 2) != 0) {
      continue;
    }
    document.write(i + "<br>");
}*/

/*15. Skip multiples of 3 using a while loop and continue statement*/
/*let i=0;
while(i < 20) {
    if(i%3 == 0) {
        document.write(i + " ");
    }
    i++;
}*/

/*16. Print even numbers in a specific range using a for loop and continue statement*/
{
    /*let m = prompt();
    let n = prompt();
    
    for(i = m; i <= n; i++)
    {
        if(i % 2 !== 0)
        {
            continue;
        }
        document.write(i + "\t")
    }*/
 }

/* 17.Skip numbers divisible by 5 using a do-while loop and continue statement */

// {
//     let i = 0;
//     let num = prompt("enter a number");
    
//     do {
//       i++;
//       if (i % 5 === 0) {
//         continue;
//       }
//       document.write(i + "\t");
//     } while (i < num);
// }
