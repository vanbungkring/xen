
import mongoose from 'mongoose';
import { categoryModel } from './category';

export interface IProduct {
  _id?:mongoose.Types.ObjectId
  name?: string;
  category: mongoose.Types.ObjectId,
  price: Number,
  image:String,
  stock: Number,
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Types.ObjectId,
    ref: categoryModel
  },
  image:String,
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now() }
});

schema.pre('update', function update() {
  this.update(
    {},
    {
      $set: {
        updatedAt: Date.now()
      }
    }
  );
});

schema.pre('findOneAndUpdate', function () {
  this.update(
    {},
    {
      $set: {
        updatedAt: Date.now()
      }
    }
  );
});

export const productModel = mongoose.model<IProduct & mongoose.Document>(
  'product',
  schema
);
