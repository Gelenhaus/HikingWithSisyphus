const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'username1',
        password: 'password1'
    },
    {
        username: 'username2',
        password: 'password2'
    },
    {
        username: 'username3',
        password: 'password3'
    },
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
