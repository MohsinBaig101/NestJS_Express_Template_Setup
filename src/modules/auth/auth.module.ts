import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { rolesSchema, permissionSchema } from './entities';
const mongooseModuleArr = MongooseModule.forFeature([
  { name: 'permissions', schema: permissionSchema },
  { name: 'roles', schema: rolesSchema },
])
@Module({
  imports: [mongooseModuleArr],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
