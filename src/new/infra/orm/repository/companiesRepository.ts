import {
    Table,
    Model,
    PrimaryKey,
    AutoIncrement,
    Column,
    AllowNull,
    DataType,
    HasMany
} from 'sequelize-typescript'
import { CompaniesEntitie } from '../entities'
import { CompanieEmployessRepository } from './companies-employess-Repository'

@Table({
    tableName: 'companies_table',
    schema: 'service',
    freezeTableName: true,
    timestamps: false,
})
export class CompanieRepository extends Model<CompaniesEntitie> implements CompaniesEntitie {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number

    @AllowNull(false)
    @Column(DataType.STRING(150))
    nome!: string

    @AllowNull(false)
    @Column(DataType.STRING(25))
    cnpj!: string

    @HasMany(() => CompanieEmployessRepository, 'companies_id')
    caracteristicasFamiliaGrupo!: CompanieEmployessRepository[]

}
