(function(){
  let demoData1 = document.getElementById("demo1");
  let demoData2 = document.getElementById("demo2");
  let demoData3 = document.getElementById("demo3");
  let demoData4 = document.getElementById("demo4");
  let demoData5 = document.getElementById("demo5");
  let demoData6 = document.getElementById("demo6");
  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);
 
  let theData1 =  "";
  let theData2 =  "";
  let theData3 =  "";
  let theData4 =  "";
  let theData5 =  "";
  let theData6 =  "";
  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.keylandmarks.length; i++){
	theData1 += `<li>${obj.keylandmarks[i].leicestercatherdral}</li>`;
	theData2 += `<li>${obj.keylandmarks[i].richardthirdpoints}</li>`;
	theData3 += `<li>${obj.keylandmarks[i].clocktowerpoints}</li>`;
	theData4 += `<li>${obj.keylandmarks[i].museumpoints}</li>`;
	theData5 += `<li>${obj.keylandmarks[i].powerpoints}</li>`;
	theData6 += `<li>${obj.keylandmarks[i].remembrancepoints}</li>`;
  }
  
  demoData1.innerHTML = theData1; 
  demoData2.innerHTML = theData2; 
  demoData3.innerHTML = theData3;
  demoData4.innerHTML = theData4;
  demoData5.innerHTML = theData5;
  demoData6.innerHTML = theData6;
}());


