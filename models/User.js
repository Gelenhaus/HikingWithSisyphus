const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allownull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
        
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.passwrod, 10);
                return newUserData;
                }
            },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'user'
    }
);


module.exports.User;