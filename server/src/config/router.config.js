const authRouter = require("../modules/auth/auth.router");
const bannerRouter = require("../modules/banners/banner.router");
const router = require("express").Router();


router.use("/auth", authRouter)
router.use("/banner",bannerRouter)
module.exports = router;