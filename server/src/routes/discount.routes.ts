import { Router, Request, Response } from 'express';
import { DiscountController } from '../controllers/discount.controller';

const discountrouter = Router()
const discountController = new DiscountController()

discountrouter.get('/', (req: Request, res: Response) => {
    let discountss = discountController.getALLDiscounts()
    return res.status(200).json(discountss);
})

export default discountrouter


