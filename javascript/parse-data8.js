(function(){
  let demoData = document.getElementById("demo8");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(spacecentrefeedback);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.feedbackcentre.length; i++){
	theData += `<li>${obj.feedbackcentre[i].feedbackcentrepoints}</li>`;
  }
  
  demoData.innerHTML = theData; 

}());
