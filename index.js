const express = require('express'),
    app = express();

app.use("/", express.static("./dist")).listen(8080, ()=>{console.log("Server runing in http://localhost:8080")});