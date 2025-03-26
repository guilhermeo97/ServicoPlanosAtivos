import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './infraestrutura/modulos/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://wzdzpmja:yibUYRiKSYiLdR_yBFE0PQSPjBUGSdhd@jaragua.lmq.cloudamqp.com/wzdzpmja',
      ],
      queue: 'sistema_planos_ativos_novo_pagamento',
      queueOptions: { durable: true },
      noAck: false,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3002);
}
bootstrap();
