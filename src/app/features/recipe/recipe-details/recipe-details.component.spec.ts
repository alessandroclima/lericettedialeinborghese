import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsComponent } from './recipe-details.component';

describe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RecipeDetailsComponent]
});
    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
