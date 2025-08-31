const authRouter = require("express").Router();


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

module.exports = authRouter;