import { ICategory, categoryModel } from "../models/category";

interface ICategoryWorker {
  createCategory(category: ICategory): Promise<any>;
  categoryDetail(id: string): Promise<any>;
  showAllCategories(): Promise<any>;
}
export class CategoryWorker implements ICategoryWorker {
  createCategory(category: ICategory): Promise<any> {
    return new Promise((resolve, reject) => {
      categoryModel
        .create(category)
        .then((data: ICategory) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  categoryDetail(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      categoryModel
        .findOne({_id:id})
        .then((data: ICategory) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  showAllCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      categoryModel
        .find()
        .then((data: ICategory[]) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}
