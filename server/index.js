const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const PORT = process.env.PORT || 1337

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@course-management.mghak.mongodb.net/?retryWrites=true&w=majority");

// ROUTES 
const login = require('./routes/login')
const register = require('./routes/register')
const hospital = require('./routes/hospital')


app.post("/api/register-user", register.registerUser)
app.post("/api/login-user", login.loginUSER)
app.post("/api/login-hospital", login.loginHOSPITAL)
app.post("/api/register-hospital", register.registerHospital);
app.get('/api/all-hospitals', hospital.allHospitalsGET)
app.get('/api/details', hospital.getUniqueData)
// app.post('/api/all-hospitals', hospital.allHospitalsPOST)

if(process.env.NODE_ENV == 'production') {
  app.use(express.static("client/build"));
  
}

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
