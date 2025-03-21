import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';

@Component({
  selector: 'app-product-description-loader-component',
  standalone: true,
  imports: [CommonModule, ContentLoaderModule],
  templateUrl: './product-description-loader-component.component.html',
})
export class ProductDescriptionLoaderComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
