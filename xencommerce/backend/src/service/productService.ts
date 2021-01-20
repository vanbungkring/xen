import { Service } from "../util/service";
import express from "express";
import { ProductWorker } from '../worker/productWorker';
import { HttpOutput } from '../util/httpOutput';
import { APISTATUS } from "../util/enum";
export class ProductService implements Service {
  path = "/product";
  r = express.Router();
  productWorker: ProductWorker;

  constructor() {
    this.productWorker = new ProductWorker();
    this.initRouter();
  }
  initRouter(): void {
    this.r.get(`${this.path}/all`, this.allProduct);
  }
  private allProduct = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const worker = this.productWorker.allProducts(req.query.cat?req.query.cat.toString():'');
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
