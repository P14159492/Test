var cIndex = 0;
archleicester();

function archleicester() {
	var i;
	var x =
	document.getElementsByClassName("remembrance");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    cIndex++;
    if (cIndex > x.length) {cIndex = 1}    
    x[cIndex-1].style.display = "block";  
    setTimeout(archleicester, 2000);
}
