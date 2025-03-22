import { Module } from '@nestjs/common';
import { Database } from '../persistencia/db/database';

@Module({
  providers: [Database],
  exports: [Database],
})
export class DbModule {}
