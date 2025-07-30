import mongoose, { Mongoose, Types } from 'mongoose'
const userSchema = new Mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
        // use a match for regex operation skipping for now
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        default:""
        //can be used for token authentication skipping for now
    }
},
    { timestamps: true }
)
const User = mongoose.model('User',userSchema);
export default User;