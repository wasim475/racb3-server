const announcementModel = require("../../model/announcementModel")

const getAnnouncementDataController = async (req, res) => {
   

    const doc = await announcementModel.findOne({})
    
    res.send(doc)
}

module.exports = getAnnouncementDataController