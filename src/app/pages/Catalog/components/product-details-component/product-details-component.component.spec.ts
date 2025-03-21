/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponentComponent } from './product-details-component.component';

describe('ProductDetailsComponentComponent', () => {
  let component: ProductDetailsComponentComponent;
  let fixture: ComponentFixture<ProductDetailsComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
