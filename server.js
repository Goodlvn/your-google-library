const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const apiRoutes = require("./routes/api_routes");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use("/api", apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", 
{ useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});