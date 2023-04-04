const { Painting } = require('../models');

const paintingdata = [
  {
    username: 'theBestUser',
    email: 'theBestUser@email.com',
    password: 'hashedPassword',
    profile_img_url: null,
    address: null,
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
