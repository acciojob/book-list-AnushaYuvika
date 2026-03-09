//your JS code here. If required.
const form = document.getElementById("book-form")
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const booklist = document.getElementById("book-list");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const row = document.createElement("tr");

	const td1 = document.createElement("td");
	td1.textContent = title.value;

	const td2 = document.createElement("td");
	td2.textContent = author.value;

	const td3 = document.createElement("td");
	td3.textContent = isbn.value;

	const btn = document.createElement("td");
	btn.textContent = "❌";

	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	row.appendChild(btn);

	booklist.appendChild(row);

	btn.addEventListener("click", () => {
		row.remove();
	})
	btn.style.cursor = "pointer";

	form.reset();
})