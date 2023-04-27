import { MongooseModule } from '@nestjs/mongoose';
import { env } from '../../env';

export const MongodbConnection =  MongooseModule.forRoot(env.monogo.dbUrl, {
    dbName: env.monogo.dbName,
    useNewUrlParser: env.monogo.urlParser
})