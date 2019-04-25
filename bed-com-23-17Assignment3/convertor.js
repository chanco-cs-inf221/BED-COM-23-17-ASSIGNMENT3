//combining all units in one array
const units = {
    Meters:{'Miles':1.609344,'Kilometers':39370.0787,'Inches':39.3701},
    Kilometers:{'Miles':1.609344,'Meters':1000,'Inches':39.3701}
   

    };

 //declaring variables 
var button = document.querySelector('.super-button');
var baseUnitInput = document.getElementById('unit-1');
var secondUnitInput = document.getElementById('unit-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-unit');
var toShowSecond = document.querySelector('.second-unit');
var toShowResult = document.querySelector('.final-result');

//defining functions
function convertUnit(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseUnitInput.value;
  var to = secondUnitInput.value;
  var result = 0;
  
  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * units[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / units[to][from]);
  }
  //setting math operations of the convertor
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

//setting addEventListener
button.addEventListener('click', convertUnit);
