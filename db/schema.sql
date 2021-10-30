DROP DATABASE IF EXISTS hike_db;
CREATE DATABASE hike_db;
USE hike_db

CREATE TABLE hikes (
    id INTEGER  AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR(30) NOT NULL,
    locations VARCHAR(30) NOT NULL,
    elevation_gain INTEGER,
    distance DECIMAL(5,2),
    difficulty INTEGER,
    dog_friendly BOOLEAN,
    permit BOOLEAN
)

