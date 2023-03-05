const express = require('express');
const { registerComplaint, getComplaint, deleteComplaint } = require('../controller/complaintController');
const router = express.Router()
router.route('/complaint/new').post(registerComplaint);
router.route('/complaint/').get(getComplaint)
router.route('/complaint/:id').delete(deleteComplaint);
module.exports = router