import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestFormHeaderComponent } from './online-test-form-header.component';

describe('OnlineTestFormHeaderComponent', () => {
  let component: OnlineTestFormHeaderComponent;
  let fixture: ComponentFixture<OnlineTestFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineTestFormHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineTestFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
