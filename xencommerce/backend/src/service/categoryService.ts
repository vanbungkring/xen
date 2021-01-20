import { Service } from '../util/service';
import express from 'express';
import { CategoryWorker } from '../worker/categoryWorker';
import { HttpOutput } from '../util/httpOutput';
import { APISTATUS } from '../util/enum';
export class CategoryService implements Service {
  
  path = '/category';
  r = express.Router();
  categoryWorker: CategoryWorker;
  
  constructor() {
    this.categoryWorker = new CategoryWorker();
    this.initRouter();
  }
  initRouter(): void {
    this.r.get(`${this.path}/all`, this.allCategories);
  }
  private allCategories = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const worker = this.categoryWorker.showAllCategories();
    worker
      .then((data: any) => {
        return res
          .status(200)
          .send(
            new HttpOutput(
              APISTATUS.SUCCESS,
              APISTATUS.SUCCESS,
              data,
              null,
              null,
              {}
            )
          );
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              APISTATUS.ERROR,
              err.data,
              null,
              null,
              {}
            )
          );
      });
  };
}
