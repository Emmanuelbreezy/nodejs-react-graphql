const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
	} catch (error) {
		console.log(`MongoDB Failed: ${error}`);
	}
}

module.exports = connectDB;