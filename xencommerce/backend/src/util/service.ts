import { Router } from 'express';
export interface Service { 
  path: string;
  r: Router;
  initRouter(): void;
}