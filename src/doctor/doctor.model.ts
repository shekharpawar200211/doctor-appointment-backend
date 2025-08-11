import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'doctors' })
export class Doctor extends Model<Doctor> {
    @Column
    name: string;

    @Column
    specialization: string;

    @CreatedAt
    @Column({ type: DataType.DATE, field: 'created_at' })
    declare createdAt: Date;

    @UpdatedAt
    @Column({ type: DataType.DATE, field: 'updated_at' })
    declare updatedAt: Date;
}
