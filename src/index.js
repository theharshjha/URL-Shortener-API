import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import { config } from 'dotenv'
import router from './routes/index.js';
import { ErrorHandler } from './utils/index.js';
import { resetDatabase } from './models/index.js';


config();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(ErrorHandler);

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
  console.log(`Server started listening on PORT: ${PORT}`);
  resetDatabase();
});