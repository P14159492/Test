//Variable declared Index and given a value of 0
var Index = 0;
richardthird();
//Declare richardthird as a function
function richardthird() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("richardthethird");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    Index++;
    if (Index > x.length) {Index = 1}    
    x[Index-1].style.display = "block"; 
    //time set for each image to change    
    setTimeout(richardthird, 2000);
}
