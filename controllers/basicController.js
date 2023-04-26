// Import the required models
const Register = require('../models/basicModel');

const hi = async (req, res) => {
    console.log("in hi")
    // courseName: "AI for Education",
    // email: $('#email').val(),
    // name: $('#name').val(),
    // mobile: $('#mobile').val(),
    // profession: $('#profession').val(),
    const courseName = req.body.courseName;
    const email = req.body.email;
    const name = req.body.name;
    const mobile = req.body.mobile;
    const profession = req.body.profession;
    const intend = req.body.intend;

    const registerData = new Register({
        courseName, email, name, mobile, profession, intend
    });

    await registerData.save();

    res.status(201).json({ success: true });


}

module.exports = {
    hi
}



