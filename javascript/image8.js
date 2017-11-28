var space = 0;
scentre();

function scentre() {
	var i;
	var x =
	document.getElementsByClassName("spacecentre");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    space++;
    if (space > x.length) {space = 1}    
    x[space-1].style.display = "block";  
    setTimeout(scentre, 2000);
}
