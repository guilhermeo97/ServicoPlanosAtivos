import { Injectable } from '@nestjs/common';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';

@Injectable()
export class ListarAssinaturaStatus {
  constructor(private readonly assinaturaRepository: AssinaturaRepository) {}

  async buscar(codAss: number) {
    const buscar = await this.assinaturaRepository.buscarPorId(codAss);
    console.log(buscar);
    return buscar;
  }
}
