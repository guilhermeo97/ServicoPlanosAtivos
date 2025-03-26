import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ListarAssinaturaStatus } from 'src/aplicacao/casos de uso/listar-assinatura.use-case';

@Controller('/planosativos')
export class AssinaturaController {
  constructor(
    private readonly listarAssinaturaStatus: ListarAssinaturaStatus,
  ) {}

  @Get(':codAss')
  async listarPorPlano(@Param('codAss', ParseIntPipe) codAss: number) {
    return this.listarAssinaturaStatus.buscar(codAss);
  }
}
