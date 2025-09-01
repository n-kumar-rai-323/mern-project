class BannerController{
    getAlldataList = (req,res,next)=>{
        res.json({
            data: "This is a sample message",
            status: "success"
        })  
    }
}
const BannerCtrl = new BannerController()

module.exports = BannerCtrl