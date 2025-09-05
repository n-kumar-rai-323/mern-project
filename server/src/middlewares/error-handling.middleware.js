const errorHandling=(error, req, res, next)=>{
    let code = error.code || 500;
    let detail= error.detail || error.details || null;
    let message = error.message || "Internal Server Error";
    let status= error.status || "error";
        res.status(code).json({
        error:detail,
        message:message,
        status:status
    })
}

module.exports=errorHandling