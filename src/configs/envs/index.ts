import * as developmentEnv from './development';
import * as productionEnv from './production';

const ENV = process.env.ENV || 'development';

const env: any = {
  development: developmentEnv,
  production: productionEnv,
};

export default env[ENV];
