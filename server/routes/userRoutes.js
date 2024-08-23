const express = require('express')
const jwtAuthMiddleWare = require('../middlewares/jwtAuthMiddleWare')
const User = require('../models/user.model')
const generateToken = require('../middlewares/generateToken')
const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const data = req.body
        const user = await User.findOne({ email: data.email })

        if (user) {
            return res.status(401).json({ message: "Email already exists" })
        }

        const newUser = new User(data)
        const response = await newUser.save()

        const payload = {
            id: response.id,
        }
        if (newUser) {
            generateToken(payload)
            return res.status(201).json({ message: "User created successfully", id: req.id })
        }
        else {
            return res.status(500).json({ message: "Error creating user" })
        }
    } catch (error) {
        console.log("Error in User Sign Up", error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: "Please enter both email and password" });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate and return a token
        const payload = { id: user.id };
        const token = generateToken(payload);

        res.status(200).json({ message: "Login successful", token });
        
    } catch (error) {
        console.log("Error in User Login", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router