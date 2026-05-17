const Admin = require('../models/Admin');
const generateToken = require('../utils/generateToken');
const Contact = require('../models/Contact');
const Booking = require('../models/Booking');
const Review = require('../models/Review');

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const authAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      success: true,
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id)
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
};

// @desc    Get dashboard stats
// @route   GET /api/admin/dashboard
// @access  Private
const getDashboardStats = async (req, res) => {
  try {
    const contactsCount = await Contact.countDocuments();
    const bookingsCount = await Booking.countDocuments();
    const pendingReviews = await Review.countDocuments({ status: 'pending' });
    
    res.status(200).json({
      contactsCount,
      bookingsCount,
      pendingReviews,
      totalMembers: 2045, // Demo stat
      revenue: 45200 // Demo stat
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { authAdmin, getDashboardStats };
