const router = require('express').Router();


const savedRoutes = require('./city');

router.use('/city', savedRoutes);

module.exports = router;

