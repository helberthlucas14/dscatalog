import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price-component',
  templateUrl: './product-price-component.component.html',
  styleUrls: ['./product-price-component.component.css'],
})
export class ProductPriceComponentComponent {
  @Input() price!: number;

  formatPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      price
    );
  }
}
