import { Injectable } from '@nestjs/common';
import Assinatura from 'src/dominio/assinatura';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';

@Injectable()
export class ListarAssinaturaStatus {
  constructor(private readonly assinaturaRepository: AssinaturaRepository) {}

  async buscar(codAss: number) {
    return await this.assinaturaRepository.buscarPorId(codAss);
  }
}
