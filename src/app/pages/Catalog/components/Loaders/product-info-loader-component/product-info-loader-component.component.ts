import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';

@Component({
  selector: 'app-product-info-loader-component',
  standalone: true,
  imports: [CommonModule, ContentLoaderModule],
  templateUrl: './product-info-loader-component.component.html',
  styleUrls: ['./product-info-loader-component.component.css'],
})
export class ProductInfoLoaderComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
