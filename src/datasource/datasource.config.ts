import { SequelizeOptions } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { Models } from './datasource.model';

export const sequelizeConfig: SequelizeOptions = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'my_local_db',
    logging: false,
    models: [...Models],
}; 
