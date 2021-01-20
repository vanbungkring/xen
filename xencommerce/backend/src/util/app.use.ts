import bodyParser from 'body-parser';
import { Application, Express } from 'express';
import express from 'express';

/**
 * use this to split function
 */
class AppUse {
  constructor(private app: Application) {
    this.setup();
  }

  private setup() {
    this.app.disable('x-powered-by');
    this.app.set('trust proxy', true);
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }


}
export default AppUse;
