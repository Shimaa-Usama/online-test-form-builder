import { QuestionTypeEnum } from "../enums/question-type";

export interface ParagraphWithQuestions {
  paragraph: string;
  questions: Question[];
  questionType: QuestionTypeEnum;
}

interface Question {
  question: string;
  answer: string | number;
}