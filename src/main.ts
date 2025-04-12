import { NestFactory } from '@nestjs/core';
import { AsyncMicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './infraestrutura/modulos/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<AsyncMicroserviceOptions>({
    useFactory: (configService: ConfigService) => ({
      transport: Transport.RMQ,
      options: {
        urls: [configService.get<string>('RMQ_URL')],
        queue: configService.get<string>('RMQ_FILA_SERVICO_PLANOS_ATIVOS'),
        queueOptions: { durable: true },
        noAck: false,
      },
    }),
    inject: [ConfigService],
  });

  await app.startAllMicroservices();
  await app.listen(3002);
}
bootstrap();
