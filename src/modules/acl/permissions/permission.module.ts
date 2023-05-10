import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { permissionSchema } from './entities';
const mongooseModuleArr = MongooseModule.forFeature([
  { name: 'permissions', schema: permissionSchema },
]);
@Module({
  imports: [mongooseModuleArr],
  controllers: [],
  providers: [],
})
export class PermissionsModule {}
