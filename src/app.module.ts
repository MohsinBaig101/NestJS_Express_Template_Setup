import { Module } from '@nestjs/common';
import { UserModule } from './modules';
import { MongodbConnection } from './config';
@Module({
  imports: [UserModule, MongodbConnection],
})
export class AppModule { }
