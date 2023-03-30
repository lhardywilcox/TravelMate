const express = require("express");
const destinationController = require("../controllers/destinationController");

const router = express.Router();

router.get("/", destinationController.getAll);
router.get("/:id/activities", destinationController.getActivities);

module.exports = router;
