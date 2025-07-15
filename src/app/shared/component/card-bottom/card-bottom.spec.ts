import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBottom } from './card-bottom';

describe('CardBottom', () => {
  let component: CardBottom;
  let fixture: ComponentFixture<CardBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBottom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
