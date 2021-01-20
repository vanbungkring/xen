import { Service } from "../util/service";
import express from "express";
import { ProductWorker } from '../worker/productWorker';
export class ProductService implements Service {
  path = "/product";
  r = express.Router();
  productWorker: ProductWorker;

  constructor() {
    this.initRouter();
  }
  initRouter(): void {
  }
}
