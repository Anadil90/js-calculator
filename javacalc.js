var display = document.getElementById('display');
var buttons = document.querySelectorAll('.key')
var equals = document.querySelector('equals')


function numDisplay(num){
	display.value += num

	if(num === 'c'){
	display.value = '';
	}if(num === 'ce'){
		display.value = '';

	}
}


function ans(){
	var x = display.value
	x = eval(x);
	display.value = x;
}

function root(){
	var r = display.value
	r = Math.sqrt(r);
	display.value = r;
}


function back(){
	var displayVal = display.value;
 	displayVal= displayVal.slice(0, -1);
 	display.value = displayVal;
}
