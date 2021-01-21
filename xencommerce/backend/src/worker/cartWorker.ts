import { IItem, cartModel, ICart } from '../models/cartItem';
export interface ICartWorker {
  findCart(): Promise<any>;
  addItemToCart(IItem: IItem): Promise<any>;
}
export class CartWorker implements ICartWorker {
  constructor() { }
  findCart(): Promise<any> {
    return new Promise((resolve, reject) => {
      cartModel.find().populate({
        path: "items.product",
        select: "name price total",
      }).then((data: ICart[]) => {
        return data[0];
      });
    });
  }
  async addItemToCart(items: IItem): Promise<any> {
    let currentCart = await cartModel.find() as unknown as ICart;
    return new Promise((resolve, reject) => {
      if (!currentCart) {
        let cart: ICart = {
          items: [items],
          subTotal: items.price * items.quantity
        }
        cartModel.create(cart).then((data: ICart) => {
          resolve(data);
        })
      } else { 
         //---- Check if index exists ----
        const indexFound = currentCart.items.findIndex(item => item.product.toHexString() == items.product.toString());
        
         //------This removes an item from the the cart if the quantity is set to zero, We can use this method to remove an item from the list  -------
      }
    });
  }
}
