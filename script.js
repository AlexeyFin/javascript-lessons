

// function fun1() {
// 	var sel = document.getElementById('mySelect').selectedIndex;
// 	var options = document.getElementById('mySelect').options;
// 	alert('Choosed option ' +options[sel].text );
// }

function fun1() {
	var rng = document.getElementById('r1');
	var div=document.getElementById('test');
	div.style.width=(rng.value * 3)+'px';
}