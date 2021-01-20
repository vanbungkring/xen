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
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false, // Don't build indexes
        poolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      })
      .catch((err) => {
        console.log('Not Connected to Database ERROR! ', err);
      });
  }
}