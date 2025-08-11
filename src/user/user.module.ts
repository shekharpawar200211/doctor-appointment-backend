import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.repository';
import { DoctorModule } from 'src/doctor/doctor.module';

@Module({
    imports: [DoctorModule],
    controllers: [UserController],
    providers: [UserService, ...userProviders],
    exports: [UserService],
})
export class UserModule { }
