import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle(`Blog Backend`)
    .setDescription('Blog backend')
    .setExternalDoc('Postman Collection', 'api/docs-json')
    .setVersion('1.0')
    .addTag('Blog')
    .addBearerAuth()
    .build();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api')
  app.enableCors()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3001);
}
bootstrap();
