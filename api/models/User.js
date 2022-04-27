const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    phone: String,
    email: String,
    name: String,
    password: String,
});

mongoose.model("users", userSchema); 
