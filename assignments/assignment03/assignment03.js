//Preliminary code by Dr. George Corser
//Modified and added to by William Lipscomb

let elem = [];

elem[19] = document.getElementById("totals");

//Assign table rows to variables and assign functions to all buttons
for(let i=1; i<=18; i++) {
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function(){add1(elem[i]);};
  elem[i].children[4].children[1].onclick = function(){sub1(elem[i]);};
}
//Side note: I'm not sure if it was intended, but this for loop that conveniently finishes step 6 was left in the CodePen. I modified for 7 and 10 though.

//Create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") {
    elem.children[2].innerHTML = "1";
  } else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
  //Update other info
  updateOver(elem);
  updateTotals();
}

//Create subtraction function
function sub1 (elem){
  if(elem.children[2].innerHTML == "1" || elem.children[2].innerHTML == "-"){
    elem.children[2].innerHTML = "-";
  } else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
  //Update other info
  updateOver(elem);
  updateTotals();
}

//Create function to update Over
function updateOver (elem){
  //If there's no score, make sure there's no over
  if (elem.children[2].innerHTML == "-"){
    elem.children[3].innerHTML = "-";
    return;
  }
  
  //Get difference between score and par
  let par = elem.children[1].innerHTML;
  par = Number.parseInt(par);
  let currentScore = elem.children[2].innerHTML;
  currentScore = Number.parseInt(currentScore);
  elem.children[3].innerHTML = currentScore - par;
}
  
//Create function to keep totals updated
function updateTotals () {
  let totalPar = 0;
  let totalScore = 0;
  let totalDiff = 0;
  let totalPlayedPar = 0;
  
  //Loop to calculate total par (useful when the pars can change)
  for(let i=1; i<=18; i++) {
    let par = elem[i].children[1].innerHTML;
    par = Number.parseInt(par);
    totalPar += par;
    if(elem[i].children[2].innerHTML != "-") {
      totalPlayedPar += par;
    }
  }
  
  //Loop to calculate total score
  for(let i=1; i<=18; i++) {
    if(elem[i].children[2].innerHTML != "-") {
      let score = elem[i].children[2].innerHTML;
      score = Number.parseInt(score);
      totalScore += score;
    }
  }
  
  //Calculate total diff
  totalDiff = totalScore - totalPlayedPar;
  
  //Update text
  elem[19].children[1].innerHTML = totalPar;
  elem[19].children[2].innerHTML = totalScore;
  elem[19].children[3].innerHTML = totalDiff;
}
