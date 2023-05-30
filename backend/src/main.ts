import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import { ApiExceptionFilter } from './filter/api-exception.filter';
import { ApiTransformInterceptor } from './common/interceptors/api-transform.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ApiExceptionFilter());

  // Enable CORS
  app.enableCors();

  // reflector
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(
    // Request Timeout Handling
    new TimeoutInterceptor(60 * 1000),
    // Serialization process
    new ClassSerializerInterceptor(reflector),
    // Return Data Processing
    new ApiTransformInterceptor(reflector),
  );
  await app.listen(3001);
}

bootstrap();
console.info(`swagger url: %s`, 'http://localhost:3001/api');
