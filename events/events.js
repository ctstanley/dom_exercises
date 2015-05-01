// Your code here
window.addEventListener("load", function () {
	
	var navi = document.querySelector("#clicker");

	navi.addEventListener("click", function () {
		alert("Congratulations! You are a clicker!");
		console.log(event.target);
	});

	var hey = document.querySelector("#mouser");

	hey.addEventListener("mouseover", function () {
		hey.style.backgroundColor = "yellow";
		console.log(event.target);
	});

	var listen = document.querySelector("#mouser");

	listen.addEventListener("mouseout", function () {
		listen.style.backgroundColor = "green";
		console.log(event.target);
	});

	var link = document.querySelector("#former");

	link.addEventListener("submit", function () {
		alert(link.term.value);
		console.log(event.target);
		event.preventDefault();
	});
//If prevent default is not used, the form is submitted
//to the .html (ie. .html?term='input').
	var hyrule = document.querySelector("#vegetables");

	hyrule.addEventListener("click", function () {
		alert(event.target.innerText);
		console.log(event.target.innerText);
	})
///Cannot read property 'addEventListener' of null, the 
///script is not in the right node.
	console.log(event.target);

})

//1.) If prevent default is not used, the form is submitted
//to the .html (ie. .html?term='input').
//2.) We are getting the input value.
//3.) Load the script that we need to use in order fo the
//code to be executed.





	