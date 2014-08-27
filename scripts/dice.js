function roll(){
	var count0 = 0;
	var count = 0;
		if (total == 0){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count0 ++;
		}
		if (d == 7 || d == 8 || d == 9 || d == 10){
				count0 ++; 
			}	
			else{
			}
			localStorage.setItem("count0", count0);
			document.getElementById('results').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		if (count0 >= 4){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			document.getElementById('results2').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			document.getElementById('results2').innerHTML = "FAIL";
		}
		for (i=0; i<total; i++){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count ++;
		}
		if (d == 7 || d == 8 || d == 9 || d == 10){
				count ++; 
			}	
			else{
			}
			localStorage.setItem("count", count);
			document.getElementById('results').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		if (count >= resist){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			document.getElementById('results2').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			document.getElementById('results2').innerHTML = "FAIL";
		}
}
function roll2(){
	var count0 = 0;
	var count = 0;
		if (total2 == 0){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results3').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count0 ++;
		}
		if (d == 7 || d == 8 || d == 9 || d == 10){
				count0 ++; 
			}	
			else{
			}
			localStorage.setItem("count0", count0);
			document.getElementById('results3').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		if (count0 >= 4){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			document.getElementById('results4').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			document.getElementById('results4').innerHTML = "FAIL";
		}
		for (i=0; i<total2; i++){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results3').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count ++;
		}
		if (d == 7 || d == 8 || d == 9 || d == 10){
				count ++; 
			}	
			else{
			}
			localStorage.setItem("count", count);
			document.getElementById('results3').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		if (count >= resist2){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			document.getElementById('results4').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			document.getElementById('results4').innerHTML = "FAIL";
		}
}
function roll3(){
	var count0 = 0;
	var count = 0;
		if (total3 == 0){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results5').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count0 ++;
		}
		if (d == 7 || d == 8 || d == 9 || d == 10){
				count0 ++; 
			}	
			else{
			}
			localStorage.setItem("count0", count0);
			document.getElementById('results5').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		if (count0 >= 4){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			document.getElementById('results6').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			document.getElementById('results6').innerHTML = "FAIL";
		}
		for (i=0; i<total3; i++){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results5').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count ++;
		}
		if (d == 7 || d == 8 || d == 9 || d == 10){
				count ++; 
			}	
			else{
			}
			localStorage.setItem("count", count);
			document.getElementById('results5').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		if (count >= resist3){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			document.getElementById('results6').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			document.getElementById('results6').innerHTML = "FAIL";
		}
}
function roll4(){
	var count0 = 0;
	var count = 0;
		if (total4 == 0){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results7').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count0 ++;
		}
		if (d == 7 || d == 8 || d == 9 || d == 10){
				count0 ++; 
			}	
			else{
			}
			localStorage.setItem("count0", count0);
			document.getElementById('results7').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		if (count0 >= 4){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			document.getElementById('results8').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			document.getElementById('results8').innerHTML = "FAIL";
		}
		for (i=0; i<total4; i++){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results7').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count ++;
		}
		if (d == 7 || d == 8 || d == 9 || d == 10){
				count ++; 
			}	
			else{
			}
			localStorage.setItem("count", count);
			document.getElementById('results7').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		if (count >= resist4){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			document.getElementById('results8').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			document.getElementById('results8').innerHTML = "FAIL";
		}
}