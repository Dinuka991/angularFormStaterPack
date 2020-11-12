import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFormComponent } from './poc-form.component';

describe('PocFormComponent', () => {
  let component: PocFormComponent;
  let fixture: ComponentFixture<PocFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
