
import { Model, ModelCtor } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/appointment.model';
import { Doctor } from 'src/doctor/doctor.model';
import { User } from 'src/user/user.model';

export const Models: ModelCtor<Model<any, any>>[] = [
    User,
    Doctor,
    Appointment,
];
