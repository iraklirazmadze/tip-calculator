let billAmount=0;
let percent=0;
let totalBillAmount;
let totalTipAmount;
let numPeople=1;
function setResults(){
    document.getElementById("total-result").innerHTML = totalBillAmount.toFixed(2);
    document.getElementById("tip-result").innerHTML = totalTipAmount.toFixed(2);
}
function setResult0(){
    document.getElementById("tip-result").innerHTML = "0.00";
        document.getElementById("total-result").innerHTML = "0.00";
}

function calculates(){
    totalBillAmount = billAmount*(1+percent*1)/numPeople;
        totalTipAmount = billAmount*percent/numPeople;
}

function changeBill(){
    billAmount=document.querySelector("#bill").value;
        calculates();
    if(billAmount < 0){
        billAmount = 0;
        totalBillAmount=0;
        totalTipAmount=0;
        document.querySelector("#bill").value = 0;
        setResult0();
    }
    setResults();
    document.querySelector("#reset").style.backgroundColor="#26C2AE";
}

function customTipPercent(){
percent = document.getElementById("custom").value;
calculates();
setResults();
document.querySelector("#reset").style.backgroundColor="#26C2AE";
}

let buttons = document.querySelector(".tip-percent").querySelectorAll("button");
for(let btnPercent of Array.from(buttons)){
    btnPercent.addEventListener("click", () =>{
        percent = btnPercent.value;
        calculates();
        setResults();
        for(let btnPercent of Array.from(buttons)){
            btnPercent.style.backgroundColor="#00474B"
        }
        btnPercent.style.backgroundColor="#26C2AE";
        
    })
}

function changeNumPeople(){
    numPeople = document.getElementById("number-of-people").value;
        calculates();
    setResults();
    if(numPeople < 1){
        numPeople=1;
        document.getElementById("number-of-people").value=1;
        setResult0();
}
}

let reload = document.querySelector("#reset");
reload.addEventListener("click", () => {
    billAmount=0;
    percent=0;
    numPeople=1;
    for(let btnPercent of Array.from(buttons)){
        btnPercent.style.backgroundColor="#00474B"
    }
    setResult0();
    document.querySelector("#bill").value="";
    document.getElementById("custom").value= "";
    document.getElementById("number-of-people").value=1;
    document.querySelector("#reset").style.backgroundColor="#0D686D";
})
