import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductResponse } from '../../shared/models/ProductResponse';
import { Product } from '../../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl: string =
    environment.BASE_URL || 'http://localhost:8080';

  constructor(private readonly http: HttpClient) {}

  getProducts(page: number, linesPerPage: number): Observable<ProductResponse> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('linesPerPage', String(linesPerPage));

    return this.http.get<ProductResponse>(`${this.baseUrl}/products`, {
      params,
    });
  }

  getProduct(productId: string): Observable<Product | null> {
    var x = this.http.get<Product>(`${this.baseUrl}/products/${productId}`);
    return x;
  }
}
