(function(){
  let demoData1 = document.getElementById("demo5");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(kingpower);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.power.length; i++){
	theData += `<li>${obj.power[i].powerpoints}</li>`;
  }
  
  demoData1.innerHTML = theData; 

}());