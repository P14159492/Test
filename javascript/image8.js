var center = 0;
scentre();

function scentre() {
	var i;
	var x =
	document.getElementsByClassName("spacecentre");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    center++;
    if (center > x.length) {center = 1}    
    x[center-1].style.display = "block";  
    setTimeout(scentre, 5000);
}
