import { Module } from '@nestjs/common';
import { AssinaturaRepository } from '../persistencia/repositorios/assinatura.repository';
import { AssinaturaController } from 'src/apresentacao/controladores/assinatura.controller';
import { AtualizarStatusAssinatura } from 'src/aplicacao/casos de uso/atualizar-assinatura.use-case';
import { ListarAssinaturaStatus } from 'src/aplicacao/casos de uso/listar-assinatura.use-case';
import { DbModule } from './db.module';

@Module({
  imports: [DbModule],
  providers: [
    AssinaturaRepository,
    AtualizarStatusAssinatura,
    ListarAssinaturaStatus,
  ],
  controllers: [AssinaturaController],
  exports: [
    AssinaturaRepository,
    AtualizarStatusAssinatura,
    ListarAssinaturaStatus,
  ],
})
export class AssinaturaModule {}
