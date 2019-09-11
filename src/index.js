const express = require("express");

const app = express();

let array = {};

app.use(express.json());

app.get("/:name", (req, res) => {
	if (array[req.params.name]) {
		array[req.params.name].count++;
	}
	else {
		const count = 1;
		array[req.params.name] = { count };
	}

	res.json(array);
});

app.listen(3000, () => {
	console.log("Listening on:", "http://localhost:3000");
});