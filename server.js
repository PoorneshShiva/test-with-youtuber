const express = require("express");
const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());

app.get("/", (req, res) => {
	res.send({ name: "Poornesh" });
});

app.listen(PORT, console.log(`Server is stating at ${PORT}`));
