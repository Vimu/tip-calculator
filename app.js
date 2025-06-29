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

    
// bill input
billAmount.addEventListener("input", function(){
    amountOfBill = Math.abs(billAmount.value);
    cal();
});
// custom input
addCustom.addEventListener("input", function(){
    
    tipPrecentage = Math.abs(addCustom.value / 100);
    //removing active status of precentage button when add custom value. 
    precentageBtn.forEach(btn => btn
        .classList.remove("active-btn"));

    cal();
})
// Number of people
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
// buttons - precentage
precentageBtn.forEach(function(btns){
    btns.addEventListener("click", function(e){
        // Remove active class from all buttons first
        precentageBtn.forEach(b => b
            .classList.remove("active-btn"));
        // Add active class to the clicked button
        btns.classList.add("active-btn");
        // e.target.checked = true;
        tipPrecentage = +e.target.value;
        addCustom.value = "";    

    cal();
    });
});
// tip calculations
function cal(){
    const amountOfTip = amountOfBill * tipPrecentage;
    const totalBillWithTip = amountOfBill + amountOfTip;

    if(amountOfBill > 0 && noOfPeople > 0){
        const tipAmountPerson = (amountOfTip / noOfPeople).toFixed(2);
        const tipTotalPerson = (totalBillWithTip / noOfPeople).toFixed(2);
        tipAmount.innerHTML = `$${tipAmountPerson}`;
        tipTotal.innerHTML = `$${tipTotalPerson}`;

        resetBtn.disabled = false; //reset button enable
        resetBtn.classList.remove("disabled");
    }else{
        tipAmount.textContent = "0.00";
        tipTotal.textContent = "0.00";

        resetBtn.disabled = true; //disabled
        resetBtn.classList.add("disabled");
    }
}

// reset button
resetBtn.addEventListener("click", function(){
    

    tipAmount.textContent = "0.00";
    tipTotal.textContent = "0.00";

    
    billAmount.value = "";
    addCustom.value = "";
    numberOfPeopleInput.value = "";

    tipPrecentage = 0;
    amountOfBill = 0;
    noOfPeople = 0; 

    precentageBtn.forEach(btn => btn.classList.remove("active-btn"));

    const errorMsg = document.querySelector(".error-text");
    errorMsg.classList.remove("error");
    numberOfPeopleInput.style.outlineColor = "#ccc"; // neutral color
   
    cal(); // <- recalculate to update UI after resetting
});

// Reset
// validation
// active buttons