const { Router } = require("express");
const { PostBookmarkController, GetBookmarkController } = require("../Controllers/bookmark.controller");

const BookmarkRoute = Router();
BookmarkRoute.post("/", PostBookmarkController);
BookmarkRoute.get("/", GetBookmarkController);

module.exports = {
    BookmarkRoute
}