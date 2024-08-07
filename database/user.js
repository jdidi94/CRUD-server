
const {mongoose} = require("mongoose");


let userSchema = mongoose.Schema({
name:{type: "string",required: true},
});

module.exports = mongoose.model("User", userSchema);




