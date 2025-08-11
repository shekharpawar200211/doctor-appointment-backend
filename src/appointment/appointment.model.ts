import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Appointment extends Model<Appointment> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @Column(DataType.INTEGER)
    doctorId: number;

    @Column(DataType.INTEGER)
    patientId: number;

    @Column(DataType.DATE)
    slotTime: Date;

    @Column(DataType.STRING)
    status: string;
}
