var Index = 0;
richardthird();

function richardthird() {
	var i;
	var x =
	document.getElementsByClassName("richardthethird");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    Index++;
    if (Index > x.length) {Index = 1}    
    x[Index-1].style.display = "block";  
    setTimeout(richardthird, 2000);
}
