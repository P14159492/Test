//Variable declared center and given a value of 0
var center = 0;
scentre();
//Declare scentre as a function
function scentre() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("spacecentre");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    center++;
    if (center > x.length) {center = 1}    
    x[center-1].style.display = "block";  
    //time set for each image to change
    setTimeout(scentre, 5000);
}
