const router = require('express').Router();

// route to get landing page
router.get('/', async (req, res) => {
    res.render('homepage');
});