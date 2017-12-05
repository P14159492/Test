(function(){
  let demoData1 = document.getElementById("demo1");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.keylandmarks.length; i++){
	theData += `<li>${obj.keylandmarks[i].leicestercatherdral}</li>`;
  }
  
  demoData1.innerHTML = theData; 


  let demoData2 = document.getElementById("demo2");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj1 = JSON.parse(richardthethird);
 
  let theData1 =  "";

  // populates the chosen element's content with the data:
  
  let a;
  for (a = 0; i < obj1.richardthird.length; a++){
	theData1 += `<li>${obj1.richardthird[a].richardthirdpoints}</li>`;
  }
  
  demoData2.innerHTML = theData1; 

}());
