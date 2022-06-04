import { Success } from '../shared'
import { Error } from '../shared'
import { EmployessRepository } from "../../infra/orm/repository";

class FindEmployessController {
    constructor() { }

    async role() {
        try {
            const result = await EmployessRepository.findAll()
            return Success(result)
        } catch (error) {
            return Error(error)
        }
    }
}

export const FindEmployessControllerRole = new FindEmployessController()

