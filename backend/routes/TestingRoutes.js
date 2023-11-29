const express = require('express')
const { handleTesting ,createTesting} = require('./../controllers/TestingControllers')


const router = express.Router()
router.route('/').get(handleTesting).post(createTesting)


module.exports = router