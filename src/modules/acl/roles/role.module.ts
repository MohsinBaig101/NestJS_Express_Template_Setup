import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { roleSchema } from './entities';
const mongooseModuleArr = MongooseModule.forFeature([
  { name: 'roles', schema: roleSchema },
]);
@Module({
  imports: [mongooseModuleArr],
  controllers: [],
  providers: [],
})
export class RolesModule {}
