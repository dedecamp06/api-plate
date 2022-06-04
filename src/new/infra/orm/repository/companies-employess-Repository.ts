import {
    Table,
    Model,
    PrimaryKey,
    AutoIncrement,
    Column,
    AllowNull,
    DataType,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript'
import { CompanieEmployessEntitie } from '../entities'
import { CompanieRepository } from './companiesRepository'

@Table({
    tableName: 'companies_employess_table',
    schema: 'service',
    freezeTableName: true,
    timestamps: false,
})
export class CompanieEmployessRepository extends Model<CompanieEmployessEntitie> implements CompanieEmployessEntitie {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number

    @ForeignKey(() => CompanieRepository)
    @Column(DataType.STRING(25))
    cpfColaborador: string;

    @ForeignKey(() => CompanieRepository)
    @Column({ field: 'companies_id', type: DataType.INTEGER() })
    companiesId: number;

    @BelongsTo(() => CompanieRepository, 'companies_id')
    companie!: CompanieRepository;
}
