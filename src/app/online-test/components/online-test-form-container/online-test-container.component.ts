import { Component, Input } from '@angular/core';
import { QuestionTypeEnum } from '../../enums/question-type';
import { MultipleChoiseQuestion } from '../../models/multiple-choice-question.model';
import { ParagraphWithQuestions } from '../../models/paragraph-question';

@Component({
  selector: 'online-test-container',
  templateUrl: './online-test-container.component.html',
  styleUrl: './online-test-container.component.scss'
})
export class OnlineTestContainerComponent {
  @Input() courseName!: string;
  @Input() questionList!: (MultipleChoiseQuestion | ParagraphWithQuestions)[];

}
