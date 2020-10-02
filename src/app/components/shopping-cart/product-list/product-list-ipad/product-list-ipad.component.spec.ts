import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListIpadComponent } from './product-list-ipad.component';

describe('ProductListIpadComponent', () => {
  let component: ProductListIpadComponent;
  let fixture: ComponentFixture<ProductListIpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListIpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListIpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
