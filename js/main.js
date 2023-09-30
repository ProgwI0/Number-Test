let num = 0;
function plus(){
  num += 1
  document.getElementsByClassName("num")[0].innerHTML = num;
  }
function doubleplus(){
  num += 2
  document.getElementsByClassName("num")[0].innerHTML = num;
  }
function multiplyontwo(){
  num *= 2
  document.getElementsByClassName("num")[0].innerHTML = num;
  }
function reset(){
  num = 0;
  document.getElementsByClassName("num")[0].innerHTML = num;
}
