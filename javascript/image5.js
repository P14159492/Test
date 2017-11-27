var aIndex = 0;
walk();

function walk() {
	var i;
	var x =
	document.getElementsByClassName("museum");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    aIndex++;
    if (aIndex > x.length) {aIndex = 1}    
    x[aIndex-1].style.display = "block";  
    setTimeout(walk, 2000);
}
