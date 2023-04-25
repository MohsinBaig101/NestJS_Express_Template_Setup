import { MongooseModule } from '@nestjs/mongoose';
import { env } from './env';

export default MongooseModule.forRoot(env.monogo.dbUrl, {
    dbName: env.monogo.dbName,
    useNewUrlParser: env.monogo.urlParser
})