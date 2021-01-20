import { categoryModel, ICategory } from '../models/category';
import { Storage } from '../util/storage';


const generateDummyCategories = async () => {
  const db = new Storage();
  db.connect();

  let categoriesArray: ICategory[] = [];

  for (let index = 0; index < 4; index++) {
    const categories: ICategory = {
      name: `category-${index}`,
      categoryId: `${index}`,
    }
    categoriesArray.push(categories);
  }
  await categoryModel.create(categoriesArray);
};

(async function () {
  await generateDummyCategories();
  process.exit();
})();
