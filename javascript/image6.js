//Variable declared bIndex and given a value of 0
var bIndex = 0;
power();
//Declare walk as a function
function power() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("stadium");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    bIndex++;
    if (bIndex > x.length) {bIndex = 1}    
    x[bIndex-1].style.display = "block";  
    //time set for each image to change 
    setTimeout(power, 2000);
}
