import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestFormBodyComponent } from './online-test-form-body.component';

describe('OnlineTestFormBodyComponent', () => {
  let component: OnlineTestFormBodyComponent;
  let fixture: ComponentFixture<OnlineTestFormBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineTestFormBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineTestFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
