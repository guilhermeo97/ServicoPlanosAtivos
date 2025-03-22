import { Injectable } from '@nestjs/common';
import { Ctx, EventPattern, Payload } from '@nestjs/microservices';
import { AtualizarStatusAssinatura } from 'src/aplicacao/casos de uso/atualizar-assinatura.use-case';

@Injectable()
export class EscutarEventoNovoPagamento {
  constructor(private atualizarStatusAssinatura: AtualizarStatusAssinatura) {}

  @EventPattern({ cmd: 'novo_pagamento' })
  async escutar(@Payload() dados: any) {
    console.log('Evento recebido em PlanosAtivos ✅');
    console.log(dados);
    const atualizar = await this.atualizarStatusAssinatura.salvar(dados.codAss);
    return atualizar;
  }
}
