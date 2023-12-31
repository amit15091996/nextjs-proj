import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password:{
        type:String,
        required:[true," Password Required!"]
    },
    about:String,
    profileURL:String,
    // address:{
    //     street:String,
    //     city:String,
    //     country:String
    // }
});

export const User = mongoose.model.users||mongoose.model("users",userSchema);