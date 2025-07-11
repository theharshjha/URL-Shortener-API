import express from 'express';
import { checkCode, validURL } from '../middlewares/index.middleware.js';
import { redirect, shortenUrl } from '../controllers/index.contorller.js';

const router = express.Router();

router.post('/shorten', validURL, shortenUrl);
router.get('/:code', checkCode, redirect);

export default router;
