import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'online-test-answers',
  templateUrl: './online-test-answers.component.html',
  styleUrl: './online-test-answers.component.scss'
})
export class OnlineTestAnswersComponent {
  @Input() answers!: any;

  public formatKey(key: any): string{
    return key.replace('question', '')
  }
}
