const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
})
const StudentModel = mongoose.model("student", studentSchema);

module.exports = {
    StudentModel
}