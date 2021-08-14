import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExampleComponent } from './pipes-example.component';

describe('PipesExampleComponent', () => {
  let component: PipesExampleComponent;
  let fixture: ComponentFixture<PipesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
