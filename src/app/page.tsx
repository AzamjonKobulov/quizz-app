'use client';

import { useState } from 'react';

import Answers from './components/Answers';
import Question from './components/Question';
import Stats from './components/Stats';
import { data } from '../utils/data';

const Home: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const handleStepChange = () => {
    if (step < 4) {
      setStep((step) => step + 1);
    }

    return;
  };

  return (
    <div
      className={`max-w-3xl w-full min-h-[22rem] px-7 py-9 text-white bg-blue-950 rounded-2xl ${
        step === data.length ? 'grid place-content-center' : ''
      }`}
    >
      {step !== data.length ? (
        <div className="grid gap-y-10 sm:gap-y-0 sm:grid-cols-2 gap-x-6">
          <Question step={step} data={data} />
          <Answers
            step={step}
            onStepChange={handleStepChange}
            data={data}
            onSetCorrectAnswers={setCorrectAnswers}
          />
        </div>
      ) : (
        <Stats correctAnswers={correctAnswers} data={data} />
      )}
    </div>
  );
};

export default Home;
