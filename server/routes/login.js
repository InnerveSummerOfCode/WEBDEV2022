const User = require("../models/user.model");
const Hospital = require("../models/hospital.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.loginUSER = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "aidintimesecret123@@@@@"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
};

exports.loginHOSPITAL = async (req, res) => {
  const hospital = await Hospital.findOne({
    email: req.body.email
  })

  if(!hospital) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    hospital.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: hospital.name,
        email: hospital.email,
        admin: hospital.admin
      },
      "aidintimesecret123@@@@@"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }

};
