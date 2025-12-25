const article = require('../model/controlArticleModel')

const articleControlController = async (req, res)=>{
    const {showData} = req.body
    const doc = await article.findOne({})
    if(!doc){
        await article.create({showData: showData})
        return res.send(doc)
    }
    doc.showData = showData;
    await doc.save();
    // const updated = await article.findOne({})
    // console.log(updated)
    //   [
    //     { $set: { showData: { $not: "$showData" } } }
    //   ],
    //   {updatePipeline: true }
    // );
    res.send(doc) 
}
  
module.exports = articleControlController