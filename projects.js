function daysToSeconds() {
    var days = document.getElementById("days").value;
if(days <= 0) {
return;
}
var result = days * 60 * 60 * 24;
if(days >= 1000) {
document.getElementById("TCOut").innerHTML = result + " (Queen Elizabeth's age in years!)";
return
}
    document.getElementById("TCOut").innerHTML = result + " Seconds";
    
    
}

//Tax Calculator

function taxCalculator() {
    var amount = document.getElementById("Loan").value;
    var Tax = document.getElementById("Tax").value;
    var Months = document.getElementById("Months").value;
  var result;
    if(amount < 0 || Tax <= 0 || Months <= 0) {
        return;
    }

    result = amount*(Tax/100)*Months;
    
    result = Math.floor(result);
    document.getElementById("LCOut").innerHTML = result;
    
}