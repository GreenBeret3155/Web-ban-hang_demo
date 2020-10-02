import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartDetailComponent } from './product-cart-detail.component';

describe('ProductCartDetailComponent', () => {
  let component: ProductCartDetailComponent;
  let fixture: ComponentFixture<ProductCartDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCartDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
