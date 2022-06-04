import { NoCotent } from '../shared'
import { Error } from '../shared'
import { EmployessRepository } from "../../infra/orm/repository";

class DeleteEmployessController {
    constructor() { }

    async role(id: number) {
        try {
            await EmployessRepository.destroy({
                where: {
                    id
                }
            })
            return NoCotent()
        } catch (error) {
            return Error(error)
        }
    }
}

export const DeleteEmployessControllerRole = new DeleteEmployessController()

