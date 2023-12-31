import { Dispatch, SetStateAction } from 'react';

import { Answers } from '@/types';

interface AnswerProps {
  item: Answers;
  onStepChange: () => void;
  onSetCorrectAnswers: Dispatch<SetStateAction<number>>;
}

const Answer: React.FC<AnswerProps> = ({
  item,
  onStepChange,
  onSetCorrectAnswers,
}) => {
  const handleCorrectAnswer = () => {
    item.isCorrect && onSetCorrectAnswers((correct) => correct + 1);
  };

  return (
    <li
      onClick={() => {
        onStepChange();
        handleCorrectAnswer();
      }}
      className="py-1.5 px-3 text-xl sm:text-2xl border-[0.5rem] border-indigo-600 rounded-[1.25rem] cursor-pointer hover:translate-x-3 hover:bg-blue-900 hover:text-white hover:border-indigo-500 transition-all duration-300"
    >
      {item.answer}
    </li>
  );
};

export default Answer;
