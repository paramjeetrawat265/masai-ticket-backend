const { StudentModel } = require("../Models/student.models");

const LoginController = async (req, res) => {
    console.log(login)
    const { email, password } = req.body;
    let isUser = await StudentModel.findOne({ email: email, password: password });

    if (isUser) {
        res.send({ "msg": "Login Successfull", "user": isUser })
    }
    else {
        res.send({ "msg": "Login failed" })
    }
}
module.exports = {
    LoginController
}