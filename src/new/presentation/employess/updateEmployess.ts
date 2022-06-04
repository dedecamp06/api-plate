import { Success } from '../shared'
import { Error } from '../shared'
import { EmployessRepository } from "../../infra/orm/repository";
import { UpdateEmployessDto } from './dto/updateEmployess.dto';

class PutEmployessController {
    constructor() { }

    async role(body: UpdateEmployessDto, id: number) {
        try {
            const result = await EmployessRepository.update(body, {
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

export const PutEmployessControllerRole = new PutEmployessController()

