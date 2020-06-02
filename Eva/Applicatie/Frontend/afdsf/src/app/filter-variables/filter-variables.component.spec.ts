import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVariablesComponent } from './filter-variables.component';

describe('FilterVariablesComponent', () => {
  let component: FilterVariablesComponent;
  let fixture: ComponentFixture<FilterVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
