import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadVariablesComponent } from './load-variables.component';

describe('LoadVariablesComponent', () => {
  let component: LoadVariablesComponent;
  let fixture: ComponentFixture<LoadVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
