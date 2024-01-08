import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphWithQuestionsComponent } from './paragraph-with-questions.component';

describe('ParagraphWithQuestionsComponent', () => {
  let component: ParagraphWithQuestionsComponent;
  let fixture: ComponentFixture<ParagraphWithQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphWithQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParagraphWithQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
