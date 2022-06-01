import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalanderDateComponent } from './calander-date.component';

describe('CalanderDateComponent', () => {
  let component: CalanderDateComponent;
  let fixture: ComponentFixture<CalanderDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalanderDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalanderDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
