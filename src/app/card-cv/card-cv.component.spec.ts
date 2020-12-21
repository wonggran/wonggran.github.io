import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCvComponent } from './card-cv.component';

describe('CardCvComponent', () => {
  let component: CardCvComponent;
  let fixture: ComponentFixture<CardCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
