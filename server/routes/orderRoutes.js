const express = require('express');
const router = express.Router();
const razorpayInstance = require('../controllers/razorpayController');

router.post('/', async (req, res) => {
    const { amount, currency = 'INR' } = req.body; // Default to INR if currency is not provided

    const options = {
        amount: amount * 100, // Convert amount to paise (e.g., 500 INR = 50000 paise)
        currency,
        receipt: `receipt_order_${Math.random().toString(36).substring(7)}`, // Generate a unique receipt ID
    };

    try {
        const order = await razorpayInstance.orders.create(options);
        res.json(order); // Return the order details to the frontend
    } catch (error) {
        console.error('Error creating Razorpay order:', error.message);
        res.status(500).send({ error: 'Failed to create order. Please try again later.' });
    }
});

module.exports = router;
