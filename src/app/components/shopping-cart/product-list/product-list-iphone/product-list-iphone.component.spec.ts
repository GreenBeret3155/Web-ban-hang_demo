import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListIphoneComponent } from './product-list-iphone.component';

describe('ProductListIphoneComponent', () => {
  let component: ProductListIphoneComponent;
  let fixture: ComponentFixture<ProductListIphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListIphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
