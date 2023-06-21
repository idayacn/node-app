require('dotenv/config');
const db = {};
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = process.env.db_host;
db.students = require("./student.model.js")(mongoose);
db.products = require("./product.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);

module.exports = db;