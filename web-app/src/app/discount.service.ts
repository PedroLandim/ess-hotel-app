import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) {}

  getAlldiscounts(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/discount');
  }
}

export interface Discounttype{
    hotelName: string
    location: string
    price: number
    imageUrl: string
}