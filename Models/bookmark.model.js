const mongoose = require("mongoose");
const bookmarkSchema = mongoose.Schema({
    category: { type: String },
    title: { type: String },
    message: { type: String },
    user: { type: String },
}, { timestamps: true })
const BookmarkModel = mongoose.model("bookmark", bookmarkSchema);

module.exports = {
    BookmarkModel
}