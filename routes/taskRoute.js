const express = require('express')
const router = express.Router()
const {createTask, getTasks, getOneTask, updateTask, deleteTask} = require('../controllers/taskControllers')

router.route('/').post(createTask)
router.route('/').get(getTasks)
router.route('/:id').get(getOneTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)

module.exports = router