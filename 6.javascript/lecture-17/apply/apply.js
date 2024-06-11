/*Function Apply() method*/
{
    /*const NewObj = {
        firstName : 'Taylor',
        lastName : 'jackson'
    }

    function grow(wish , massage){
        return `${this.firstName} , ${wish}. ${massage}`;
    }

    const result = grow.apply(NewObj , ["Good Morning" , "How are you"])
    console.log(result);*/
}

//using errow method
{
    /*const NewObj = {
        firstName : 'Taylor',
        lastName : 'jackson'
    }

    const grow = (wish , massage) => {
        return `${this.firstName} , ${wish}. ${massage}`;
    }

    const result = grow.apply(NewObj , ["Good Morning" , "How are you"])
    console.log(result);*/
}

/*Function Borrowing Method*/
{
    /*const item = {
        name: 'AUDI',
        discription(){
            return `${this.name} is of ${this.color} color.`
        }
    }

    const bike = {
        name: 'BUGATI',
        color: 'black'
    }

    let result = item.discription.apply(bike)
    console.log(result);*/
}

/*Append Array*/
{
    /*let color1 = ["Red" , "Green" , "Blue"];
    let color2 = ["Yellow" , "Black"];

    //appending two arrays color1 and color2
    color1.push.apply(color1 , color2);

    console.log(color1);*/
}

/*Array Merge*/
/*let Array1 = ['dataObj' , 'dataArr' , 'object' , 'string']
let Array2 = [10 , 20 , 30 , 40 , 50 , 60]
let NewArry = Array1.concat(Array2)
console.log(NewArry);

let NewArry1 = Array1.push.apply(Array1 , Array2)
console.log(NewArry1);
console.log(Array1);*/