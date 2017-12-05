//Variable declared myIndex and given a value of 0
var myIndex = 0;
var Index = 1;
var clockIndex = 2;
var newIndex = 3;
var walk = 4;
var walk1 = 5;
var king =6;
var cIndex = 7;

cath();
richardthird();
ctower();
walknew();
walknew1();
power();
archleicester();

//Declare scentre as a function
function cath() {
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
    setTimeout(cath, 2000);
}


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
    if (clockIndex > x.length) {clockIndex = 2}    
    x[clockIndex-2].style.display = "block"; 
    //time set for each image to change    
    setTimeout(ctower, 2000);
}


//Declare scentre as a function
function walknew() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("museum");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    walk++;
    if (walk > x.length) {walk = 1}    
    x[walk-1].style.display = "block";  
    //time set for each image to change
    setTimeout(walknew, 2000);
}

//Declare scentre as a function
function walknew1() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("museum");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    walk1++;
    if (walk1 > x.length) {walk1 = 1}    
    x[walk1-1].style.display = "block";  
    //time set for each image to change
    setTimeout(walknew1, 2000);
}


//Declare scentre as a function
function power() {
  //variables declared
	var i;
	var x =
  //Gets all information that is related to the specfic class
	document.getElementsByClassName("stadium");
		for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    king++;
    if (king > x.length) {king = 1}    
    x[king-1].style.display = "block";  
    //time set for each image to change
    setTimeout(power, 2000);
}

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




