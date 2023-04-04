const router = require('express').Router();
const { User, City, Event } = require('../../models');

router.get('/', async (req, res) => {
    console.log(req.session);
    const userId = 1
    try {
      const dbCityData = await City.findAll({
        WHERE:{user_id:userId}
      });

      const cities = dbCityData.map((city) =>
        city.get({ plain: true })
      );

        console.log(cities);
        res.render('userCities', {cities});

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/city/:id', async (req, res) => {
      try {
    const dbCityData = await City.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          attributes: [
            'id',
            'event_name',
            'URL',
            'image',
            'starting_date',
            'price_range',
            'genre',
            'location',
            'city_id',
          ],
          WHERE:{city_id:req.params.id}
        },
      ],
    });

    const city = dbCityData.get({ plain: true });
    res.render('savedEachCity', { city });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  module.exports = router;