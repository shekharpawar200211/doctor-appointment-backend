import { Sequelize } from 'sequelize-typescript';
import { sequelizeConfig } from './datasource.config';

export const DOCTOR_APPOINTMENT_DATABASE_PROVIDER = 'DOCTOR_APPOINTMENT_DATABASE_PROVIDER';

export const DB_PROVIDER = [
    {
        provide: DOCTOR_APPOINTMENT_DATABASE_PROVIDER,
        useFactory: async () => {
            const sequelize = new Sequelize(sequelizeConfig);
            await sequelize.sync();
            return sequelize;
        },
    }
];

