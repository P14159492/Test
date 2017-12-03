//Variable declared myIndex and given a value of 0
var myIndex = 0;
leicestercath();
//Declare leicestercath as a function
function leicestercath() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("leicestercatherdral");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block"; 
    //time set for each image to change
    setTimeout(leicestercath, 2000);
}
