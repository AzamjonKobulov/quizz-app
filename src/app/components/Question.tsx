import { Questions } from '@/types';

interface QuestionProps {
  step: number;
  data: Questions[];
}

const Question: React.FC<QuestionProps> = ({ step, data }) => {
  return (
    <div>
      <div className="flex items-center space-x-5">
        <h1 className="text-5xl">Question</h1>
        <p className="text-3xl">
          <span className="text-5xl">{step + 1}</span>/
          <span>{data.length}</span>
        </p>
      </div>
      <p className="text-xl mt-10">{data[step].question}</p>
    </div>
  );
};

export default Question;
