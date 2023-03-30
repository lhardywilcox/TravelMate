const Destination = require("../models/destination");

const destinationController = {
	getAll: function (req, res) {
		Destination.getAll((err, results) => {
			if (err) throw err;

			res.render("destinations", { destinations: results });
		});
	},
	getActivities: function (req, res) {
		const id = req.params.id;

		Destination.getActivities(id, (err, results) => {
			if (err) throw err;

			res.render("activities", { activities: results });
		});
	},
};

module.exports = destinationController;
