import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CActualComponent } from './c-actual.component';

describe('CActualComponent', () => {
  let component: CActualComponent;
  let fixture: ComponentFixture<CActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
