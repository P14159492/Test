var newIndex = 0;
walk();

function walk() {
	var i;
	var x =
	document.getElementsByClassName("museum");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    newIndex++;
    if (newIndex > x.length) {newIndex = 1}    
    x[newIndex-1].style.display = "block";  
    setTimeout(walk, 2000);
}
