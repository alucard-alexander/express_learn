const router = require('express').Router()
const { getTasks, createTask } = require('../../../controller/api/v1/tasks')

router.route('/tasks').get(getTasks).post(createTask)

module.exports = router