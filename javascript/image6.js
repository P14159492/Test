var bIndex = 0;
power();

function power() {
	var i;
	var x =
	document.getElementsByClassName("stadium");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    bIndex++;
    if (bIndex > x.length) {bIndex = 1}    
    x[bIndex-1].style.display = "block";  
    setTimeout(power, 2000);
}
