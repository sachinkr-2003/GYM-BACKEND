const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const existingAdmin = await Admin.findOne({ email: 'admin@ironcore.gym' });
    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit();
    }

    const admin = await Admin.create({
      name: 'Super Admin',
      email: 'admin@ironcore.gym',
      password: 'admin123'
    });

    console.log('Admin created successfully:', admin);
    process.exit();
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
