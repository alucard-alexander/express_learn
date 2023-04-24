const express = require('express')
const app = express()
app.use(express.json())

// db connection
const connectDB = require('./db/connect')

// tasks
const tasksRoutes = require('./router/api/v1/tasks')
// sdfsdf
app.use('/api/v1', tasksRoutes)
require('dotenv').config()

const start = async () => {
	await connectDB()
	app.listen(3000, console.log('listening to port 3000'))
}

start()