import { QuestionTypeEnum } from "../enums/question-type";

export interface MultipleChoiseQuestion {
  question: string;
  options: any[];
  correctAnswer: string;
  questionType: QuestionTypeEnum;
}