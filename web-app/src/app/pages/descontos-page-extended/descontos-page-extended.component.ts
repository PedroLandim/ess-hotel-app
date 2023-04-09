import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Discounttype } from 'src/app/discount.service';
@Component({
  selector: 'app-descontos-page-extended',
  templateUrl: './descontos-page-extended.component.html',
  styleUrls: ['./descontos-page-extended.component.scss']
})
export class DescontosPageExtendedComponent {
  @Input() hotelName!: string;
  @Input() location!: string;
  @Input() price!: string;
  @Input() imageUrl!: string;

  ngOnInit(): void{
    
  }
}