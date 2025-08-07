import { Module } from '@nestjs/common';
import { DB_PROVIDER } from './datasoure.provide';


@Module({
    providers: [...DB_PROVIDER],
    exports: [...DB_PROVIDER],
})
export class DatasourceModule { }

//this is to connect to our database
