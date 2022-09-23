const mongoose = require("mongoose")

const Hospital = new mongoose.Schema(
    {
    name: {type: String, required: true},
    admin: {type: String, require: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String},
    beds: {type: Number, default: 0},
    blood: [{type: String}],
    oxygen: {type: Boolean, default: false},
    tests: [{type: String}],
    address: {type: String, required: true}
    },
    { collection: 'hospital-data' }
)

const model = mongoose.model('HospitalData', Hospital)

module.exports = model