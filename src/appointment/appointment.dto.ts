import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class BookAppointmentDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    doctorId: number;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    slotTime: string;
}

export class CancelAppointmentDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    appointmentId: number;
}

export class GetSlotsDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    doctorId: number;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    date: string;
}
