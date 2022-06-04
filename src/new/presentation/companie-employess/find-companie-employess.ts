import { Success } from '../shared'
import { Error } from '../shared'
import { CompanieEmployessRepository, CompanieRepository } from "../../infra/orm/repository";

class FindCompaniesEmployessController {
    constructor() { }

    async role() {
        try {
            const result = await CompanieEmployessRepository.findAll({
                include: [
                    {
                        model: CompanieRepository
                    }
                ]
            });
            return Success(result)
        } catch (error) {
            return Error(error)
        }
    }
}

export const FindCompaniesEmployessControllerRole = new FindCompaniesEmployessController()

