import { Inject, Injectable } from '@nestjs/common';
import { DOCTOR_REPOSITORY } from './doctor.repository';
import { Doctor } from './doctor.model';
import { Op } from 'sequelize';

@Injectable()
export class DoctorService {
    constructor(
        @Inject(DOCTOR_REPOSITORY)
        private readonly doctorRepo: typeof Doctor,
    ) { }

    async getDoctors(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const { rows, count } = await this.doctorRepo.findAndCountAll({
            offset,
            limit,
            order: [['name', 'ASC']],
        });

        return {
            data: rows,
            pagination: this.buildPagination(count, page, limit),
        };
    }

    async getDoctorByName(name: string, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const { rows, count } = await this.doctorRepo.findAndCountAll({
            where: {
                name: { [Op.iLike]: `%${name}%` },
            },
            offset,
            limit,
            order: [['name', 'ASC']],
        });

        return {
            data: rows,
            pagination: this.buildPagination(count, page, limit),
        };
    }

    async getDoctorsBySpecialization(
        specialization: string,
        page = 1,
        limit = 10,
    ) {
        const offset = (page - 1) * limit;
        const { rows, count } = await this.doctorRepo.findAndCountAll({
            where: {
                specialization: { [Op.iLike]: `%${specialization}%` },
            },
            offset,
            limit,
            order: [['name', 'ASC']],
        });

        return {
            data: rows,
            pagination: this.buildPagination(count, page, limit),
        };
    }

    private buildPagination(total: number, page: number, limit: number) {
        return {
            total,
            page,
            pageSize: limit,
            totalPages: Math.ceil(total / limit),
        };
    }
}
