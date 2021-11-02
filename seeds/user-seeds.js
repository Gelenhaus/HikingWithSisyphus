const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'username1',
        password: 'password1'
    },
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
