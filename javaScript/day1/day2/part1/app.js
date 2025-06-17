// //arrow function
// const printBill=(txt)=>{
//     console.log("--------------------------");
//     console.log("RS.",txt);
//     console.log("--------------------------");
// };
// printBill(100);

// const calculateBillAmountForFood=(price)=>{
//     return price*1.05;
// };
// const calculateBillAmountForCloths=(price)=>{
//     return price*1.12;
// };
// const calculateBillAmountForDrinks=(price)=>{
//     return price*1.2;
// };
// const finalBillAmount=(food,cloths,drinks)=>{
//     const foodAmount= calculateBillAmountForFood(food);
//     const clothsAmount=calculateBillAmountForCloths(cloths);
//     const drinksAmount=calculateBillAmountForDrinks(drinks);
//     const finalAmount=foodAmount+clothsAmount+drinksAmount;
//     printBill(finalAmount);
// }
// finalBillAmount(100,400,100);

// -------------------------------------------------------------------------

const printBill=(txt)=>{
    console.log("--------------------------");
    console.log("RS.",txt);
    console.log("--------------------------");
};
printBill(100);

const calculateBillAmountForFood=(price)=>{
    return price*1.05;
};
const calculateBillAmountForCloths=(price)=>{
    return price*1.12;
};
const calculateBillAmountForDrinks=(price)=>{
    return price*1.2;
};

const printBillForFood=(txt)=>{
console.log("total amount for food is",txt);
}
const printBillForFoodAndDrinks=(txt)=>{
    console.log("total amount for food  and drinksis",txt);
}
const printBillForAll=(txt)=>{
    console.log("total amount for all is",txt);
}
const finalBillAmount=(food,cloths,drinks,cd)=>{
    const foodAmount= calculateBillAmountForFood(food);
    const clothsAmount=calculateBillAmountForCloths(cloths);
    const drinksAmount=calculateBillAmountForDrinks(drinks);
    const finalAmount=foodAmount+clothsAmount+drinksAmount;
    cd(finalAmount);
}
finalBillAmount(100,400,100,printBillForAll);
finalBillAmount(100,0,100,printBillForFoodAndDrinks);
finalBillAmount(100,0,0,printBillForFood);

