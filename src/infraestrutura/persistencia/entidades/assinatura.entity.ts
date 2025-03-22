import Assinatura from 'src/dominio/assinatura';

export default class AssinaturaEntity {
  codigo: number;

  constructor(codigo: number) {
    this.codigo = codigo;
  }

  converterParaDominio(): Assinatura {
    const assinatura = new Assinatura(this.codigo);
    return assinatura;
  }

  static converterParaEntidade(assinatura: Assinatura): AssinaturaEntity {
    const entidadeAssinatura = new AssinaturaEntity(assinatura.codigo);
    return entidadeAssinatura;
  }
}
