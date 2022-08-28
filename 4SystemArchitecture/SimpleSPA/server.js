const express = require("express");
const path = require("path");

const app = express();

const directory = path.resolve(__dirname, "dist");

app.use(express.static(directory));

/* Redirect all routes to our index.html file */
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(directory, "index.html"));
});

app.listen(process.env.PORT || 8080, () => console.log("Server running..."));