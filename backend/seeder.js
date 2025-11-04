const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Load models
const Admin = require('./models/adminModel');
const Guard = require('./models/guardModel');
const Service = require('./models/serviceModel');
const Testimonial = require('./models/testimonialModel');
const JobOpening = require('./models/jobModel');

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Read JSON files
const admins = JSON.parse(fs.readFileSync(`${__dirname}/_data/admins.json`, 'utf-8'));
const guards = JSON.parse(fs.readFileSync(`${__dirname}/_data/guards.json`, 'utf-8'));
const services = JSON.parse(fs.readFileSync(`${__dirname}/_data/services.json`, 'utf-8'));
const testimonials = JSON.parse(fs.readFileSync(`${__dirname}/_data/testimonials.json`, 'utf-8'));
const jobs = JSON.parse(fs.readFileSync(`${__dirname}/_data/jobs.json`, 'utf-8'));

// Import into DB
const importData = async () => {
  try {
    await Admin.create(admins);
    await Guard.create(guards);
    await Service.create(services);
    await Testimonial.create(testimonials);
    await JobOpening.create(jobs);
    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Admin.deleteMany();
    await Guard.deleteMany();
    await Service.deleteMany();
    await Testimonial.deleteMany();
    await JobOpening.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === 'import') {
  importData();
} else if (process.argv[2] === 'destroy') {
  deleteData();
} else {
    console.log('Please use "import" or "destroy" as an argument.');
    process.exit();
}