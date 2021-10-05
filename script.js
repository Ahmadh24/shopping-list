var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function addDelButton(parent) {
	var buttonElem = parent.appendChild(document.createElement("button"));
	buttonElem.innerHTML = "Delete";
	buttonElem.onclick = function() {
		this.parentElement.remove();
	}}

	

function unorderedList(){
	this.classList.toggle("done");
	
}

for (var i = 0; i < list.length; i++){
	list[i].addEventListener("click", unorderedList);
	addDelButton(list[i]);
}



function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDelButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);