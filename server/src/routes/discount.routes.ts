import { Router, Request, Response } from 'express';
import { DiscountController } from '../controllers/discount.controller';

const discount = Router()
const discountController = new DiscountController()

discount.route('/')
    .get((req: Request, res: Response) => { 
        // rota para enviar todas as discounts disponiveis, creio que nao sera necessario
        let alldiscounts = discountController.getALLDiscounts();
        return res.send({ alldiscounts })
    })

discount.route('/:id')
    .get((req: Request, res: Response) => { 
        // rota que retorna todos descontos de uma atracao especifica selecionada por id
        let id = Number(req.params.id)

    }).post((req: Request, res: Response) => {  
        // rota para criar novos descontos
        let titulo: string = req.body.titulo
        let text: string = req.body.text
        let price: number = req.body.price
        let imageUrl: string = req.body.imageUrl

        discountController.addDiscount(titulo, text, price, imageUrl);
        let alldiscounts = discountController.getALLDiscounts();
        return res.json(alldiscounts);
    })

export default discount



