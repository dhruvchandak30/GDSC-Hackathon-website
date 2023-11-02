const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
app.get("/",(req,res)=>{
    res.send("GDSC HackThon Website");
})
app.listen(port,()=>{
    console.log("App Started At "+ port);
})