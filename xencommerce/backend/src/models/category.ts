
import mongoose from 'mongoose';

export interface ICategory {
  name?: string;
  categoryId: string,
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new mongoose.Schema({
  name: String,
  categoryId: String,
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

export const categoryModel = mongoose.model<ICategory & mongoose.Document>(
  'cateogory',
  schema
);
