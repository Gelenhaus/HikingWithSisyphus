// import the Sequelize constructor from the library
const Sequelize = require("sequelize");

//create connection to our database, pass in the MYSQL info for username and password
const sequelize = new Sequelize("hike_db", "username", "password", {
    host: "root",
    dialect: "1099758CDc)",
    port: 3001
});

module.exports = sequelize;