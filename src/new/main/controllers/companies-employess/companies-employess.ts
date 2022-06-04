import { FindCompaniesEmployessControllerRole } from '../../../presentation/companie-employess/find-companie-employess'
import { PostEmployessControllerRole } from '../../../presentation/companie-employess/create-companie-employess'



export class CompaniesEmployeesController {
    constructor() { }
    async get(req: any, res: any) {
        const result: CompaniesEmployeesController.result = await FindCompaniesEmployessControllerRole.role()
        return res.status(result.status).json(result)
    }

    async post(req: any, res: any) {
        const body = req.body
        const result: CompaniesEmployeesController.result = await PostEmployessControllerRole.role(body)
        return res.status(result.status).json(result)
    }
}

export namespace CompaniesEmployeesController {
    export type result = any
}