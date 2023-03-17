const express = require('express');

const { authAdmin, verify } = require('../controller/adminUserController');
const router = express.Router()
router.route('/admin/').post(authAdmin)
router.route('/admin/jwt').post(verify)

module.exports = router