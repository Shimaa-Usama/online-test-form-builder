import { QuestionTypeEnum } from "../enums/question-type";

export interface MultipleChoiseQuestion {
  id: number;
  question: string;
  options: any[];
  correctAnswer: string;
  questionType: QuestionTypeEnum;
}