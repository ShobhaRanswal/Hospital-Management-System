import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingdoctorComponent } from './addingdoctor.component';

describe('AddingdoctorComponent', () => {
  let component: AddingdoctorComponent;
  let fixture: ComponentFixture<AddingdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddingdoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddingdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
