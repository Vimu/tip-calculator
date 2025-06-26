const billAmount = document.querySelector("#bill-input");
const precentageBtn = document.querySelectorAll(".prec");
const addCustom = document.querySelector("#bill-custom");
const numberOfPeopleInput = document.querySelector("#tip-people");

const tipAmount = document.querySelector(".output-tip");
const tipTotal = document.querySelector(".output-total");
const btn = document.querySelector(".reset-btn");

let amountOfBill = 0;
let tipPrecentage = 0;
let noOfPeople = 0;

    

billAmount.addEventListener("input", function(){
    amountOfBill = Math.abs(billAmount.value);
    cal();
});
addCustom.addEventListener("input", function(){
    
    tipPrecentage = Math.abs(addCustom.value / 100);
    cal();
})
numberOfPeopleInput.addEventListener("input", function(){
    noOfPeople = parseInt(this.value);

    if(isNaN(tipPrecentage) || tipPrecentage <= 0 || isNaN(noOfPeople) || noOfPeople <= 0){
        return;
    }
    cal();
})

precentageBtn.forEach(function(btns){
    btns.addEventListener("click", function(e){

    e.target.checked = true;
    tipPrecentage =+ e.target.value;
    addCustom.value = "";    

    cal();
    });
});

function cal(){
    const amountOfTip = amountOfBill * tipPrecentage;
    const totalBillWithTip = amountOfBill + amountOfTip;

    if(amountOfBill && noOfPeople >= 1){
        const tipAmountPerson = (amountOfTip / noOfPeople).toFixed(2);
        const tipTotalPerson = (totalBillWithTip / noOfPeople).toFixed(2);

        tipAmount.innerHTML = `$${tipAmountPerson}`;
        tipTotal.innerHTML = `$${tipTotalPerson}`;
    }
}
    
// Reset
// validation
// active buttons