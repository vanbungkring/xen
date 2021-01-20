import { Service } from "../util/service";
import express from "express";
export class ProductService implements Service {
  path = "/product";
  r = express.Router();
  categoryWorker: CategoryWorker;

  constructor() {
    this.initRouter();
  }
  initRouter(): void {
    throw new Error("Method not implemented.");
  }
}
