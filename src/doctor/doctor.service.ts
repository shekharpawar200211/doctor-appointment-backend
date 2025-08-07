import { Injectable } from '@nestjs/common';
import { doctors } from 'src/utlity/constant';

@Injectable()
export class DoctorsService {
    private doctors = [
        ...doctors
    ];

    async findAll({
        specialization,
        page = 1,
        limit = 10,
    }: {
        specialization?: string;
        page: number;
        limit: number;
    }) {
        let filtered = this.doctors;
        if (specialization) {
            filtered = filtered.filter(
                (doctor) =>
                    doctor.specialization.toLowerCase() === specialization.toLowerCase(),
            );
        }
        const total = filtered.length;
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginated = filtered.slice(start, end);

        return {
            total,
            page,
            limit,
            data: paginated,
        };
    }
    async findDoctors({ name, page, limit }) {

    }

    async findById(id) {

    }
}
