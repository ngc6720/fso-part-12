require("dotenv").config();

const PORT = process.env.PORT;
let MONGODB_URI;
switch (process.env.NODE_ENV) {
  case "development":
    MONGODB_URI = process.env.MONGODB_URI_DEV;
    break;
  case "test":
    MONGODB_URI = process.env.MONGODB_URI_TEST;
    break;
  case "production":
    MONGODB_URI = process.env.MONGODB_URI_PROD;
    break;
  default:
    throw new Error("NODE_ENV env variable missing");
}

module.exports = { PORT, MONGODB_URI };
