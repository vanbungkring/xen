import { App } from './app';
import { ProductService } from './service/productService';
import { CategoryService } from './service/categoryService';
const app = new App([
  new ProductService(),
  new CategoryService(),
]);
app.listen();
