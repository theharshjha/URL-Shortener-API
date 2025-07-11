import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import rateLimit from 'express-rate-limit';

import router from './routes/index.js';
import { ErrorHandler } from './utils/index.js';
import { resetDatabase } from './models/index.js';
import morgan from 'morgan';

config();

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  message: { error: 'Too many requests, please try again later.' },
});

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/shorten', limiter);

app.use('/', router);

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use(ErrorHandler);

const PORT = process.env.PORT || 5678;
app.listen(PORT, async () => {
  console.log(`Server started on PORT: ${PORT}`);
  await resetDatabase();
});
