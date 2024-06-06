/*Global Use*/
/*Length , toString , name*/
{
    //let max = this;
    //console.log(max); //window

    //this.name = "skillqode"
    //console.log(this.name);
}

/*Inner Function*/
{
    /*function Grow(){
        console.log(this);
    }
    Grow();       //window{}*/
}


/*Constructor Function*/
{
    /*function grow() {
        this.name = 'javascript'
        console.log(name);
    }
    let NewObj = new grow()
    console.log(NewObj);*/
}


/*this Keyword in Arrow Function*/
{
    /*const NewFunc = () => {
        console.log(this);
    }
    NewFunc();  //window{}*/
}
{
    /*const Obj = () =>{
        this.name = 'JQuery'
        console.log(name);
    }
    Obj();*/
}


/*Function.length Method*/
{
    /*function greet(){

    }
    console.log(greet.length);

    function greets(a  , b , c = 10){

    }
    console.log(greets.length);*/
}


/*Function.tostring Method*/
{
    /*function greet(){
        console.log('SkillQode');
    }
    console.log(greet.toString());
    console.log(() => console.log('data').toString());*/
}


/*this Inside Inner Function*/
{
    /*const person = {
        name : 'Jack',
        age: 25,
        greet() {
            console.log(this);        
            console.log(this.age);  

            const innerFun = () => {
                console.log(this);       
                console.log(this.age); 
            }
            innerFun();
        }
    }
    person.greet();*/
}