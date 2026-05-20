const express = require('express');
const router = express.Router();
const { authAdmin, getDashboardStats } = require('../controllers/adminController');
const { getContacts, markContactRead, deleteContact } = require('../controllers/contactController');
const { getBookings } = require('../controllers/bookingController');
const { getAllReviews, approveReview, deleteReview } = require('../controllers/reviewController');
const {
  getPlans, createPlan, updatePlan, deletePlan,
  getTrainers, createTrainer, updateTrainer, deleteTrainer,
  getServices, createService, updateService, deleteService,
  getSchedule, createSchedule, updateSchedule, deleteSchedule
} = require('../controllers/gymController');
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

// Auth
router.post('/login', authAdmin);

// Dashboard
router.get('/dashboard', protect, getDashboardStats);

// Contacts & Bookings
router.get('/contacts', protect, getContacts);
router.put('/contacts/:id/read', protect, markContactRead);
router.delete('/contacts/:id', protect, deleteContact);
router.get('/bookings', protect, getBookings);

// Reviews
router.get('/reviews', protect, getAllReviews);
router.put('/reviews/:id/approve', protect, approveReview);
router.delete('/reviews/:id', protect, deleteReview);

// Plans
router.post('/plans', protect, createPlan);
router.put('/plans/:id', protect, updatePlan);
router.delete('/plans/:id', protect, deletePlan);

// Trainers
router.post('/trainers', protect, upload.single('image'), createTrainer);
router.put('/trainers/:id', protect, upload.single('image'), updateTrainer);
router.delete('/trainers/:id', protect, deleteTrainer);

// Services
router.post('/services', protect, createService);
router.put('/services/:id', protect, updateService);
router.delete('/services/:id', protect, deleteService);

// Schedule
router.post('/schedule', protect, createSchedule);
router.put('/schedule/:id', protect, updateSchedule);
router.delete('/schedule/:id', protect, deleteSchedule);

module.exports = router;
