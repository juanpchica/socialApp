const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      //TODO: Validate user data
      //TODO: Make sure user doesn´t already exist
      //TODO: hash password and create an auth token
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
      });
    },
  },
};
