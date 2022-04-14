import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalanderAddComponent } from './calander-add.component';

describe('CalanderAddComponent', () => {
  let component: CalanderAddComponent;
  let fixture: ComponentFixture<CalanderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalanderAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalanderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
