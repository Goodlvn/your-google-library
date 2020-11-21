const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost${PORT}`);
})


