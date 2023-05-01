import { Module } from '@nestjs/common';
import { AuthModule } from './modules';
import { MongodbConnection } from './config';
@Module({
  imports: [AuthModule, MongodbConnection],
})
export class AppModule { }
