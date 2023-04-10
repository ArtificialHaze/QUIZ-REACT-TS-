import { QuizData } from "./interfaces";

type Props = {
  title: QuizData["title"] | undefined;
  subtitle: QuizData["subtitle"] | undefined;
};

const Title = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;
