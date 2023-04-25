const taskModel = require('../../../model/api/v1/tasks')

const getTasks = async (req, res) => {
	// res.status(200).send('Working')
	try {
		const tasks = await taskModel.find()
		res.status(200).send(`sdfsdf`)
	} catch (error) {
		console.log(error);
	}
}

const createTask = async (req, res) => {
	try {
		console.log(req.body);
		const task = await taskModel.create(req.body)
		res.status(201).send(task)
	} catch (error) {
		res.status(422).send(error);
	}
}

module.exports = { getTasks, createTask }