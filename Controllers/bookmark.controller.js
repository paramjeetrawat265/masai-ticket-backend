const { BookmarkModel } = require("../Models/bookmark.model");


const PostBookmarkController = async (req, res) => {
    console.log("bookmark")
    const {email,category,title}=req.body;
    const data=await BookmarkModel.findOne({email:email,category:category,title:title})
    if(data){
        res.send({ msg: "Bookmark Exist" })
    }
    else{
        try {
            const data = await BookmarkModel(req);
            data.save();
            res.send({ msg: "Bookmarked Successfully" })
        }
        catch (err) {
            res.send({ msg: "Bookmark not happened" })
        }
    }
}

const GetBookmarkController = async (req, res) => {
    const { email } = req.body;
    const data = await BookmarkModel.find({ email: email });
    if (data) {
        res.send({ msg: 'data found', data: data })
    }
    else {
        res.send({ msg: "data not found" })
    }
}
module.exports = { GetBookmarkController, PostBookmarkController }