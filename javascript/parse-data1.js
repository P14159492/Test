(function(){
   
  let demoData = [];
  demoData[5] = document.getElementById("demo1");
  demoData[4] = document.getElementById("demo2");
  demoData[3] = document.getElementById("demo3");
  demoData[2] = document.getElementById("demo4");
  demoData[1] = document.getElementById("demo5");
  demoData[0] = document.getElementById("demo6");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);

  let i, j;
  let theDataArray = [];

  let len = Object.keys(obj.keylandmarks).length;
  let n = len-1; // for counting down the demoData array

  for (i in obj.keylandmarks){
    let landmarks = obj.keylandmarks[i];
    console.log(`\nOUTER LOOP: ${i}`);
    for (key in landmarks) {
      theDataArray[i] = `<li>${landmarks[key]}</li>`;
      demoData[n].innerHTML += theDataArray[i];
      console.log(`INNER LOOP:\n ${theDataArray[i]}`);
      console.log(`counter(n) = ${n}, dataPoint(i) = ${i},\ndataPoint text(key) = ${key}`);
    }
    n -= 1;
  }
}());
