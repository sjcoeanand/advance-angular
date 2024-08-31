import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostParamComponent } from './host-param.component';

describe('HostParamComponent', () => {
  let component: HostParamComponent;
  let fixture: ComponentFixture<HostParamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostParamComponent]
    });
    fixture = TestBed.createComponent(HostParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
