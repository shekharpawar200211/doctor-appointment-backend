import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class DoctorDto {
    @ApiProperty({ example: 'Dr. Shekhar Pawar' })
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty({ example: 'Cardiologist' })
    @IsOptional()
    @IsString()
    specialization: string;

    @ApiPropertyOptional({ example: 1, description: 'Page number (optional)' })
    @IsOptional()
    @IsNumber()
    page?: number;

    @ApiPropertyOptional({ example: 10, description: 'Items per page (optional)' })
    @IsOptional()
    @IsNumber()
    limit?: number;
}
