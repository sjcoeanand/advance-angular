import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeLearningComponent } from './pipe-learning.component';

describe('PipeLearningComponent', () => {
  let component: PipeLearningComponent;
  let fixture: ComponentFixture<PipeLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeLearningComponent]
    });
    fixture = TestBed.createComponent(PipeLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
