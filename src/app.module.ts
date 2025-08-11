import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.gaurd';
import { ConfigModule } from '@nestjs/config';
import { DatasourceModule } from './datasource/datasource.module';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), DatasourceModule, DoctorModule, AppointmentModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule { }
