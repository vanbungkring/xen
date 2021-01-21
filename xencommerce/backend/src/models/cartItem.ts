import mongoose from "mongoose";
import { productModel } from "./product";
export interface IItem {
  _id?:mongoose.Types.ObjectId
  product?: mongoose.Types.ObjectId;
  quantity: number;
  price?: number;
  total?: number;
}
export interface ICart {
  items?: [IItem];
  subTotal: number;
}

const itemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    ref: productModel,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity can not be less then 1."],
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  items: [itemSchema],
  subTotal: {
    default: 0,
    type: Number,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now() },
});

cartSchema.pre("update", function update() {
  this.update(
    {},
    {
      $set: {
        updatedAt: Date.now(),
      },
    }
  );
});

cartSchema.pre("findOneAndUpdate", function () {
  this.update(
    {},
    {
      $set: {
        updatedAt: Date.now(),
      },
    }
  );
});

export const cartModel = mongoose.model<ICart & mongoose.Document>(
  "cart",
  cartSchema
);
