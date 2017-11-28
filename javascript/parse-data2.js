(function(){
  let demoData2 = document.getElementById("demo2");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(richardthethird);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.richardthird.length; i++){
	theData += `<li>${obj.richardthird[i].richardthirdpoints}</li>`;
  }
  
  demoData2.innerHTML = theData; 

}());