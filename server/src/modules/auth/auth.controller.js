class AuthController {
    register = (req, res, next) =>{
        res.json({
            data: "User registered successfully",
            status: "success"
        })
    }

}
const authCtrl = new AuthController()

module.exports = authCtrl