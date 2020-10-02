import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListIwatchComponent } from './product-list-iwatch.component';

describe('ProductListIwatchComponent', () => {
  let component: ProductListIwatchComponent;
  let fixture: ComponentFixture<ProductListIwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListIwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListIwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
