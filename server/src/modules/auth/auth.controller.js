class AuthController {
    register = (req, res, next) => {
        const result = req.body;
        const image = req.file;
        res.json({
            data: {
                body: result,
                image,
                message: "Registration Successful",
                status: "success"
            }
        })
    }

    login = (req, res, next) => {

        let result = req.body;
        res.json({
            data: {
                body: result,
                message: "Login Successful",
                status: "success"
            }
        })
    }
}
const authCtrl = new AuthController()

module.exports = authCtrl