import { Service } from '../util/service';
import express from 'express';
export class CategoryService implements Service {
  
  path = '/category';
  r = express.Router();
  categoryWorker: CategoryWorker;
  
  constructor() {
    this.categoryWorker = new CategoryWorker();
  }

}