(function(){
  let demoData3 = document.getElementById("demo");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.clocktower.length; i++){
	theData += `<li>${obj.clocktower[i].clocktowerpoints}</li>`;
  }
  
  demoData3.innerHTML = theData; 

}());