var button = document.getElementById("enter");
var input = document.querySelector("input");
var deleteButton = document.querySelector(".delete");

function createElement() {
        var li = document.createElement("li");
        var makeButton = document.createElement("button");
        var ul = document.querySelector("ul")

        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";

        makeButton.className = "delete";
        makeButton.textContent = "delete";
        ul.appendChild(makeButton);
}


function lengthCheck() {
    if(input.value.length > 0) {
        createElement();
    }
}

function keyBoardCheck(e) {
    if(input.value.length > 0 && event.keyCode === 13) {
        createElement()
    }
}

button.addEventListener("click", lengthCheck);

input.addEventListener("keypress", keyBoardCheck);

deleteButton.addEventListener("click", (e) => {
    if (e.target.className === "delete"){
		e.target.parentElement.remove();
	}
});



