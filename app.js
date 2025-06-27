const billAmount = document.querySelector("#bill-input");
const precentageBtn = document.querySelectorAll(".prec");
const addCustom = document.querySelector("#bill-custom");
const numberOfPeopleInput = document.querySelector("#tip-people");

const tipAmount = document.querySelector(".output-tip");
const tipTotal = document.querySelector(".output-total");
const resetBtn = document.querySelector(".reset-btn");

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
    const errorMsg = document.querySelector(".error-text");
    noOfPeople = parseInt(this.value);

    if(noOfPeople <= 0){
        errorMsg.classList.add("error");
        numberOfPeopleInput.style.outlineColor  = "#FF5733";
    }else{
        errorMsg.classList.remove("error");
        numberOfPeopleInput.style.outlineColor  = "#26c0ab";
    }

    cal();
});

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

        resetBtn.classList.remove("disabled");
    }else{
        tipAmount.textContent = "0.00";
        tipTotal.textContent = "0.00";
    }
}
resetBtn.addEventListener("click", function(){

    tipAmount.textContent = "0.00";
    tipTotal.textContent = "0.00";
    billAmount.value = 0;
    addCustom.value = "";
    numberOfPeopleInput.value = 0; 
    resetBtn.classList.add("disabled");
});

// Reset
// validation
// active buttons