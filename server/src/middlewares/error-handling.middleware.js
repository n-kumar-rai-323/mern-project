// const errorHandling=(error, req, res, next)=>{
//     let code = error.code || 500;
//     let detail= error.detail || error.details || null;
//     let message = error.message || "Internal Server Error";
//     let status= error.status || "error";
//         res.status(code).json({
//         error:detail,
//         message:message,
//         status:status
//     })
// }

// module.exports=errorHandling

const errorHandling = (error, req, res, next) => {
  console.error(error);

  let code = 500;
  let detail = error.detail || error.details || null;
  let message = error.message || "Internal Server Error";
  let status = error.status || "error";

  // Handle multer errors
  if (error.code === "LIMIT_FILE_SIZE") {
    code = 413; // Payload Too Large
    message = "File size too large!";
  } else if (error.code === "LIMIT_UNEXPECTED_FILE") {
    code = 400; // Bad Request
    message = "Unexpected file field!";
  } else if (error.code === "LIMIT_FILE_COUNT") {
    code = 400;
    message = "Too many files uploaded!";
  } else if (Number.isInteger(error.code)) {
    // custom numeric code (e.g., your 422 in fileFilter)
    code = error.code;
  }

  res.status(code).json({
    error: detail,
    message,
    status,
  });
};

module.exports = errorHandling;
