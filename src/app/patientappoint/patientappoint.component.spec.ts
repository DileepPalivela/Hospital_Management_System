import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientappointComponent } from './patientappoint.component';

describe('PatientappointComponent', () => {
  let component: PatientappointComponent;
  let fixture: ComponentFixture<PatientappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientappointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
