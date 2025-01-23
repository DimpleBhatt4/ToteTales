import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: [true,'Please provide a username'],
        unique: true
    },
    email:{
        type: String,
        required: [true,'Please provide an email'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'Please provide a password'],
    },
    isVerified:{
        type: Boolean,
        default:false
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
    forgotPassWordToken: String,
    forgotPassWordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})
// Next.js uses Edge computing rather than having it's own server hence we check if it is connecting to the MongoDB for the first time or not
// Create new model with name 'users' if not already present
const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User