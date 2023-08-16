import { Dispatch, SetStateAction } from 'react';

import { Questions } from '@/types';

import Answer from './Answer';

interface AnswersProps {
  step: number;
  data: Questions[];
  onStepChange: () => void;
  onSetCorrectAnswers: Dispatch<SetStateAction<number>>;
}

const Answers: React.FC<AnswersProps> = ({
  step,
  data,
  onStepChange,
  onSetCorrectAnswers,
}) => {
  const currentQuestions = data[step];

  return (
    <ul className="space-y-4">
      {currentQuestions.answers.map((item) => (
        <Answer
          key={item.id}
          item={item}
          onStepChange={onStepChange}
          onSetCorrectAnswers={onSetCorrectAnswers}
        />
      ))}
    </ul>
  );
};

export default Answers;
