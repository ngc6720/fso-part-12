const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const { MONGO_URL } = require("../util/config");

console.log(MONGO_URL);

MONGO_URL && mongoose.connect(MONGO_URL);

module.exports = {
  Todo,
};
