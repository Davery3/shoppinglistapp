//Variables

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.getElementById('mainlist');
var li = document.getElementsByTagName('li');

//Calling Functions

liClassChange();
deleteListItem();

//Functions

function createListElement(){
	if (input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		var button = document.createElement('button');
		li.appendChild(button);
		button.appendChild(document.createTextNode("Delete"));
		input.value = "";
		liClassChange();
		deleteListItem();
	}
}

function addElement(){
	if(input.value.length > 0 && event.keyCode === 13){
		createListElement();
	}
}

function liClassChange(){
	for( i=0; i<li.length; i++){
	li[i].addEventListener('click', lineThroughClass)
	document.getElementById("mainlist").style.cursor = "pointer";
	}
}

function lineThroughClass(){
	this.classList.toggle('done');
}

function deleteListItem(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}

//Event Listeners

button.addEventListener('click', createListElement);
input.addEventListener('keypress', addElement);
