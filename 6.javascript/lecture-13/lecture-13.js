/*Javascript Object*/

/*const dataobject = {}
console.log(dataobject);

const dataobject1 = {
    key1:"javascript",
    key2:"reactjs"
}
console.log(dataobject1);

console.log(dataobject1.key1);

console.log(dataobject1.key2);

console.log(dataobject1["key1"]);

console.log(dataobject1["key2"]);*/

/*const dataObject3 = {
    name:"vasu",
    gender:"male",
    address:"Twintower",
    marks:{
      maths:35,
      english:90
    }
  }
  
  console.log(dataObject3.marks.maths);
  
  console.log(dataObject3["marks"]);
  
  console.log(dataObject3["marks"]["maths"]);
  
  const dataObject4 = {
    array:[1,2,3,4,5,6,[111,222]],
    array2:[11,22,33,44,55,66],
  }
  
  console.log(dataObject4.array);
  console.log(dataObject4.array[6][0]);*/
  
  
  /*const Array1 = [
    {
      id:1,
      item:"apple",
      catagories:"fruits"
    },
    {
      id:2,
      item:"banana",
      catagories:"fruits"
    },
    {
      id:3,
      item:"graps",
      catagories:"fruits"
    },
    {
      id:4,
      item:"mango",
      catagories:"fruits"
    },
    {
      id:5,
      item:"watermelon",
      catagories:"fruits"
    }  
  ]
  
console.log(Array1[0].id);*/

//taskkkkkkkkkkkkkkkkkkkkkkkkkkkkk

/*Array1 = ["5", "10", "15", "20", "25",  "30",  "40", "50", "55", "60", "65", "70", "75"];
Array2 = Array1.filter((word)  => word < 50);
console.log(Array2);
Array3 = Array1.filter((word)  => word > 50);
console.log(Array3);*/


const list = [{
    fruit:{
      fruit1:{
        name: "mango"
      },
      fruit2:{
        name: "watermelon"
      },
      fruit3:{
        name: "banana"
      },
      fruit4:{
        name: "kiwi"
      },
      fruit5:{
        name: "orange"
      }
    },
    food:{
      food1:{
        name: "burger"
      },
      food2:{
        name: "sendwich"
      },
      food3:{
        name: "panipuri"
      },
      food4:{
        name: "aloopuri"
      },
      food5:{
        name: "dhosa"
      }
    },
    student:{
      student1:{
        name: "vishva"
      },
      student2:{
        name: "srushti"
      },
      student3:{
        name: "dhaturi"
      },
      student4:{
        name: "ashiti"
      },
      student5:{
        name: "urmila"
      }
    },
    colour:{
      colour1:{
        name: "pink"
      },
      colour2:{
        name: "blue"
      },
      colour3:{
        name: "sky"
      },
      colour4:{
        name: "yellow"
      },
      colour5:{
        name: "purple"
      }
    },
    choclate:{
      choclate1:{
        name: "darymilk"
      },
      choclate1:{
        name: "5star"
      },
      choclate1:{
        name: "kit-ket"
      },
      choclate1:{
        name: "munch"
      },
      choclate1:{
        name: "sniker"
      }
    }
  }]

const input = prompt("Enter The Full List: ");
    
if(input == " fruit"){
  console.log("fruit",list[0]["fruit"]);
}
else if(input == "food"){
  console.log("food",list[0]["food"]);
}
else if(input == "student"){
  console.log("student:",list[0]["student"]);
}
else if(input == "colour"){
  console.log("colour:",list[0]["colour"]);
}
else if(input == "choclate"){
  console.log("choclate:" ,list[0]["choclate"]);
}
else{
  console.log("Please! Refresh The Page and Enter Valid Input For Result.");
}

//----------------------------------------------------------------------------------------------------------------

// let list = [
//   { name1: "student1", catagories: "90%" },
//   { name2: "student2", catagories: "95%" },
//   { name3: "student3", catagories: "80%" },
//   { name4: "student4", catagories: "75%" },
//   { name5: "student5", catagories: "94%" },

//   { name1: "student1", catagories: "90%" },
//   { name2: "student2", catagories: "95%" },
//   { name3: "student3", catagories: "80%" },
//   { name4: "student4", catagories: "75%" },
//   { name5: "student5", catagories: "94%" }
// ];

// let output = prompt("enter student and marks list :-");
// let output1= list.filter(list1 => list1.catagories == output);
// console.log(output1);

// -------------------------------------------------------------------------------------------------

// document.getElementById("button").addEventListener("Click",function(e){
//   console.log("1");
//   console.log("target = " + e.target.dataset.name);
//   console.log('currentTarget = ' + e.currentTarget.dataset.name);
// },false)

//const input =document.querySelector('input')
//const value =document.getElementById('input_values')
//input.addEventListener('input',displayValue)

//function displayValue(e)
//{
  ///input_value.innerHTML = e.target.value
//}