const User = require("../models/user.model");
const Hospital = require("../models/hospital.model");
const bcrypt = require("bcrypt")

exports.registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10)
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    })
    res.json({ status: "ok" });
  } catch (err) {
    res.json({status: 'error', error: 'Duplicate email'})
  }
}

exports.registerHospital = async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await Hospital.create({
      name: req.body.name,
      admin: req.body.admin,
      email: req.body.email,
      address: req.body.address,
      password: newPassword,
      avatar: req.body.avatar,
      blood: req.body.blood,
      tests: req.body.tests,
      oxygen: req.body.oxygen,
      beds: req.body.beds
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
};
