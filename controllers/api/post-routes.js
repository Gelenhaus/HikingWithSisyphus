//how to connect to the correct files using the dot notation?
const sequelize = require('.../config/connection.js');

// This is wrong
const { Post, User, Comment } = require('.../models');