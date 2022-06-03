
import { FindEmployessController } from '../../../presentation/employess/getEmployess'


export class EmployeesController {
    constructor(private readonly findEmployessController: FindEmployessController) { }

    async get(req: any, res: any) {
        const result = await this.findEmployessController.role()
        return res.status(200).json(result)
    }

    async post(req: any, res: any) {
        const body = req.body
        return res.status(201).json(body)

    }
}