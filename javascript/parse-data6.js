(function(){
  let demoData1 = document.getElementById("demo");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.remembrance.length; i++){
	theData += `<li>${obj.remembrance[i].remembrancepoints}</li>`;
  }
  
  demoData1.innerHTML = theData; 

}());