const Post = require("../../models/Post");
const checkAuth = require("../../util/check-auth");
module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPost(_, { postId }) {
      try {
        const post = Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createPost(_, { body }, context) {
      const user = checkAuth(context); //Either return a user or an error
      console.log(user);
      const newPost = new Post({
        username: user.username,
        body,
        createdAt: new Date().toISOString(),
        user: user.id,
      });

      const post = await newPost.save();
      return post;
    },
  },
};
