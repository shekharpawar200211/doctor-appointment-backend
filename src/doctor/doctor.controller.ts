import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { AuthGuard } from 'src/auth/auth.gaurd';

UseGuards(AuthGuard)
@Controller('doctors')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) { }

    @Get()
    async getAllDoctors(
        @Query('page') page: string,
        @Query('limit') limit: string,
    ) {
        const pageNum = parseInt(page) || 1;
        const limitNum = parseInt(limit) || 10;
        return this.doctorService.getDoctors(pageNum, limitNum);
    }

    @Get('by-name')
    async getDoctorByName(@Query('name') name: string) {
        return this.doctorService.getDoctorByName(name);
    }

    @Get('by-specialization')
    async getDoctorsBySpecialization(@Query('specialization') specialization: string) {
        return this.doctorService.getDoctorsBySpecialization(specialization);
    }
}
