
import { productModel, IProduct } from '../models/product';
import { ILooseObject } from '../util/looseObject';
export interface IProductWorker { 
  createProduct(product: IProduct): Promise<any>;
  findProductById(id: string): Promise<any>;
  allProducts():Promise<any>
}
export class ProductWorker implements IProductWorker {
  
  constructor() {

  }
  allProducts(categories?: string): Promise<any> {
    let params: ILooseObject = {};
    if (categories) { 
      params.category = categories;
    }
    return new Promise((resolve, reject) => {
      productModel
        .find(params)
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