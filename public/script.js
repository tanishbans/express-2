function getData() {
	fetch("http://127.0.0.1:3000/persons")
		.then((response) => response.json())
		.then((data) => renderData(data))
		.catch((error) => console.log("Error fetching data: ", error));
}

function renderData(data) {
	let names = [];
	names.push(`<p>Total number of persons = ${data.length}:</p>`);
	for (const person of data) {
		names.push(`<p>${person.name}</p>`);
	}
	names = names.join("");
	document.getElementById("data").innerHTML = names;
}
