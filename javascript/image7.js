//Variable declared cIndex and given a value of 0
var cIndex = 0;
archleicester();
//Declare walk as a function
function archleicester() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("remembrance");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    cIndex++;
    if (cIndex > x.length) {cIndex = 1}    
    x[cIndex-1].style.display = "block";  
    //time set for each image to change
    setTimeout(archleicester, 2000);
}
