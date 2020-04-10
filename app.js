const express = require('express');
const path = require('path');

const app = express();


app.get("/", function(req,res){
    res.sendfile(__dirname + "/public/page/index.html");
});

app.listen(8080, function(){
    console.log("executando");
});
