const router = require('express').Router()
const { getTasks, createTask, getTask } = require('../../../controller/api/v1/tasks')

router.route('/tasks').get(getTasks).post(createTask)
router.route('/tasks/:id').get(getTask)

module.exports = router