import employeeController from '../controllers/employee.controller.js';
import express from 'express';
const employeeRout = express.Router();

employeeRout.post('/api/employee', employeeController.addemployee);
// employeeRout.update('/api/employee', employeeController.updateemployee);



export default employeeRout;