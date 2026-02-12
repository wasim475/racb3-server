const classes = require("../../model/articleSchema");
const notes = require("../../model/noteSchema");

const searchController = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const regex = new RegExp(search, "i"); // case-insensitive

    const classData = await classes
      .find({
        $or: [
          { title: regex },
          { content: regex }
        ]
      })
      .lean();

    const noteData = await notes
      .find({
        $or: [
          { title: regex },
          { content: regex }
        ]
      })
      .lean();

    const allData = [...classData, ...noteData];

    res.json(allData);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = searchController;
