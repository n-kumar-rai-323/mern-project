
const validateData = (rules) => {
    return async (req, res, next) => {
        try {
            const data = req.body;
            if(!data){
                throw{
                    code: 422,
                    message: "Invalid Data Input",
                    status: "ERR_INVALID_DATA"
                }
            }
            await rules.validateAsync(data, { abortEarly: false })
            next();
        } catch (exception) {
            let msgBag = {}
            if(exception.details){
                exception.details.map((error)=>{
                   msgBag[error.path[0]] = error.message
                })
            }
            next(
                {
                    code:exception.code || 422,
                    message: exception.message || "Validation Error",
                    status: "ERR_VALIDATION",
                    details: msgBag
                }
            )
        }
    }

}
module.exports = validateData