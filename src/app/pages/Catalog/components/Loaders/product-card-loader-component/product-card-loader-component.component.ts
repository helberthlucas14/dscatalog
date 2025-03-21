import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { generateList } from '../../../../../shared/utils/generate-list';

@Component({
  selector: 'app-product-card-loader-component',
  standalone: true,
  imports: [CommonModule, ContentLoaderModule],
  templateUrl: './product-card-loader-component.component.html',
  styleUrls: ['./product-card-loader-component.component.css'],
})
export class ProductCardLoaderComponentComponent {
  loaderItems = generateList(3);
}
