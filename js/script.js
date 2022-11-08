function init(){
//add your javascrip between these two lines of code
  function updateText() {
	  var userInput = document.getElementById('entryinput').value;
	  document.getElementById("textoutput").innerText = userInput;
	  alert("Michael Szewczyk: " + userInput);
  }
  
  var button = document.getElementById("entrybutton");
  button.addEventListener("click",updateText);
}
window.addEventListener('load', init);