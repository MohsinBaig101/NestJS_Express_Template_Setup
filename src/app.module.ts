import { Module } from '@nestjs/common';
import {
  AuthModule,
  UsersModule,
  PermissionsModule,
  RolesModule,
} from './modules';
import { MongodbConnection } from './config';
@Module({
  imports: [
    MongodbConnection,
    AuthModule,
    UsersModule,
    PermissionsModule,
    RolesModule,
  ],
})
export class AppModule {}
