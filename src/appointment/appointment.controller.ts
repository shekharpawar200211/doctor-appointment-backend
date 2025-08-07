import { Controller, Post, Body } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { BookAppointmentDto } from './appointment.dto';

@Controller('appointments')
export class AppointmentController {
    constructor(private readonly appointmentService: AppointmentService) { }

    @Post('book-appointment')
    book(@Body() dto: BookAppointmentDto) {
        return this.appointmentService.bookAppointment(dto);
    }
}
