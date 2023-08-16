import { Questions } from '@/types';

interface StatsProps {
  correctAnswers: number;
  data: Questions[];
}

const Stats: React.FC<StatsProps> = ({ correctAnswers, data }) => {
  return (
    <h1 className="text-2xl sm:text-3xl text-center">
      You scored {correctAnswers} out of {data.length}
    </h1>
  );
};

export default Stats;
