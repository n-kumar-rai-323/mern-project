const router = require("express").Router();


router.get("/home", (req, res, next) => {
    res.json({
        data: "Auth Router",
        message: "This is a sample message",
        status: "success"
    });
});
router.get("/about-us", (req, res, next) => {
    res.json({
        data: "About Us",
        message: "This is a sample message",
        status: "success"
    });
});
module.exports = router;