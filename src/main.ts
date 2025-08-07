import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthGuard } from './auth/auth.gaurd';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Doctor Appointment Booking API')
    .setDescription('API for booking appointments with doctors')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix('/v1');
  app.useGlobalGuards(app.get(AuthGuard));

  const port = Number(configService.get('PORT')) || 3000;
  await app.listen(port);
  console.log(`Server started`);
}
bootstrap();
