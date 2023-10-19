import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProfessionComponent } from './job-profession.component';

describe('JobProfessionComponent', () => {
  let component: JobProfessionComponent;
  let fixture: ComponentFixture<JobProfessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobProfessionComponent]
    });
    fixture = TestBed.createComponent(JobProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
