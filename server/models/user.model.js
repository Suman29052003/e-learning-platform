const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    // phoneNumber: {
    //     type: Number,
    //     required: true
    // },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })


userSchema.pre('save', async function (next) {
    try {
        const user = this;
        const salt = 10;
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, salt);
        }
        next()
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    try {
        const isValid = await bcrypt.compare(this.password, enteredPassword);
        return isValid;
    } catch (error) {
        next(error)
    }
}

const User = mongoose.model('User', userSchema)
module.exports = User