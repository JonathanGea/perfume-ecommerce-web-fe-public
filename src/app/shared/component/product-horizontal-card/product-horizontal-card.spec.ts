import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHorizontalCard } from './product-horizontal-card';

describe('ProductHorizontalCard', () => {
  let component: ProductHorizontalCard;
  let fixture: ComponentFixture<ProductHorizontalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHorizontalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHorizontalCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
