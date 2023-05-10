import { getOsEnvBoolean, getOsEnv, getOsEnvNumber } from 'src/lib/env';
import * as dotEnv from 'dotenv';
import * as path from 'path';

enum APP_ENV {
  LOCAL = 'local',
  DEV = 'dev',
  SIT = 'sit',
}

const getEnvFile = (env: string) =>
  process.env.Node_ENV === 'local'
    ? '.env'
    : env && APP_ENV[env.toUpperCase()]
    ? `test-${env.toLowerCase()}.env`
    : `.env`;

const envFile = getEnvFile(process.env.APP_ENV);
console.log('env file used', envFile);

dotEnv.config({ path: path.join(process.cwd(), envFile) });

export const env = {
  appName: getOsEnv('APP_NAME'),
  appPort: getOsEnvNumber('APP_PORT', 3000),
  monogo: {
    dbUrl: getOsEnv('MONGODB_URL'),
    dbName: getOsEnv('MONGODB_DB_NAME', 'accounts'),
    urlParser: getOsEnvBoolean('MONGODB_URL_PARSER'),
  },
};
