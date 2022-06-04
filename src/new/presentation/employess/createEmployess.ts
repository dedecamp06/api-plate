import { Created, Forbidden } from '../shared'
import { Error } from '../shared'
import { EmployessRepository } from "../../infra/orm/repository";
import { CreateEmployessDto } from './dto/createEmployess.dto';
import { Op } from 'sequelize';

class PostEmployessController {
    constructor() { }

    async role(params: CreateEmployessDto) {
        try {
            const exists = await EmployessRepository.findOne({
                where: {
                    [Op.or]: [
                        { nome: params.nome },
                        { cpf: params.cpf }
                    ]
                }
            });

            if (!params.email && !params.telefone) {
                return Forbidden('Obrigatorio ter um email ou um telefone para cadastro!');
            }

            if (exists) return Forbidden('Funcionario já cadastrado');

            const result = await EmployessRepository.create(params)
            return Created(result)
        } catch (error) {
            return Error(error)
        }
    }
}

export const PostEmployessControllerRole = new PostEmployessController()

