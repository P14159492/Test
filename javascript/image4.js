//Variable declared newIndex and given a value of 0
var newIndex = 0;
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
    newIndex++;
    if (newIndex > x.length) {newIndex = 1}    
    x[newIndex-1].style.display = "block"; 
    //time set for each image to change      
    setTimeout(walk, 2000);
}
