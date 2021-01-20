import { ICategory } from "models/category";


interface ICategoryWorker { 
  createCategory(product: ICategory): Promise<any>;
  categoryDetail(id: string): Promise<any>;
  showAllCategories(): Promise<any>;
}
export class CategoryWorker implements ICategoryWorker {
  constructor() { }
  createCategory(product: ICategory): Promise<any> {
    throw new Error("Method not implemented.");
  }
  categoryDetail(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  showAllCategories(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}