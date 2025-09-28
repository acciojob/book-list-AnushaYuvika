//your JS code here. If required.
let btn = document.querySelector("#submit");

btn.addEventListener("click", function() {
	let title = document.querySelector("#title").value.trim();
	let author = document.querySelector("#author").value.trime();
	let isbn = document.querySelector("#isbn").value.trim();

	if(title === "" || author === "" || isbn === "") {
		alert("Please fill all fields");
		return;
	}

	let tableBody = document.querySelector("#book-list");
	let row = document.createElement("tr");

	row.innerHTML = `
	<td>${title}</td>
	<td>${author}
	<td>${isbn}</td>
	<td><button class="delete">X</button>`;

	tableBody.appendChild(row);

	document.querySelector("#title").value = "";
	document.querySelectro("#author").value = "";
	document.querySelector("#isbn").value= "";
});


document.querySelector("#book-list").addEventListener("click", function(e) {
	if(e.target.classList.contains("delete")) {
		e.target.parentElement.parentElement.remove();
	}	
});