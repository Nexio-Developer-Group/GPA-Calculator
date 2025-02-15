const express = require("express");
const path = require("path");

const app = express();
const PORT = 3200;

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`React app is running on http://localhost:${PORT}`);
});
