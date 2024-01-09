import { QuestionTypeEnum } from "../enums/question-type";

export interface ParagraphWithQuestions {
  id: number;
  paragraph: string;
  questions: Question[];
  questionType: QuestionTypeEnum;
}

interface Question {
  id: number;
  question: string;
  answer: string | number;
}