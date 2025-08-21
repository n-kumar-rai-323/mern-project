const express = require("express");
const app = express();
const routerConfig= require("./router.config")


app.get("/",(req,res,next)=>{
    let data = {
        data: "health Check URL",
        message: "This is a sample message",
        status: "success"
    }
    res.json(data);
})
app.get("/activate/:token",(req,res,next)=>{
    res.json({
        data:{
           params: req.params,
           query: req.query
        },
        message: "This is a sample message",
        status: "success"   
    })
})


app.use("/api/v1",routerConfig)


module.exports = app;