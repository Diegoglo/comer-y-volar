const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/messages', verifyToken, messageController.getMessages);
router.post('/contact', messageController.postMessage);
router.post('/appointment', messageController.postHour);
router.get('/getAppointment',messageController.getAppointment);

module.exports = router;
