/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductDescriptionLoaderComponentComponent } from './product-description-loader-component.component';

describe('ProductDescriptionLoaderComponentComponent', () => {
  let component: ProductDescriptionLoaderComponentComponent;
  let fixture: ComponentFixture<ProductDescriptionLoaderComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDescriptionLoaderComponentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      ProductDescriptionLoaderComponentComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
