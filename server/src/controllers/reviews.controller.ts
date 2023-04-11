import { date, User_review } from '../models/reviews';

export class ReviewsController {
    reviews: User_review[];

    comentario: string = 'alo'
    today: date = {
        day: 8,
        month: "april",
        year: 2022
    };

    constructor() {
        this.reviews = [
            {
                nome: "João",
                country: "Brazil",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Ana",
                country: "Argentina",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Lucas",
                country: "Eua",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Chang",
                country: "China",
                comment: this.comentario,
                date_of_comment: this.today,
            }
        ]
    }

    addReview(name: string, country: string, comment: string, date: date) {
        const newReview: User_review = {
            nome : name,
            country: country,
            comment: comment,
            date_of_comment: date
        }

        this.reviews.push(newReview);
    }

    getAtractionReview(idReview: any){
        return idReview;
    }

    getAllReviews(){
        return this.reviews;
    }
}