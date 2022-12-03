import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(AppModule.prefix); //para todas seria :/api/<nameApi>
  await app.listen(AppModule.port);
}
bootstrap();
