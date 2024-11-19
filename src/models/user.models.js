import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true     // makes it easier to search
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,   // cloudinary url
            required: true,
        },
        coverImage: {
            type: String
        },
        watchHistory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "WatchHistory",
            }
        ],
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        refreshToken: {
            type: String
        }
    },
{timestamps: true})

// for encrypting password in the DB
userSchema.pre("save", async function (next) {      // middleware accessed (remember: req, res, next)
    if(!this.isModified("password")) return next(); // to avoid hashing password on all changes

    this.password = bcrypt.hash(this.password, 10)  // 10 is for hash rounds
    next()
})

// to match with actual password we need methods
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// to securely manage user sessions and allow access to protected resources
userSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            _id: this._id,
            password: this.password,
            email: this.email,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema)