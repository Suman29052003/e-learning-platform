const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_ID || "rzp_test_BX3KQ7tc1uJhLX", // Fallback to hardcoded key for now
    key_secret: process.env.RAZORPAY_SECRET_KEY || "K2vZjpsBBL42bRZkmlwcUDg8",
});

module.exports = razorpayInstance;
