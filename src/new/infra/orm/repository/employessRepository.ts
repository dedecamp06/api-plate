import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  Column,
  AllowNull,
  DataType,
  Default
} from 'sequelize-typescript'
import { EmployeesEntitie } from '../entities'

@Table({
  tableName: 'employess_table',
  schema: 'service',
  freezeTableName: true,
  timestamps: false,
})
export class EmployessRepository extends Model<EmployeesEntitie> implements EmployeesEntitie {
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
  cpf!: string

  @AllowNull(true)
  @Column(DataType.STRING(25))
  email!: string

  @AllowNull(false)
  @Column(DataType.DATE)
  dataNascimento!: string

  @AllowNull(true)
  @Column(DataType.STRING(15))
  telefone!: string

  @AllowNull(false)
  @Column(DataType.STRING(40))
  endereco!: string

  @AllowNull(false)
  @Column(DataType.STRING(40))
  setor!: string

  @AllowNull(false)
  @Column(DataType.STRING(40))
  cargo!: string

}
