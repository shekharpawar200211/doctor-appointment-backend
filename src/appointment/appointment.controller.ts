import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { BookAppointmentDto, CancelAppointmentDto, GetSlotsDto } from './appointment.dto';

@Controller('appointments')
export class AppointmentController {
    constructor(private readonly appointmentService: AppointmentService) { }

    @Get('slots')
    async getSlots(@Body() dto: GetSlotsDto) {
        return this.appointmentService.getSlots(dto);
    }

    @Post('book/:patientId')
    async bookAppointment(@Param('patientId') patientId: number, @Body() dto: BookAppointmentDto) {
        return this.appointmentService.bookAppointment(patientId, dto);
    }

    @Post('cancel')
    async cancelAppointment(@Body() dto: CancelAppointmentDto) {
        return this.appointmentService.cancelAppointment(dto);
    }

    @Get('patient/:patientId/booked')
    async getBookedSlotsForPatient(@Param('patientId') patientId: number) {
        return this.appointmentService.getBookedSlotsForPatient(patientId);
    }
}
