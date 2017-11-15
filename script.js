
// function check() {
	// 	var chbox=document.getElementById('one');
// 	if (chbox.checked) {
// 		alert("checked");
// 	}else{
// 		alert("dont checked");
// 	}
// }


function fun1() {
	var radi = document.getElementsByName('r1');

	for (var i =  0; i < radi.length; i++) {
		
		if (radi[i].checked) {
			alert("Choosed "   +i+   " element");
		}

	}
}

