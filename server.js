const express = require("express");
const path = require("path");

const app = express();

//whenever it has '/static', we are going to simply serve the static directory as per usual, frontend -> static
//without this line, index.js wont working
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
