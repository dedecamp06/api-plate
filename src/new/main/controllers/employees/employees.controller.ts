
import { FindEmployessControllerRole } from '../../../presentation/employess/findEmployess'
import { PostEmployessControllerRole } from '../../../presentation/employess/createEmployess'
import { PutEmployessControllerRole } from '../../../presentation/employess/updateEmployess'
import { FindOneEmployessControllerRole } from '../../../presentation/employess/findOneEmployess'
import { DeleteEmployessControllerRole } from '../../../presentation/employess/deleteEmployess'

export class EmployeesController {
    constructor() { }
    async get(req: any, res: any) {
        const result: EmployeesController.result = await FindEmployessControllerRole.role()
        return res.status(result.status).json(result)
    }

    async getOne(req: any, res: any) {
        const { id } = req.params
        const result: EmployeesController.result = await FindOneEmployessControllerRole.role(id)
        return res.status(result.status).json(result)
    }

    async post(req: any, res: any) {
        const body = req.body
        const result: EmployeesController.result = await PostEmployessControllerRole.role(body)
        return res.status(result.status).json(result)
    }

    async put(req: any, res: any) {
        const body = req.body
        const { id } = req.params
        const result: EmployeesController.result = await PutEmployessControllerRole.role(body, id)
        return res.status(result.status).json(result)
    }

    async delete(req: any, res: any) {
        const { id } = req.params
        const result: EmployeesController.result = await DeleteEmployessControllerRole.role(id)
        return res.status(result.status).json(result)
    }
}

export namespace EmployeesController {
    export type result = any
}