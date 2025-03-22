import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AssinaturaModule } from './assinatura.module';
import { EscutarEventoNovoPagamento } from '../eventos/consumidores/EscutarEventoNovoPagamento';

@Module({
  imports: [AssinaturaModule],
  providers: [EscutarEventoNovoPagamento],
  exports: [EscutarEventoNovoPagamento],
})
export class MensageriaModule {}

//ConfigModule, // 👈 importa o ConfigModule aqui (mesmo se for global, por segurança nesse contexto)
// ClientsModule.registerAsync({
//   clients: [
//     {
//       name: 'GestaoOperadoraTelecom',
//       imports: [ConfigModule], // 👈 importa o ConfigModule aqui (mesmo se for global, por segurança nesse contexto)
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         transport: Transport.RMQ,
//         options: {
//           urls: [configService.get('RMQ_URL') as string],
//           exchange: 'amq.topic',
//         },
//       }),
//     },
//   ],
// }),
