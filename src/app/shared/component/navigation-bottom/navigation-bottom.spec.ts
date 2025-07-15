import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBottom } from './navigation-bottom';

describe('NavigationBottom', () => {
  let component: NavigationBottom;
  let fixture: ComponentFixture<NavigationBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBottom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
