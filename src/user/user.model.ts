import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true, underscored: true })
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    role: string;
}
