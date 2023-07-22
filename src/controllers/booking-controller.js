const { StatusCodes } = require('http-status-codes');

const { BookingService } = require('../services/index');

const bookingService = new BookingService();

const create = async (req, res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully completed booking"
        });  
    } 
    catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            err: error.explanation,
            message: error.message
        });
    }
}

module.exports = { 
    create
}