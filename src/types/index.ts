export interface Questions {
  id: string;
  question: string;
  answers: Answers[];
}

export interface Answers {
  id: string;
  answer: string;
  isCorrect: boolean;
}
