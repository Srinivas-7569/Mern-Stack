
//functions in java script
// let juice=50;
// let gstonjuice=0.1;
// let fries=70;
// let gstonfood=0.05;
// let juiceBillAmount=juice+juice*gstonjuice;
// let friesBillAmount=const finalBill=juiceBillAmount+friesBillAmount;
// fries+fries*gstonjuice;
// console.log("final bill",finalBill)
// let age =21;
// console.log("start",age);
// function calculateJuiceBillAmount(){
//     let juice=50;
//     let gstonjuice=0.1;
//     let juuiceBillAmount=juice+juice*gstonjuice;
//     console.log(juuiceBillAmount);
// }
// calculateJuiceBillAmount();
// console.log("END");
// --------------------------------------------------------------------
// function calculateJuiceBillAmount(juice){
//     let gstonjuice=0.1;
//     let juuiceBillAmount=juice+juice*gstonjuice;
//     console.log(juuiceBillAmount);
// }
// calculateJuiceBillAmount(60);
// calculateJuiceBillAmount(50);
// calculateJuiceBillAmount(110);
// ----------------------------------------------------------------------
// function printBill(name,amount){
//     console.log("------------------");
//     console.log("your bill for",name);
//     console.log("rs.",amount);
//     console.log("----------------------");

// }
// function  calculateBillAmount(price,gst){
//     console.log("....calculating...");
//     let billAmount=price+price*gst;
//     return billAmount;
// }
// let res1=calculateBillAmount(60,0.1);
// printBill("mango",res1);
// let res2=calculateBillAmount(70,0.2);
// printBill("orange",res2);
// let res3=calculateBillAmount(50,0.3);
// printBill("banana",res3);
// -----------------------------------------------------------------------------
//function assignment()
const printbill=function printBill(name,amount){
     console.log("------------------");
    console.log("your bill for",name);
    console.log("rs.",amount);
    console.log("----------------------");
};
//function assignment(anonymous function)
const calculateBillAmount=function  calculateBillAmount(price,gst){
console.log("....calculating...");
  let billAmount=price+price*gst;
  return billAmount;
};