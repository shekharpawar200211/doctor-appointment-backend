import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'doctor', description: 'Role can be doctor or patient' })
    @IsNotEmpty()
    @IsString()
    role: string;

    @ApiProperty({ example: 'Cardiologist', required: false })
    @IsOptional()
    @IsString()
    specialization?: string;
}
