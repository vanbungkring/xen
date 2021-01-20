import RootPath from 'app-root-path';
import * as dotenv from 'dotenv';
dotenv.config();
let path;

switch (process.env.NODE_ENV) {
  case 'test':
    path = RootPath.path + `/env/.env.test`;
    break;
  case 'production':
    path = RootPath.path + `/env/.env.production`;
    break;
  case 'development':
    path = RootPath.path + `/env/.env.development`;
    break;
  case 'barito':
    path = RootPath.path + `/env/.env.barito`;
    break;
  case 'maintain':
    path = RootPath.path + `env/.env.maintain`;
    break;
  case 'local':
    path = RootPath.path + `/env/.env.local`;
    break;
  case 'mahakam':
    path = RootPath.path + `/env/.env.mahakam`;
    break;
  case 'ghflow':
    path = RootPath.path + `/env/.env.ghflow`;
    break;
  default:
    path = RootPath.path + `/.env`;
}
const env = dotenv.config({ path });
export const CONFIG = env.parsed;
