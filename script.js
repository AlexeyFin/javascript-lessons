

// function fun1() {
// 	var sel = document.getElementById('mySelect').selectedIndex;
// 	var options = document.getElementById('mySelect').options;
// 	alert('Choosed option ' +options[sel].text );

function fun1 (){
	var div = document.getElementById('block1');
	
	var rtl=document.getElementById('rtl').value; //top left	
	var rtr=document.getElementById('rtr').value; //top right
	var rbr=document.getElementById('rbr').value; //bottom rigth
	var rbl=document.getElementById('rbl').value; //bottom left

	var ttl=document.getElementById('ttl');
	var ttr=document.getElementById('ttr');
	var tbr=document.getElementById('tbr');
	var tbl=document.getElementById('tbl');



	ttl.value = (rtl + ' px');
	ttr.value = (rtr + ' px');
	tbr.value = (rbr + ' px');
	tbl.value = (rbl + ' px');

	var div = document.getElementById('block1');
	div.style.borderRadius = (rtl+'px ' + rtr +'px ' + rbr +'px ' + rbl +'px ');



}