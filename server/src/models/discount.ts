export class Discount{
    titulo!: string
    text!: string
    price!: number
    imageUrl!: string

    constructor(titulo: string, text: string, price: number, imageUrl: string){
        this.titulo = titulo
        this.text = text
        this.price = price
        this.imageUrl = imageUrl
    }
}