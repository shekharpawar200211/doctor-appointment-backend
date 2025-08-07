import { Module } from '@nestjs/common';
import { DoctorsService } from './doctor.service';
import { DoctorsController } from './doctor.controller';

@Module({
    imports: [],
    controllers: [DoctorsController],
    providers: [DoctorsService, DoctorsService],
})
export class DoctorModule { }
