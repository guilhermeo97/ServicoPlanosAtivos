import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AtualizarStatusAssinatura } from 'src/aplicacao/casos de uso/atualizar-assinatura.use-case';

@Controller()
export class EscutarEventoNovoPagamento {
  constructor(private atualizarStatusAssinatura: AtualizarStatusAssinatura) {}

  @EventPattern({ exchange: 'pagamento_ex', routingKey: 'pagamento.novo' })
  async escutar(@Payload() dados: any) {
    console.log('Evento recebido em PlanosAtivos ✅');
    console.log(dados);
    const atualizar = await this.atualizarStatusAssinatura.salvar(dados.codAss);
    return atualizar;
  }
}
