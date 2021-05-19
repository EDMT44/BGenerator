var css =document.querySelector("h3");
var color1 =document.getElementById("c1");
var color2 =document.getElementById("c2");
var body = document.querySelector("body");
function setGradient(){
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value 
	+ ")";
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);