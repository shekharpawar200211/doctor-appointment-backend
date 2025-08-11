import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { appointmentProviders } from './appointment.repository';
import { DoctorModule } from 'src/doctor/doctor.module';

@Module({
    imports: [DoctorModule],
    controllers: [AppointmentController],
    providers: [AppointmentService, ...appointmentProviders],
    exports: [AppointmentService],
})
export class AppointmentModule { }