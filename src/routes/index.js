import express from 'express';
import { checkCode, validURL } from '../middlewares/index.js';
import { redirect, shortenUrl } from '../controllers/index.js';

const router = express.Router();

router.post('/', validURL, shortenUrl);


router.get('/:code', checkCode, redirect);

export default router;
