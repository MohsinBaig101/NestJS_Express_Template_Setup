import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './entities';
const mongooseModuleArr = MongooseModule.forFeature([
  { name: 'users', schema: userSchema }
])
@Module({
  imports: [mongooseModuleArr],
  controllers: [],
  providers: [],
})
export class UsersModule { }
