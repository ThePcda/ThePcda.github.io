let myVar = 45;

const mySpan = document.getElementById("mySpan");

mySpan.addEventListener("click", mySpanFunction);

function mySpanFunction() {
  mySpan.innerHTML = "Clicked!";
}
