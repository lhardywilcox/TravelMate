const router = require('express').Router();
const { User, City, Event } = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.body);
    const eventData = await Event.findOne({where:{URL:req.body.URL}});
    console.log(eventData);
    if(!eventData) {
        Event.create({name:req.body.cityName, user_id: 1, image:req.body.image})
    }
})

module.exports=router