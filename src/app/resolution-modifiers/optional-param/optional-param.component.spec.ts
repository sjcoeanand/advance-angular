import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalParamComponent } from './optional-param.component';

describe('OptionalParamComponent', () => {
  let component: OptionalParamComponent;
  let fixture: ComponentFixture<OptionalParamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionalParamComponent]
    });
    fixture = TestBed.createComponent(OptionalParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
