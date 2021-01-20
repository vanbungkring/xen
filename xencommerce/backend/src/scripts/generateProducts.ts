import { productModel, IProduct } from '../models/product';
import { CategoryWorker } from '../worker/categoryWorker';
import { ICategory } from '../models/category';
import { Storage } from '../util/storage';
import mongoose from 'mongoose';


const generateDummyProduct = async () => {
  const db = new Storage();
  db.connect();
  let categoriesArray: ICategory[] = await new CategoryWorker().showAllCategories();
  let productArray: IProduct[] = [];
  for (let index = 0; index < categoriesArray.length; index++) {
    const product: IProduct = {
      name: `product-${index}-${categoriesArray[index].name}`,
      category: mongoose.Types.ObjectId(categoriesArray[index]._id),
      image: `https://5.imimg.com/data5/MO/OY/EE/SELLER-35777073/cloth-mannequin-500x500.jpg`,
      price: 100000,
      stock:1000
    }
    productArray.push(product);
  }
  await productModel.create(productArray);
};

(async function () {
  await generateDummyProduct();
  // await generateSubscription();
  process.exit();
})();
