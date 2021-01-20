import express from 'express';
import { Service } from '../util/service';
import { CartWorker } from '../worker/cartWorker';
class CartService implements Service { 
  path = '/cart';
  r = express.Router();
  cartWorker: CartWorker;
  
  constructor() { 
    this.cartWorker = new CartWorker();
  }
  initRouter(): void { 
    
  }
}