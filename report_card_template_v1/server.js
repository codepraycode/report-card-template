//jshint esversion:8

const express = require('express');
const manifest = require('./manifest.js');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('index', {
        manifest: manifest
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3020;
}



app.listen(port, function() {
    console.log('Server has started Successfully!.');
});