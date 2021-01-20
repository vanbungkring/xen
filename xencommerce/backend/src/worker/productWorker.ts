
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
    return new Promise((resolve, reject) => {
      productModel
        .find({category:category})
        .then((data: IProduct[]) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  createProduct(product: IProduct): Promise<any> {
     return new Promise((resolve, reject) => {
      productModel
        .create(product)
        .then((data: IProduct) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  findProductById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      productModel
        .findOne({_id:id})
        .then((data: IProduct) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } 

}