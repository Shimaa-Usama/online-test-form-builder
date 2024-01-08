import { Component } from '@angular/core';
import { QuestionTypeEnum } from '../../enums/question-type';
import { MultipleChoiseQuestion } from '../../models/multiple-choice-question.model';
import { ParagraphWithQuestions } from '../../models/paragraph-question';

@Component({
  selector: 'online-test-page',
  templateUrl: './online-test-page.component.html',
  styleUrl: './online-test-page.component.scss'
})
export class OnlineTestPageComponent {
  public courseName = 'Math';
  public questionList: (MultipleChoiseQuestion | ParagraphWithQuestions)[] = [
    {
      id: 1,
      question: '2x + 6y = 22, x + y = 5 What is x ?',
      options: [1, 2, 3, 'none'],
      correctAnswer: 'none',
      questionType: QuestionTypeEnum.MULTIPLE_CHOICE_QUESTION
    },
    {
      id: 2,
      question: 'What is 1/4 + 1/5 + 1/6 = ?',
      options: [3 / 15, 3 / 120, 7 / 60, 'none'],
      correctAnswer: 'none',
      questionType: QuestionTypeEnum.MULTIPLE_CHOICE_QUESTION
    },
    {
      id: 3,
      paragraph: 'A man is climbing up a mountain which is inclined. He has to travel 100 km to reach the top of the mountain. Every day He climbs up 2 km forward in the day time. Exhausted, he then takes rest there at night time. At night, while he is asleep, he slips down 1 km backwards because the mountain is inclined.',
      questions: [{ question: 'how many days does it take him to reach the mountain top? ', answer: 99 }],
      questionType: QuestionTypeEnum.PARAGRAPH_WITH_QUESTIONS
    }
  ]
}
