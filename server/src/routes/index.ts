import { Router, Request, Response } from 'express';

import discountrouter from './discount.routes';

const router = Router()
router.use("/discount", discountrouter)
export default router

