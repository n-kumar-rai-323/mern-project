class AuthController {
    register = (req, res, next) =>{

        res.json({
            data:{
                body:req.body,
                headers:req.headers
            }
        })
    }

}
const authCtrl = new AuthController()

module.exports = authCtrl