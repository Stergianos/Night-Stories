function roll(){
	var count = 0;
		for (i=0; i<total; i++){
			var d = Math.floor(Math.random() * 10 ) + 1;
		while (d==10){
			document.getElementById('results').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;"; // use += to get all the values from loop
			var d = Math.floor(Math.random() * 10 ) + 1;
			count ++;
		}
		if (d == 8 || d == 9 || d == 10){
				count ++; 
			}	
			else{
			}
			localStorage.setItem("count", count);
			document.getElementById('results').innerHTML +=  d + "&nbsp;&nbsp;&nbsp;";
		}
		document.getElementById('results2').innerHTML = "total successes = " + count;
		if (count >= resist){
			var finalresult = 1;
			localStorage.setItem("final", finalresult);
			//document.getElementById('results2').innerHTML = "SUCCESS";
		}
		else{
			var finalresult = 0;
			localStorage.setItem("final", finalresult);
			//document.getElementById('results2').innerHTML = "FAIL";
		}
}
