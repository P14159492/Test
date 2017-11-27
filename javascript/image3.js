var clockIndex = 0;
ctower();

function ctower() {
	var i;
	var x =
	document.getElementsByClassName("clocktower");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    clockIndex++;
    if (clockIndex > x.length) {clockIndex = 1}    
    x[clockIndex-1].style.display = "block";  
    setTimeout(ctower, 2000);
}
