import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSiguienteComponent } from './c-siguiente.component';

describe('CSiguienteComponent', () => {
  let component: CSiguienteComponent;
  let fixture: ComponentFixture<CSiguienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSiguienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSiguienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
