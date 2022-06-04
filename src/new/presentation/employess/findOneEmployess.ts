import { Success } from '../shared'
import { Error } from '../shared'
import { EmployessRepository } from "../../infra/orm/repository";

class FindOneEmployessController {
    constructor() { }

    async role(id: number) {
        try {
            const result = await EmployessRepository.findOne({
                where: {
                    id
                }
            })
            return Success(result)
        } catch (error) {
            return Error(error)
        }
    }
}

export const FindOneEmployessControllerRole = new FindOneEmployessController()

