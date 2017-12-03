//Variable declared aIndex and given a value of 0
var aIndex = 0;
walk();
//Declare walk as a function
function walk() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("museum");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    aIndex++;
    if (aIndex > x.length) {aIndex = 1}    
    x[aIndex-1].style.display = "block"; 
    //time set for each image to change         
    setTimeout(walk, 2000);
}
