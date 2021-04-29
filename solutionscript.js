var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.getElementById('mainlist');
var li = document.getElementsByTagName('li')

button.addEventListener('click', Onclick);
input.addEventListener('keypress', addElement);


liEvent();
buttonListElement();

//Has cursor become pointer when hovering over list
document.getElementById("mainlist").style.cursor = "pointer";

function checkInputlength(){
	return input.value.length;
}


function createListElement(){

		var li = document.createElement("li");
		var button = document.createElement('button');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		li.appendChild(button)
		button.innerHTML = "Delete";
		input.value = "";

		liEvent();
		buttonListElement();
}



function Onclick(){

	if(checkInputlength() > 0){
		createListElement();
	}

}


function addElement(){

	if(checkInputlength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

function liEvent(){
	for( i=0; i<li.length; i++){
	li[i].addEventListener('click', changeClass)
	}
}

function changeClass(){
	this.classList.toggle('done');
}

function buttonListElement(){
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
