import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from './common/configs/config.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get config
  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  // Swagger API
  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'Chatchit')
      .setDescription(
        swaggerConfig.description ||
          'The Chatchit API for call video and chat realtime',
      )
      .setVersion(swaggerConfig.version || '1.0')
      .addServer(
        process.env.NODE_ENV === 'production' ? swaggerConfig.server : '/',
      )
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        'access-token',
      )
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || 'api', app, document, {
      swaggerOptions: {
        displayOperationEnum: true,
      },
    });
  }

  // Enable Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  // Global prefix
  app.setGlobalPrefix(process.env.NEST_PREFIX || nestConfig.prefix || '/api');

  await app.listen(process.env.PORT || nestConfig.port || 5000);
}
bootstrap();
