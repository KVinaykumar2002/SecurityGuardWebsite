const express = require('express');
const { protect } = require('../middleware/authMiddleware');

// Import controllers
const { createGuard, getGuards, updateGuard, deleteGuard } = require('../controllers/guardController');
const { createService, updateService, deleteService } = require('../controllers/serviceController');
const { getApplications, deleteApplication } = require('../controllers/applicationController');
const { getEnquiries, deleteEnquiry } = require('../controllers/enquiryController');
// Add other controllers as you create them

const router = express.Router();

// All routes in this file are protected
router.use(protect);

// Guard Routes
router.route('/guards').get(getGuards).post(createGuard);
router.route('/guards/:id').put(updateGuard).delete(deleteGuard);

// Service Routes
router.route('/services').post(createService); // GET is public
router.route('/services/:id').put(updateService).delete(deleteService);

// Application Routes
router.route('/applications').get(getApplications);
router.route('/applications/:id').delete(deleteApplication);

// Enquiry Routes
router.route('/enquiries').get(getEnquiries);
router.route('/enquiries/:id').delete(deleteEnquiry);


// Add routes for Testimonials, Jobs, Management etc. here following the same pattern.
// Example:
// const { createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');
// router.route('/testimonials').post(createTestimonial);
// router.route('/testimonials/:id').put(updateTestimonial).delete(deleteTestimonial);

module.exports = router;
