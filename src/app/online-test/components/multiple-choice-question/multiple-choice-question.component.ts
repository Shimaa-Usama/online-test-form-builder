import { Component, Input } from '@angular/core';
import { MultipleChoiseQuestion } from '../../models/multiple-choice-question.model';

@Component({
  selector: 'multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrl: './multiple-choice-question.component.scss'
})
export class MultipleChoiceQuestionComponent {
  @Input() question: any;
}
