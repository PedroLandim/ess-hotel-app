import { Discount } from "../models/discount";

export class DiscountController{
    discounts: Discount[] = [{
        hotelName: "Angra dos Reis",
        location: "RJ",
        price: 5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fdLf0ftCDZydeOcYSr1RYwFvc6IazxdMe-lU7KNaC3GuAtSizTnye9ZnXcwprf4NLEc&usqp=CAU'
    },
    {
        hotelName: "Lençois maranhenses",
        location: "MA",
        price: 7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fdLf0ftCDZydeOcYSr1RYwFvc6IazxdMe-lU7KNaC3GuAtSizTnye9ZnXcwprf4NLEc&usqp=CAU'
    }];

    constructor(){}

    getALLDiscounts(): Discount[]{
        return this.discounts;
    }

    addDiscount(hotelName: string,
        location: string,
        price: number,
        imageUrl: string): void{

        }

}