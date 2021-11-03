const sequelize = require('../config/connection')
const { Hikes } = require('../models');
//const { sequelize } = require('../models/Post');

const hikesData = [
  {
    name: 'Angels Landing',
    location: 'National Park Springdale, UT ',
    elevation_gain: '1,617 ft',
    distance: '4.4 mi',
    difficulty: 'Hard',
    dog_friendly: 'No',
    permit: 'No',
    user_id: 1
  },
  {
    name: 'The Wave',
    location: 'Vermillion Cliffs Kanab, UT',
    elevation_gain: '1,233 ft',
    distance: '6.7 mi',
    difficulty: 'Moderate',
    dog_friendly: 'Yes',
    permit: 'Yes',
    user_id: 2
  },
  {
    name: 'Delicate Arch',
    location: 'Arches National Park Moab, UT',
    elevation_gain: '629 ft',
    distance: '3.2 mi',
    difficulty: 'Moderate',
    dog_friendly: 'No',
    permit: 'No',
    user_id: 3
  },
  {
    name: 'Mount Timpanogos',
    location: 'American Fork, UT',
    elevation_gain: '4,490 ft',
    distance: '14 mi',
    difficulty: 'Hard',
    dog_friendly: 'Yes',
    permit: 'No',
    user_id: 3
  }

]

const seedHikes = () => Hikes.bulkCreate(hikesData);

module.exports = seedHikes;

//('Angels Landing', 'Zions National Park, Springdale,UT', '1,617 ft','4.4 mi', 'Hard', 'No', 'No'),
//('The Wave', 'Vermillion Cliffs, Kanab, UT', '1,233 ft', '6.7 mi', 'Moderate', 'Yes', 'Yes'),
//('Delicate Arch', 'Arches National Park Moab, UT','629 ft.', '3.2 Miles', 'Moderate', 'No', 'No'),
//('Mount Timpanogos', 'American Fork, UT', '4,390 ft', '14 mi', 'Hard', 'Yes', 'No'),
//('Diamond Fork Hot Springs Trail', 'Springville, UT', '700 ft', '4.5 mi', 'Easy', 'Yes', 'No'),
//('Mount Olympus', 'Salt Lake City, UT', '4,156 ft', '7.8 mi', 'Hard', 'Yes', 'No'),
//('Lake Blanche', 'Big Cottonwood Canyon, SLC,UT', '2,808 ft', '6.8 mi', 'Hard', 'No', 'No'),
//('Donut Falls', 'Big Cottonwood Canyon, SLC,UT', '308 ft', '1.5 mi', 'Easy', 'No', 'No'),
//('The Living Room', 'Salt Lake City, UT', '1,003 ft', '2.8 mi', 'Moderate', 'Yes', 'No'),
//('Stewart Falls', 'Aspen Grove, UT', '646 ft', '3.4 mi', 'Moderate', 'Yes', 'No')