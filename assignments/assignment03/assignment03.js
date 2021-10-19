//Preliminary code by Dr. George Corser
//Modified and added to by William Lipscomb

let elem = [];
//Assign table rows to variables
elem[1] = document.getElementById("1");

//Assign a function to the + button
//elem[1].children[4].children[0].onclick = function(){add1(elem[1]);};

//Assign functions to all buttons
for(let i=1; i<=18; i++) {
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function(){add1(elem[i]);};
  elem[i].children[4].children[1].onclick = function(){sub1(elem[i]);};
}
//Side note: I'm not sure if it was intended, but this for loop that conveniently finishes step 6 was left in the CodePen. I modified for 7 and 8 though.

//Create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") {
    elem.children[2].innerHTML = "1";
  } else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

//Create subtraction function
function sub1 (elem){
  if(elem.children[2].innerHTML == "1"){
    elem.children[2].innerHTML = "-";
  } else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

