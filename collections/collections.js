//
// Part 1
//
var bord = document.querySelectorAll("li")

for (var i = 0; i < bord.length; i++) {
	var borderCh = bord[i];
	borderCh.style.borderBottom = '2px solid black';
};

//
// Part 2
//
var redRum = document.querySelectorAll(".datatype");

for(var i =0; i < redRum.length; i++) {
	var red = redRum[i];
	red.style.color = "red";
}


//
// Part 3
//
var funBlue = document.querySelectorAll(".function");

for(var i =0; i < funBlue.length; i++) {
	var blue = funBlue[i];
	blue.style.color = "blue";
}
