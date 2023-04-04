const { response } = require('express');

const router = require('express').Router();

router.get('/:city', async (req, res) => {
    try {
        // "https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey="+process.env.API_KEY+"&city="+city
        const city = req.params.city;
        const dataUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + process.env.API_KEY + "&city=" + city

        fetch(dataUrl).then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
            let resultData = data._embedded.events;
            res.render('results', { resultData });
            //res.status(200).json(data._embedded.events);
        })


    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
})

module.exports = router;