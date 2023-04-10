import { useEffect, useState } from "react";
import { Answer } from "./interfaces";

const AnswerBlock = ({
  answerOptions,
  chosenAnswersBlock,
}: {
  answerOptions: Answer[] | undefined;
  chosenAnswersBlock: string[];
}) => {
  const [result, setResult] = useState<Answer | null>();

  useEffect(() => {
    answerOptions?.forEach((answer: Answer) => {
      if (
        chosenAnswersBlock.includes(answer.combination[0]) &&
        chosenAnswersBlock.includes(answer.combination[1]) &&
        chosenAnswersBlock.includes(answer.combination[2])
      ) {
        setResult(answer);
      }
    });
  }, [chosenAnswersBlock]);

  return (
    <div id="answer-block" className="answer-block">
      <h2>{result?.text}</h2>
      <img src={result?.image} alt={result?.text} />
    </div>
  );
};

export default AnswerBlock;
