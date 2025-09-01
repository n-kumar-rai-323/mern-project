const authRouter = require("express").Router();
const validateData = require("../../middlewares/validator.middleware");
const authCtrl = require("./auth.controller")

authRouter.get("/home", (req, res, next) => {
    res.json({
        data: "Auth Router",
        message: "This is a sample message",
        status: "success"
    });
});
authRouter.get("/about-us", (req, res, next) => {
    res.json({
        data: "About Us",
        message: "This is a sample message",
        status: "success"
    });
});


authRouter.post("/register", validateData, authCtrl.register)

module.exports = authRouter;