function tipCalculate(){

	var totalBill = document.getElementById('bill').value;
	
var percBtns = document.getElementsByClassName('tip-btn');
	console.log(percBtns);

for(var i=0; i<percBtns.length; i++){
	if(percBtns[i].checked){
	var tipPerc = percBtns[i].value;
}
} 


if(!isNaN(totalBill)){
var tipTotal = Math.floor(totalBill * tipPerc); 
var tipBox = document.getElementById('tipamount'); 
	tipBox.innerHTML = '$'+tipTotal;}else {alert('numbers only'); resetCalc();
}

}

function resetCalc(){
document.getElementById('bill').value = '';

var percBtns = document.getElementsByClassName('tip-btn');
for(var i=0; i < percBtns.length; i++){
 	percBtns[i].checked = false;
}

 var tipBox = document.getElementById('tipamount');
 	tipBox.innerHTML = '$0.00';
}