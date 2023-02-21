const mainPage = require("../../templates/mainPage");

const getMainPage = async (req, res) => {
  res.send(mainPage);
};

module.exports = getMainPage;
