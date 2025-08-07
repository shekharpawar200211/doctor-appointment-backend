import { Controller, Get, Query } from '@nestjs/common';
import { DoctorsService } from './doctor.service';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) { }

    @Get('/list')
    findAll(
        @Query('specialization') specialization?: string,
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ) {
        return this.doctorsService.findAll({ specialization, page, limit });
    }

    @Get('/search')
    findDoctor(
        @Query('name') name?: string,
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ) {
        return this.doctorsService.findDoctors({ name, page, limit });
    }
}
