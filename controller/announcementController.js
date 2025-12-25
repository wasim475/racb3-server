const announcementModel = require("../model/announcementModel")

const updateAnnouncementController = async (req, res) => {
    const { announcement } = req.body

    // console.log(announcement)

    const doc = await announcementModel.findOne({})
    console.log(doc)
    if(!doc){
        const newDoc = await announcementModel.create({message:announcement})
       return res.send(newDoc)
    }

    doc.message = announcement
    await doc.save()
    res.send(doc)
}

module.exports = updateAnnouncementController