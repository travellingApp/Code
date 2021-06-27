const express = require('express')
const router = express.Router()

const Employee = require('../Employee/employee')

router.get('/all',EmployeeController.index)
router.post('/show',EmployeeController.show)
// router.post('/store',upload.array('avatar[]'),EmployeeController.store)
router.post('/store', EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/delete',EmployeeController.destroy)

module.exports = router