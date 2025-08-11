import { Injectable, Inject } from '@nestjs/common';
import { Appointment } from './appointment.model';
import { Op } from 'sequelize';
import {
    BookAppointmentDto,
    CancelAppointmentDto,
    GetSlotsDto,
} from './appointment.dto';
import { APPOINTMENT_REPOSITORY } from './appointment.repository';

function toIST(date: Date): string {
    const istOffset = 5 * 60 + 30;
    const istDate = new Date(date.getTime() + istOffset * 60000);
    return istDate.toISOString().replace('Z', '');
}

@Injectable()
export class AppointmentService {
    constructor(
        @Inject(APPOINTMENT_REPOSITORY)
        private readonly appointmentModel: typeof Appointment,
    ) { }

    async getSlots(dto: GetSlotsDto): Promise<{ time: string; status: string }[]> {
        const workingHoursStart = 9;
        const workingHoursEnd = 17;
        const slotDuration = 30;

        const date = new Date(dto.date);

        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        const bookedSlots = await this.appointmentModel.findAll({
            where: {
                doctorId: dto.doctorId,
                slotTime: {
                    [Op.between]: [startOfDay, endOfDay],
                },
                status: 'booked',
            },
        });

        const bookedTimes = bookedSlots
            .filter(s => s.slotTime)
            .map(s => s.slotTime.toISOString());
        const slots: { time: string; status: string }[] = [];

        let current = new Date(date);
        current.setHours(workingHoursStart, 0, 0, 0);

        while (current.getHours() < workingHoursEnd) {
            const iso = toIST(current);
            slots.push({
                time: iso,
                status: bookedTimes.includes(current.toISOString()) ? 'booked' : 'available',
            });
            current = new Date(current.getTime() + slotDuration * 60000);
        }

        return slots;
    }

    async bookAppointment(
        patientId: number,
        dto: BookAppointmentDto,
    ): Promise<{ status: boolean; error?: string; message?: string }> {
        const slotStart = new Date(dto.slotTime);
        const slotEnd = new Date(slotStart.getTime() + 1000);

        const existing = await this.appointmentModel.findAll({
            where: {
                doctorId: dto.doctorId,
                slotTime: {
                    [Op.between]: [slotStart, slotEnd],
                },
                status: 'booked',
            },
        });

        if (existing.length > 0) {
            return { status: false, error: 'Slot already booked' };
        }

        await this.appointmentModel.create({
            doctorId: dto.doctorId,
            patientId,
            slotTime: slotStart,
            status: 'booked',
        } as any);

        return { status: true, message: 'Appointment booked' };
    }

    async cancelAppointment(dto: CancelAppointmentDto): Promise<{ status: boolean; message: string }> {
        await this.appointmentModel.update(
            { status: 'cancelled' },
            { where: { id: dto.appointmentId } },
        );
        return { status: true, message: 'Appointment cancelled' };
    }

    async getBookedSlotsForPatient(patientId: number): Promise<Appointment[]> {
        return this.appointmentModel.findAll({
            where: { patientId, status: 'booked' },
        });
    }
}
