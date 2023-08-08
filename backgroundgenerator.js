var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("background");
var refresh = document.getElementById("button");





refresh.addEventListener("click" , function(){
	body.style.background="white";

	
})



input1.addEventListener("input", function(){
chooseColour();
	
	
})

function chooseColour(){
	body.style.background="linear-gradient(to right, " + input1.value  + ", " + input2.value + ")";
}




input2.addEventListener("input", function(){
	chooseColour();
})