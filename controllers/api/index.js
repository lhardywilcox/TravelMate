const router = require('express').Router();

const eventRoutes = require('./event');

router.use('/events', eventRoutes);

const savedRoutes = require('./saved');

router.use('/saved', savedRoutes);

module.exports = router;

