const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

router.get('/', flightsCtrl.index);

//Get flights /new
router.get('/new', flightsCtrl.new);

//flights
router.get('/:id', flightsCtrl.show);

//POST flights
router.post('/', flightsCtrl.create);

module.exports = router;
