import { Module } from '@nestjs/common';
import { AssinaturaModule } from './assinatura.module';
import { EscutarEventoNovoPagamento } from '../eventos/consumidores/EscutarEventoNovoPagamento';

@Module({
  imports: [AssinaturaModule],
  controllers: [EscutarEventoNovoPagamento],
  //exports: [EscutarEventoNovoPagamento],
})
export class MensageriaModule {}
