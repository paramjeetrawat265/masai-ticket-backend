const { StudentModel } = require("../Models/student.models");

const registerContoller = async (req, res) => {
    const { name, email, password } = req.body;
    const isUser = await StudentModel.findOne({ email: email });
    if (isUser) {
        res.send({ "msg": "Student Already Exists" });
    }
    else {
        const newUser = new StudentModel({
            name,
            email,
            password
        })
        try {
            newUser.save();
            res.send({ "msg": "Student Registered" })
        }
        catch (err) {
            res.send({ "msg": "err" })
        }
    }
}
module.exports = {
    registerContoller
}