import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestFormContainerComponent } from './online-test-container.component';

describe('OnlineTestFormContainerComponent', () => {
  let component: OnlineTestFormContainerComponent;
  let fixture: ComponentFixture<OnlineTestFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineTestFormContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineTestFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
