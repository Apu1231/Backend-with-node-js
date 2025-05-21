const http  = require('http');
const express = require('express');
const app = express();

app.get("/", (req, res)=>{
   return res.send("This is home page" );
})
app.get("/about", (req, res)=>{
   return res.send("This is about page " + " hey " + req.query.name);
})

const myServer = http.createServer(app);
app.listen(8000, ()=>{
    console.log("Server is started ");
})