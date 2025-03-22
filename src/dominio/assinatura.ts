export default class Assinatura {
  private _codigo: number;

  constructor(codigo: number) {
    this._codigo = codigo;
  }

  public get codigo(): number | undefined {
    return this._codigo;
  }
}
