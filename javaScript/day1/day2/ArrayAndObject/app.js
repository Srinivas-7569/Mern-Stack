//objects are use to store key value pair and kkey should be string or symbol
//crud operations(create, read,update,delete )
//  const cse022={
//      name:"srinivas",
//      address:"hyd,ts",
//      bloodgroup:"o+",
//  };
// console.log(cse022);
// ///////////////////READ the value of property/////////////////////////////
// const studentName=cse022.name;
// console.log("studetname:",studentName);
// ///////////////////UPDATE the value of property///////////////////////////
// cse022.bloodgroup="A+";
// ////////////////////////////Add KEY-VALUE pair//////////////////////////////
// cse022.collage="LPU";
// delete cse022.address;
// console.log("cse022",cse022);

// //primitivies=all datatypes are except object
// //nonpremitive are object

// ------------------------------------------------------------------------------

// const person={
//     name:'srinivas',
//     height:1.4,
//     weight:72,
//     collage:'LPU',
//     rollNumber:12207375,
//     getBMI:function(){//we shoud not use this keyword in arrow function
//         const bmi=this.weight/this.height**2
//         console.log(`bmi for ${this.name} is ${bmi}`);
//         if (bmi<20){
//             console.log(this.name,"is under weight")
//         }
//             else if(bmi<25){
//                 console.log(this.name,"is fit");
//             }else if(bmi<30){
//                 console.log(this.name,"is over weight");
//             }else{
//                 console.log(this.name,"is obesity");
//             }

//     },
// };
// person.getBMI();
// person.weight=100;
// person.getBMI();

// //printing key and values
// const allkeys=Object.keys(person);

// console.log("all keys:",allkeys);
// const allvalues=Object.values(person);
// console.log("all values:",allvalues);

// //in javaascript objects(nonpremitive) are immutable and primitives are mutable
// const person1={
//     name:'srinivas',
//     height:1.4,
//     weight:72,
//     collage:'LPU',
//     rollNumber:12207375,
// };
// const person2=person1;//shallow copy
// person1.name="raj";
// person2.name="sri";
// console.log("person",person1);
// console.log("person2",person2);

// //////DE-structuring syntax/////////////////////this will improve accessing the values without ussing person.product. like that
// const{weight,collage}=person2;
// console.log(":->",weight,collage);
// /////spread operator/////
// const person3={...person1};//it helps us to store the value in different adddress with having same copy
// console.log(person3);
// const a=person1.weight=100;
// console.log(a);
// console.log(person3.weight);
// ----------------------------------------------------------------------
////////////////nested objects////////////////////
// const person1={
//     name:'srinivas',
//     height:1.4,
//     weight:72,
//     collage:'LPU',
//     rollNumber:12207375,
//     marks:{
//         maths:20,
//         science:30,
//     }

// };
// const person2={...person1};
// person2.name="raj";
// person2.marks.maths=49;
// console.log("person:",person1);
// console.log("person2:",person2);

//-------------------------------------------------------------------ARRAYS-------------------------------------------------------
// const arr=['a','b','c','d'];
// console.log(arr);
// //1
// console.log(arr[1]);
// //2
// const [h,j,k]=arr;
// console.log(h,j);
// //ADD
// const arr1=["tata","mahindra","suzuki","hyundai"];
// arr1[10]='hi';
// console.log(arr1);

// arr1.push("honda");//add the element in any index
// arr1.pop;//delete the element in any index

// arr1.shift();//it reemove first element of array
// arr1.unshift('hiiii');//it add eleme t to the frst index
// arr1.splice(1,2,'kia','bye','jjjjj')
// console.log(arr1);
//find the index of the element which is equal to "suzuki"
// const arr1=["tata","mahindra","suzuki","hyundai"];
// console.log(arr1.indexOf("suzuki"));

// const arr=[
//     {name:'a',city:"delhi"},
//     {name:"b",city:"kanpur"},
//     {name:"c",city:"mumbai"},
// ];
// console.log(arr.indexOf({name:'a',city:"delhi"}));

//-----------------------array search methods---------------------------------
// const a=['a','b','c','d'];
// if(a.includes('m')){
//     console.log("present");
// }else{
//     console.log('absent');
// }
// ~~~~~~~~~~~~~~~~
// const arr=[
//     {name:"a",city:'hi'},
//     {name:"b",city:"bye"},
//     {name:"c",city:"jjj"},
// ];
// const myFunc=(a)=>{
//     if(a.name==="c")return true;
//     return false;
// };
// const ans=arr.find(myFunc);
// console.log(ans);
// ~~~~~~~~~~~~~~~~~~~~~~~~
const arr = [
  { name: "a", city: "hi", score: 15 },
  { name: "b", city: "bye", score: 50 },
  { name: "c", city: "jjj", score: 100 },
];
const myFunc = (elem) => {
  if (elem.score < 25) {
    return { ...elem, remark: "fail" };
  } else {
    return { ...elem, remark: "pass" };
  }
};
const resArr = arr.map(myFunc);
console.log("resArr:", resArr);
