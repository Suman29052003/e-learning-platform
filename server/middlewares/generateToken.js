const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    try {
        const secretKey = process.env.JWT_SECRET
        return jwt.sign(payload, secretKey, { expiresIn: '30d' })
    } catch (error) {
        console.log("Error in Token Generation", error)
    }

}

module.exports = generateToken