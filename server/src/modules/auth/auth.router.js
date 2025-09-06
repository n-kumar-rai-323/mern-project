const Joi = require("joi");
const authRouter = require("express").Router();
const validateData = require("../../middlewares/validator.middleware");
const authCtrl = require("./auth.controller");
const uploader = require("../../middlewares/filehandling.middleware");

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




const loginRules = Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().min(8).max(25).required()
            })

const RegisterDTO= Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(25).required(),
    confirmPasswrd: Joi.ref("password"),
    role: Joi.string().allow('customer','seller').default('customer') ,
    phone: Joi.string().allow(null,'').optional().default('null'),  
    address: Joi.string().allow(null,'').optional().default('null'),
    image:Joi.string().allow(null,'').optional().default('null')

})

authRouter.post("/login", validateData(loginRules),authCtrl.login);
authRouter.post("/register",uploader().single("image"), validateData(RegisterDTO), authCtrl.register)

module.exports = authRouter;