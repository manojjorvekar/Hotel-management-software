import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegFoodComponent } from './non-veg-food.component';

describe('NonVegFoodComponent', () => {
  let component: NonVegFoodComponent;
  let fixture: ComponentFixture<NonVegFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVegFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonVegFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
