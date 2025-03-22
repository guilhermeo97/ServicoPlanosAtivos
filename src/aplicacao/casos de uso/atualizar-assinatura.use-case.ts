import { Injectable } from '@nestjs/common';
import Assinatura from 'src/dominio/assinatura';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';

@Injectable()
export class AtualizarStatusAssinatura {
  constructor(private readonly assinaturaRepository: AssinaturaRepository) {}

  async salvar(codAss: number) {
    const assinatura = new Assinatura(codAss);
    return await this.assinaturaRepository.salvar(assinatura);
  }
}
