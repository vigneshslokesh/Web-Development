import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send("Hello World!!");
});

app.get("/about", (req,res)=>{
    res.send("<h1>Hi there,</h1><p>My name is James Bond.</p>");
});

app.get("/contact-me", (req,res)=>{
    res.send("<h1>Contact me</h1><p>You know the number, if not you are in the wrong place.</p>");
});


app.listen(port, () =>{
    console.log("Server Running");
})