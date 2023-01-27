import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalformComponent } from './animalform.component';

describe('AnimalformComponent', () => {
  let component: AnimalformComponent;
  let fixture: ComponentFixture<AnimalformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
