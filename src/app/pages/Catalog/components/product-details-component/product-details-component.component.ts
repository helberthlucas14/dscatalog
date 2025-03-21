import { Component, OnInit } from '@angular/core';
import { ProductPriceComponentComponent } from '../../../../shared/components/product-price-component/product-price-component.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../shared/models/Product';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../../core/services/ProductService.service';
import { Observable, catchError, map, of } from 'rxjs';
import { ProductDescriptionLoaderComponentComponent } from '../Loaders/product-description-loader-component/product-description-loader-component.component';
import { ProductInfoLoaderComponentComponent } from '../Loaders/product-info-loader-component/product-info-loader-component.component';

@Component({
  selector: 'app-product-details-component',
  standalone: true,
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css'],
  imports: [
    CommonModule,
    ProductPriceComponentComponent,
    RouterLink,
    ProductDescriptionLoaderComponentComponent,
    ProductInfoLoaderComponentComponent,
  ],
})
export class ProductDetailsComponentComponent implements OnInit {
  productId!: string;
  product$!: Observable<Product | null>;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      console.log('🔍 Product ID capturado:', productId); // Depuração
  
      if (!productId) {
        this.errorMessage = 'ID do produto não encontrado.';
        return;
      }
  
      this.loadProduct(productId);
    });
  }

  loadProduct(productId: string) {
    this.product$ = this.productService.getProduct(productId).pipe(
      map((response) => {
        console.log('✅ Produto carregado:', response); // Depuração
        return response;
      }),
      catchError((error) => {
        console.error('❌ Erro ao buscar produto:', error);
        this.errorMessage = 'Erro ao carregar o produto.';
        return of(null);
      })
    );
  }
}
