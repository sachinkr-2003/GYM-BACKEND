const express = require('express');
const router = express.Router();
const { getPlans, getTrainers, getServices, getSchedule } = require('../controllers/gymController');

router.get('/plans', getPlans);
router.get('/trainers', getTrainers);
router.get('/services', getServices);
router.get('/schedule', getSchedule);

module.exports = router;
