const express = require('express');
const router = express.Router();
const { authAdmin, getDashboardStats } = require('../controllers/adminController');
const { getContacts } = require('../controllers/contactController');
const { getBookings } = require('../controllers/bookingController');
const { getAllReviews, approveReview, deleteReview } = require('../controllers/reviewController');
const { protect } = require('../middlewares/authMiddleware');

// Auth
router.post('/login', authAdmin);

// Dashboard
router.get('/dashboard', protect, getDashboardStats);

// Contacts & Bookings
router.get('/contacts', protect, getContacts);
router.get('/bookings', protect, getBookings);

// Reviews
router.get('/reviews', protect, getAllReviews);
router.put('/reviews/:id/approve', protect, approveReview);
router.delete('/reviews/:id', protect, deleteReview);

module.exports = router;
