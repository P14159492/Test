//Variable declared clockIndex and given a value of 0
var clockIndex = 0;
ctower();
//Declare ctower as a function
function ctower() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("clocktower");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    clockIndex++;
    if (clockIndex > x.length) {clockIndex = 1}    
    x[clockIndex-1].style.display = "block";  
    //time set for each image to change  
    setTimeout(ctower, 5000);
}
