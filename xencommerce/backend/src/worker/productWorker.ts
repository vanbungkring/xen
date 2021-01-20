
import { productModel, IProduct } from '../models/product';
export interface IProductWorker { 
  createProduct(product: IProduct): Promise<any>;
  findProductById(id: string): Promise<any>;
  findProductByCategory(category: string): Promise<any>;
}
export class ProductWorker implements IProductWorker {
  
  constructor() {

  }

  findProductByCategory(category: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  
  createProduct(product: IProduct): Promise<any> {
    throw new Error('Method not implemented.');
  }

  findProductById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  } 

}