import { Router, Request, Response } from 'express';

import EmployeesController from 'old/infra/web/employees/controllers/EmployeesController';

const employeesRouter = Router();

const employeesController = new EmployeesController();

employeesRouter.get('/', employeesController.index);

export default employeesRouter;
