const bcrypt = require("bcrypt");

const { User } = require("../../models");

const {
  HttpError,
} = require("../../routes/errors/HttpErrors");

const addUser = async (req, res) => {
  const { email, password } = req.body;
  //check if user already exist
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(
      409,
      `User with email ${email} is already registered`
    );
  }
  //hash password to store in db
  const hashedPassword = await bcrypt.hash(
    password,
    10
  );
  const dbAnswer = await User.create({
    email,
    password: hashedPassword,
  });
  //send response to front-end
  res.status(201).json({
    email: dbAnswer.email,
  });
};

module.exports = addUser;
