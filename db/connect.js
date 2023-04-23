const mongoose = require('mongoose');
const connectDB = async () => {
	await mongoose.connect(`${process.env.DB_URI}task_manager`,
	{
		maxPoolSize: 2,
		authSource: "admin",
		user: process.env.DB_USERNAME,
		pass: process.env.DB_PASSWORD
	}
	, console.log('Successfully connected'))
}

module.exports = connectDB;