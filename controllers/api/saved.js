const router = require('express').Router();
const { User, City, Event } = require('../../models');

router.get('/', async (req, res) => {
    const userId = 1
    try {
      const dbCityData = await City.findAll({
        WHERE:{user_id:userId}
      });

      const cities = dbCityData.map((city) =>
        city.get({ plain: true })
      );
      const citiesWithImage = cities.map( async (city, i) => {
        const image = await Event.findOne({
            WHERE:{city_id:city.id}
        })
        return {image:image, ...city}
      })

        console.log(cities);
        res.render('userCities', {
          cities:citiesWithImage,

          // We send over the current 'countVisit' session variable to be rendered
        });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;