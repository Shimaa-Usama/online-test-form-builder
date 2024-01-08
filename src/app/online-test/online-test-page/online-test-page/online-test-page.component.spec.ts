import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestPageComponent } from './online-test-page.component';

describe('OnlineTestPageComponent', () => {
  let component: OnlineTestPageComponent;
  let fixture: ComponentFixture<OnlineTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineTestPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
