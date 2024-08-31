import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfParamComponent } from './self-param.component';

describe('SelfParamComponent', () => {
  let component: SelfParamComponent;
  let fixture: ComponentFixture<SelfParamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfParamComponent]
    });
    fixture = TestBed.createComponent(SelfParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
