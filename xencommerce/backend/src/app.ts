import { Storage } from "./util/storage";
import { Service } from './util/service';
import { AppExtend } from './util/app.extend';
export class App {
  mongodb?: Storage;
  app:AppExtend
  constructor(service:Service[]) {
    this.mongodb = new Storage();
    this.app = new AppExtend();
    this.storage();
    this.initRouter(service);
  }

  initRouter(service: Service[]) { 
    service.forEach((_ct) => {
      this.app.defaultApp.use('/', _ct.r);
    });
  }

  storage() {
    this.mongodb.connect();
  }
  listen() {
    this.app.listen();
  }
}
