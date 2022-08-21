const express = require('express');
const app = express();
const port = 80;

app.use("/static1", express.static('static'))

app.get("/", (req, res) => {
    res.send("This is my express app");
});

app.get("/about", (req, res) => {
    res.status(200).send("This is my ABOUT page of express app");
});

app.get("/status", (req, res) => {
    res.status(404).send("This is my STATUS express app");
});

app.post("/about", (req, res) => {
    res.send("This is my POST request of ABOUT page of express app");
});

app.listen(port, () => {
    console.log(`Our application is hosted on ${port}`)
})