import mongoose from 'mongoose';
import { CONFIG } from './config';
export class Storage { 
  dbUrl: string;
  constructor() {
    console.log('mongodb init');
    this.dbUrl = CONFIG.DB_URL;
  }
  connect() {
    (<any>mongoose).Promise = global.Promise;
    mongoose.set('debug', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose
      .connect(this.dbUrl, {
        useNewUrlParser: true
      })
      .catch((err) => {
        console.log('Not Connected to Database ERROR! ', err);
      });
  }
}