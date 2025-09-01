const bannerCtrl = require("./banner.controller")
const bannerRouter = require('express').Router()


bannerRouter.get("/", bannerCtrl.getAlldataList)

module.exports = bannerRouter