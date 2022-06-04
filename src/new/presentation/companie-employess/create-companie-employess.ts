import { Created, Forbidden } from '../shared'
import { Error } from '../shared'
import { CompanieEmployessRepository } from "../../infra/orm/repository";
import { Op } from 'sequelize';

class PostEmployessController {
    constructor() { }

    async role(params: any) {
        try {
            const exits = await CompanieEmployessRepository.findOne({
                where: {
                    cpfColaborador: params.cpfColaborador
                }
            });

            if (exits) Forbidden('Funcionario já está cadastrado em uma empresa!')

            const result = await CompanieEmployessRepository.create(params)
            return Created(result)
        } catch (error) {
            return Error(error)
        }
    }
}

export const PostEmployessControllerRole = new PostEmployessController()

