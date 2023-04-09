"use strict";
const Post = require("./post");

async function init() {
  await Post.sync();
}
init();
module.exports = {
  Post,
};
