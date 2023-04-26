const taskModel = require('../../../model/api/v1/tasks')

const getTasks = async (req, res) => {
	// res.status(200).send('Working')
	try {
		const tasks = await taskModel.find()
		res.status(200).send(tasks)
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

const getTask = async (req, res) => {
	try {
		const task = await taskModel.findById(req.params.id)
		if (!task) {
			return res.status(404).send('Resource not found')
		}
		// console.log(`query  ====>  `, req.query);
		console.log('result =======>', task);
		res.status(200).send(task)
		// const task = await taskModel.find(req.body)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = { getTasks, createTask, getTask }