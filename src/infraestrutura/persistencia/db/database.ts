import { Injectable } from '@nestjs/common';
import AssinaturaEntity from '../entidades/assinatura.entity';

@Injectable()
export class Database {
  base: AssinaturaEntity[] = [];

  constructor() {}
}
