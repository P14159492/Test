(function(){
  let demoData = document.getElementById("demo8");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(rugbyfeedback);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.feedbackrugby.length; i++){
	theData += `<li>${obj.feedbackrugby[i].feedbackrugbypoints}</li>`;
  }
  
  demoData.innerHTML = theData; 

}());
