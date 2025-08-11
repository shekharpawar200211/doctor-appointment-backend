import { Appointment } from './appointment.model';

export const APPOINTMENT_REPOSITORY = 'APPOINTMENT_REPOSITORY';

export const appointmentProviders = [
    {
        provide: APPOINTMENT_REPOSITORY,
        useValue: Appointment,
    },
];
