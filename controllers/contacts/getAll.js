const { Contact } = require("../../models/index");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user; //recieving data set by auth middleware
  const { page = 1, limit = 20 } = req.query; //pagination with fallback values
  const skip = (page - 1) * limit; //mongoDB gets *skip* for pagination
  const dbAnswer = await Contact.find(
    { owner },
    "-createdAt -updatedAt -__v", //removes some extra fields
    { skip, limit } //pagination parameters
  );

  res.json(dbAnswer);
};

module.exports = getAllContacts;
