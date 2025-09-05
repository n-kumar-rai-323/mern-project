const validateData =(data)=>{
    return (req,res,next)=>{
        console.log("I am here");
        next();
    }
}


module.exports= validateData