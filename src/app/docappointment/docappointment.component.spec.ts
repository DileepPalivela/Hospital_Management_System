import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocappointmentComponent } from './docappointment.component';

describe('DocappointmentComponent', () => {
  let component: DocappointmentComponent;
  let fixture: ComponentFixture<DocappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocappointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
