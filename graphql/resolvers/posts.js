const Post = require("../../models/Post");

module.exports = {
  Query: {
    async getPost() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
