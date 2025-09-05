const express = require("express");
const app = express();
const routerConfig= require("./router.config");
const errorHandling = require("../middlewares/error-handling.middleware");


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

app.use(express.json());
app.use(express.urlencoded())

// app.use("/assets", express.static("./public/"))
app.use("/", express.static("./public/images"))

app.use("/api/v1",routerConfig)

// 404 route
app.use((req,res,next)=>{
   next({status:404, message:"Route Not Found", status:"ERR_NOT_FOUND"})
})

app.use(errorHandling)

module.exports = app;