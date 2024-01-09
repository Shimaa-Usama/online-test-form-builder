import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestAnswersComponent } from './online-test-answers.component';

describe('OnlineTestAnswersComponent', () => {
  let component: OnlineTestAnswersComponent;
  let fixture: ComponentFixture<OnlineTestAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineTestAnswersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineTestAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
