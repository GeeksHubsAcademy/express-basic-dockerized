import express from "express";

const app = express();

app.get("/api/v1/healthy", (req, res) => {
	res.send("healthy");
});

app.listen(4000, () => {
	console.log("-------------------------");
	console.log("Server running on port 4000");
	console.log("-------------------------");
});
