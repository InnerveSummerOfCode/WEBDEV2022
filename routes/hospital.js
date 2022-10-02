const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const Hospital = require('../models/hospital.model')

exports.allHospitalsGET = async (req, res) => {
    const token = req.headers['x-access-token']
    try {
		const decoded = jwt.verify(token, 'aidintimesecret123@@@@@')
		// console.log(decoded);
		const hospitals = await Hospital.find()
		// console.log(hospitals);

		return res.json({ status: 'ok', hospitals: hospitals })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
}

// exports.allHospitalsPOST = async (req, res) => {
//     const token = req.headers['x-access-token']

// 	try {
// 		const decoded = jwt.verify(token, 'aidintimesecret123@@@@@')
// 		const email = decoded.email
// 		await User.updateOne(
// 			{ email: email },
// 			{ $set: { quote: req.body.quote } }
// 		)

// 		return res.json({ status: 'ok' })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ status: 'error', error: 'invalid token' })
// 	}
// }

exports.getUniqueData = async (req, res) => {
	const token = req.headers['x-access-token']
	try {
		const decoded = jwt.verify(token, 'aidintimesecret123@@@@@')
		console.log(decoded);
		// const data = await Hospital.find()
		// console.log(hospitals);

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
}