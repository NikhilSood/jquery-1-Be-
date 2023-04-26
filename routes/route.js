const express = require('express');
const router = express.Router();

// const { requireAuth } = require('../middleware/requireAuth');
// // const { save_attendance, allAttendence } = require('../controllers/attendanceController');
// // Import the getAttendancePercentage function
const { hi } = require('../controllers/basicController');

// Define a route to retrieve all students and their attendance percentage
router.post('/hi', hi);
// router.post('/farfpd', farfpd);
// router.post('/allAttendance', getAttendancePercentage);
// router.post('/currData', getCurrData);



// router.post('/mark_attendence', save_attendance);
// router.get('/get_allAttendence', allAttendence);



module.exports = router;





