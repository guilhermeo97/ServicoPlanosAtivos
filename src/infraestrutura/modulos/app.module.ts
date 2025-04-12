import { Module } from '@nestjs/common';
import { AssinaturaModule } from './assinatura.module';
import { DbModule } from './db.module';
import { MensageriaModule } from './mensageria.module';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AssinaturaModule,
    MensageriaModule,
    DbModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
