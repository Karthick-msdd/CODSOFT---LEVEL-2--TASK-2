const mongoose = require("mongoose");

const Userschema = new mongoose.schema({
    email: string,
    password: string,
    role: string,

});

module.exports = mongoose.model("User", UserSchema);

