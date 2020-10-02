import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListMacbookComponent } from './product-list-macbook.component';

describe('ProductListMacbookComponent', () => {
  let component: ProductListMacbookComponent;
  let fixture: ComponentFixture<ProductListMacbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListMacbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListMacbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
