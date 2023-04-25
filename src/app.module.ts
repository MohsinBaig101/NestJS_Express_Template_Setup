import { Module } from '@nestjs/common';
import { UserModule } from './modules';
import dbConnection from './config/db'
@Module({
  imports: [UserModule, dbConnection],
})
export class AppModule {}
