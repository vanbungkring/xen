import { Express, Application } from 'express';
import AppUse from './app.use';
import express from 'express';
import { CONFIG } from './config';
export class AppExtend {
  appUse: AppUse;
  defaultApp: express.Application;
  constructor() {
    this.defaultApp = express();
    this.appUse = new AppUse(this.defaultApp);
  }
  listen() {
    this.defaultApp.listen(CONFIG.PROT, () => {
      console.log(`run on ${process.env.NODE_ENV}`);
      console.log(
        `Server Started!`
      );
    });
  }
}