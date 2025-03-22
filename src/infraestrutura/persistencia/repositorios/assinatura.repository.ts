import { Injectable } from '@nestjs/common';
import AssinaturaEntity from '../entidades/assinatura.entity';
import Assinatura from 'src/dominio/assinatura';
import { Database } from '../db/database';

@Injectable()
export class AssinaturaRepository {
  constructor(private database: Database) {}

  async buscarPorId(codigo: number): Promise<boolean> {
    const buscar = this.database.base.find(
      (assinatura) => assinatura.codigo === codigo,
    );
    if (!buscar) {
      return false;
    }
    return true;
  }

  async salvar(assinatura: Assinatura): Promise<boolean> {
    console.log(assinatura);
    const entidade = AssinaturaEntity.converterParaEntidade(assinatura);
    this.database.base.push(entidade);
    return true;
  }

  async deletar(codigo: number): Promise<boolean> {
    this.database.base.splice(
      this.database.base.findIndex(
        (assinatura) => assinatura.codigo === codigo,
      ),
      1,
    );
    return true;
  }
}
