import { Sequelize } from 'sequelize-typescript';
import { dbConfig } from '../../../data/config'
import { EmployessRepository } from '../repository';
import { CompanieEmployessRepository } from '../repository/companies-employess-Repository';
import { CompanieRepository } from '../repository/companiesRepository';

export class Database {
    constructor() {
        this.init();
    }

    async init() {
        const sequelize = new Sequelize(dbConfig as any);
        sequelize.addModels([
            EmployessRepository,
            CompanieRepository,
            CompanieEmployessRepository
        ]);
        await sequelize.sync();
        return sequelize;
    }
}

