import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // frontend ile ayrı portta çalışacağımız için CORS gerekli
  app.setGlobalPrefix('api'); // tüm rotalar /api/* olacak
  await app.listen(4000);
  console.log('Backend running on http://localhost:4000/api');
}
bootstrap();