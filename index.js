import express from "express";
const app =express();
const port=3000;

app.get("/",(req,res)=> {
    res.send("<h1>MY NAME IS THE REAL SLIM SHADY</h1>")
})

app.get("/about",(req,res)=> {
    res.send("<h1>MY NAME IS THE REAL britney spears</h1>")
})

app.get("/Respond",(req,res)=> {
    res.send("<h1>MY NAME IS THE REAL Doja Cat</h1>")
})

app.listen(port,()=>{
 console.log(`Server running  on port ${port}.`);

});