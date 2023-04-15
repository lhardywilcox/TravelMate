
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

const savedRoutes = require('./saved');

router.use('/saved', savedRoutes);

const eventRoutes = require('./event');

router.use('/event', eventRoutes);
// changed events to event in 16
module.exports = router;


