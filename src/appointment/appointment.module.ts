import { Module } from '@nestjs/common';
import { DoctorModule } from 'src/doctor/doctor.module';

@Module({
    imports: [DoctorModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
