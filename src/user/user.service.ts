import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from './user.repository';
import { DOCTOR_REPOSITORY } from 'src/doctor/doctor.repository';
import { User } from './user.model';
import { Doctor } from 'src/doctor/doctor.model';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
        @Inject(DOCTOR_REPOSITORY) private readonly doctorRepository: typeof Doctor,
    ) { }

    async createUser(data: CreateUserDto) {
        const { name, role, specialization } = data;

        const user = await this.userRepository.create({ name, role } as any);

        if (role === 'doctor' && specialization) {
            await this.doctorRepository.create({ name, specialization } as any);
        }

        return user;
    }
}
