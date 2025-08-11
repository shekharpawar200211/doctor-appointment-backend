import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { doctorProviders } from './doctor.repository';

@Module({
    imports: [],
    controllers: [DoctorController],
    providers: [DoctorService, ...doctorProviders],
    exports: [...doctorProviders],
})
export class DoctorModule { }
