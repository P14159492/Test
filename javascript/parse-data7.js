(function(){
  let demoData = document.getElementById("demo7");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(leicestercatherdealfeedback);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.feedbackcath.length; i++){
	theData += `<li>${obj.feedbackcath[i].feedbackcathpoints}</li>`;
  }
  
  demoData.innerHTML = theData; 

}());
