const express = require('express') ;
const router = express.Router() ;
const {getAllTasks, createTasks, getSingleTask, updateTasks, deleteTask} = require('../controllers/tasks')

router.route('/').get( getAllTasks).post(createTasks) ;
router.route('/:id').get(getSingleTask).patch(updateTasks).delete(deleteTask) ;

module.exports = router ;