import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegFoodComponent } from './veg-food.component';

describe('VegFoodComponent', () => {
  let component: VegFoodComponent;
  let fixture: ComponentFixture<VegFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
