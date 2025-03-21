import { Product } from './Product';

export class ProductResponse {
  content: Product[];
  totalPages: number;

  constructor(content: Product[], totalPages: number) {
    this.content = content;
    this.totalPages = totalPages;
  }
}
