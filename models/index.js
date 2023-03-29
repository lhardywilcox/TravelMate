const User = require('./User');
const Location = require('./Location');
const Event = require('./Event');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Location, Event };
