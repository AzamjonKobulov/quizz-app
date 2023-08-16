import { Questions } from '@/types';

export const data: Questions[] = [
  {
    id: crypto.randomUUID(),
    question: 'What is the capital of France?',
    answers: [
      { id: crypto.randomUUID(), answer: 'New York', isCorrect: false },
      { id: crypto.randomUUID(), answer: 'London', isCorrect: false },
      { id: crypto.randomUUID(), answer: 'Paris', isCorrect: true },
      { id: crypto.randomUUID(), answer: 'Dublin', isCorrect: false },
    ],
  },
  {
    id: crypto.randomUUID(),
    question: 'What is the biggest country in the world?',
    answers: [
      { id: crypto.randomUUID(), answer: 'Germany', isCorrect: false },
      { id: crypto.randomUUID(), answer: 'England', isCorrect: false },
      { id: crypto.randomUUID(), answer: 'Uzbekistan', isCorrect: false },
      { id: crypto.randomUUID(), answer: 'Russia', isCorrect: true },
    ],
  },
  {
    id: crypto.randomUUID(),
    question: 'Who is the fastest man in the world?',
    answers: [
      { id: crypto.randomUUID(), answer: 'Usain Bolt', isCorrect: true },
      {
        id: crypto.randomUUID(),
        answer: 'Cristiano Ronaldo',
        isCorrect: false,
      },
      { id: crypto.randomUUID(), answer: 'Kylian Mbappe', isCorrect: false },
      { id: crypto.randomUUID(), answer: 'Mike Tyson', isCorrect: false },
    ],
  },
  {
    id: crypto.randomUUID(),
    question: 'Who is the richest man in the world?',
    answers: [
      { id: crypto.randomUUID(), answer: 'Elon Musk', isCorrect: true },
      {
        id: crypto.randomUUID(),
        answer: 'Mark Zuckerberg',
        isCorrect: false,
      },
      { id: crypto.randomUUID(), answer: 'Bill Gates', isCorrect: false },
      { id: crypto.randomUUID(), answer: 'Jeff Bezos', isCorrect: false },
    ],
  },
];
