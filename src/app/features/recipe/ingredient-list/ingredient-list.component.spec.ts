import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListComponent } from './ingredient-list.component';

describe('IngredientListComponent', () => {
  let component: IngredientListComponent;
  let fixture: ComponentFixture<IngredientListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [IngredientListComponent]
});
    fixture = TestBed.createComponent(IngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
