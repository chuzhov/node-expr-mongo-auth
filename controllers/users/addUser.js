const bcrypt = require("bcrypt");

const { User } = require("../../models");

const {
  HttpError,
} = require("../../routes/errors/HttpErrors");

const addUser = async (req, res) => {
  const { email, name, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(
      409,
      `User with email ${email} is already registered`
    );
  }

  const hashPassword = await bcrypt.hash(
    password,
    10
  );

  const result = await User.create({
    name,
    email,
    password: hashPassword,
  });

  res.status(201).json({
    email: result.email,
    name: result.name,
  });
};

module.exports = addUser;
