import { Router } from 'express';
import { CompaniesEmployeesController } from '../main/controllers/companies-employess';
import { EmployeesController } from '../main/controllers/employees'

const routes = Router();
const Employees = new EmployeesController()
const CompaniesEmployess = new CompaniesEmployeesController()


//Routes Employess
routes.get('/employess', Employees.get)
routes.get('/employess/:id', Employees.getOne)
routes.post('/employess', Employees.post)
routes.put('/employess/:id', Employees.put)
routes.delete('/employess/:id', Employees.delete)

//Routes Companies Employess
routes.get('/companies-employess', CompaniesEmployess.get)
routes.post('/companies-employess', CompaniesEmployess.post)
export default routes;
