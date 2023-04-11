import { Discount } from "../models/discount";

export class DiscountController{
    discounts: Discount[];  
    constructor(){
        this.discounts =[
    {
        titulo: "Angra dos Reis",
        text: "RJ",
        price: 5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fdLf0ftCDZydeOcYSr1RYwFvc6IazxdMe-lU7KNaC3GuAtSizTnye9ZnXcwprf4NLEc&usqp=CAU'
    },
    {
        titulo: "Lençois maranhenses",
        text: "MA",
        price: 7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fdLf0ftCDZydeOcYSr1RYwFvc6IazxdMe-lU7KNaC3GuAtSizTnye9ZnXcwprf4NLEc&usqp=CAU'
    }]}

    getALLDiscounts(){
        return this.discounts;
    }

    addDiscount(titulo: string,
        text: string,
        price: number,
        imageUrl: string): void{
            const NewDiscount: Discount = {
                titulo: titulo,
                text: text,
                price: price,
                imageUrl: imageUrl
            }
        this.discounts.push(NewDiscount)
    }
}
