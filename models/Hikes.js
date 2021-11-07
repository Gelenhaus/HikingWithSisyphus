const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hikes extends Model {}

Hikes.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    elevation_gain: {
        type: DataTypes.STRING,
        allowNull: false
    },
     distance : {
         type: DataTypes.STRING,
         allowNull: false
     },
     difficulty: {
         type: DataTypes.STRING,
         allowNull: false
     },
     dog_friendly: {
         type: DataTypes.STRING,
         allowNull: false
     },
     permit: {
         type: DataTypes.STRING,
         allowNull: false
     },
     user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'hikes'
}
);

module.exports = Hikes;


//CREATE TABLE hikes (
//    id INTEGER  AUTO_INCREMENT PRIMARY KEY,
//    names VARCHAR(30) NOT NULL,
//    locations VARCHAR(30) NOT NULL,
//    elevation_gain INTEGER,
//    distance DECIMAL(5,2),
//    difficulty INTEGER,
//    dog_friendly BOOLEAN,
//    permit BOOLEAN NOT NULL
//)
