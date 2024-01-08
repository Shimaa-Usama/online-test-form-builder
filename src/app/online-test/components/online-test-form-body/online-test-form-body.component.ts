import { Component, Input } from '@angular/core';
import { QuestionTypeEnum } from '../../enums/question-type';
import { FormGroup, FormBuilder } from '@angular/forms';
import { onlineTestForm } from './online-test-form';
import { MultipleChoiseQuestion } from '../../models/multiple-choice-question.model';
import { ParagraphWithQuestions } from '../../models/paragraph-question';

@Component({
  selector: 'online-test-form-body',
  templateUrl: './online-test-form-body.component.html',
  styleUrl: './online-test-form-body.component.scss'
})
export class OnlineTestFormBodyComponent {
  @Input() questionList!: (MultipleChoiseQuestion | ParagraphWithQuestions)[];


  public QuestionTypeEnum = QuestionTypeEnum;
  public onlineTestFormGroup: FormGroup;
  public onlineTestForm = onlineTestForm;

  constructor(private formBuilder: FormBuilder) {
    this.onlineTestFormGroup = formBuilder.group({});
    this.initFormGroup();
  }

  private initFormGroup(): void {
    onlineTestForm.forEach(control => {
      this.onlineTestFormGroup.addControl(control?.formControlName, this.formBuilder.control('', control.validators));
    });
  }

  public submitForm() {
  }
}
