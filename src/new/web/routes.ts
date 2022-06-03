import { Router } from 'express';
import { EmployeesController, } from '../main/controllers/employees'

const routes = Router();
// const Employees = new EmployeesController()

// routes.get('/employees', Employees.get)
// routes.post('/employees', Employees.post)

// routes.get('/', (request, res) => {
//     res.status(200).json({
//         description: 'foi'
//     })
// });


export default routes;
