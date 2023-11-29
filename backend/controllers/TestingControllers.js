const { StatusCodes } = require('http-status-codes');
const Testing = require('./../models/TestingModel');
const mongoose = require('mongoose');

const handleTesting = async (req, res, next) => {
    try {
        const results = await Testing.find({})
        res.status(StatusCodes.ACCEPTED).json({ msg: 'Tests', tests: results })
    } catch (error) {
        console.error(error)
        res.status(StatusCodes.BAD_GATEWAY).json({
            msg: 'Failed to fetch test',
            error
        })
    }
}

const createTesting = async (req, res, next) => {
    try {
        const {title, description} = req.body
        console.log(title , description);
        const test = new Testing({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description
        });
        await test.save()
        res.status(StatusCodes.ACCEPTED).json({
            msg: 'Successfully created a testing',
            test
        })
    } catch (error) {
        res.status(StatusCodes.BAD_GATEWAY).json({
            mgs: 'Failed to create a testing',
            error:error.message
        })
    }
}

module.exports = { handleTesting, createTesting }