(function(){
  let demoData4 = document.getElementById("demo");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.museum.length; i++){
	theData += `<li>${obj.museum[i].museumpoints}</li>`;
  }
  
  demoData4.innerHTML = theData; 

}());