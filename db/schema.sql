DROP DATABASE IF EXISTS hike_db;
CREATE DATABASE hike_db;
USE hike_db

CREATE TABLE hikes (
    id INTEGER  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    location VARCHAR(30) NOT NULL,
    elevation_gain INTEGER,
    length INTEGER,
    difficulty INTEGER,
    dog_friendly BOOLEAN,
    permit BOOLEAN
)
