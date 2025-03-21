import { Component, OnInit } from '@angular/core';
import { ProductCardLoaderComponentComponent } from './Loaders/product-card-loader-component/product-card-loader-component.component';
import { PaginationComponentComponent } from '../../../shared/components/pagination-component/pagination-component.component';
import { ProductResponse } from '../../../shared/models/ProductResponse';
import { ProductService } from '../../../core/services/ProductService.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppCardComponentComponent } from "./catalog-card-component/catalog-card-component.component";

@Component({
  selector: 'app-catalog-component',
  standalone: true,
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css'],
  imports: [
    CommonModule,
    ProductCardLoaderComponentComponent,
    PaginationComponentComponent,
    RouterLink,
    AppCardComponentComponent
],
})
export class CatalogComponentComponent implements OnInit {
  productResponse?: ProductResponse;
  isLoading = false;
  activePage = 0;
  linesPerPage = 10;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;

    this.productService
      .getProducts(this.activePage, this.linesPerPage)
      .subscribe(
        (response) => {
          this.productResponse = response;
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  onPageChange(page: number): void {
    this.activePage = page;
    this.loadProducts();
  }
}
