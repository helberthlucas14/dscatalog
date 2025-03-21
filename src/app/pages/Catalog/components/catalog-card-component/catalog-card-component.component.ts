import { Component, Input, OnInit } from '@angular/core';
import { ProductPriceComponentComponent } from '../../../../shared/components/product-price-component/product-price-component.component';
import { Product } from '../../../../shared/models/Product';

@Component({
  selector: 'catalog-card-component',
  standalone: true,
  templateUrl: './catalog-card-component.component.html',
  styleUrls: ['./catalog-card-component.component.css'],
  imports: [ProductPriceComponentComponent],
})
export class AppCardComponentComponent {
  @Input() product!: Product;
}
