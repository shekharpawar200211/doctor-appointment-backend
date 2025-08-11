export const DOCTOR_REPOSITORY = 'DOCTOR_REPOSITORY';

import { Doctor } from './doctor.model';

export const doctorProviders = [
    {
        provide: DOCTOR_REPOSITORY,
        useValue: Doctor,
    },
];
