import { Question } from "./interfaces";

const QuestionBlock = ({
  question,
  setChosenAnswers,
  setUnansweredQuestionIds,
  unansweredQuestionIds,
  quizItemId,
  chosenAnswers,
}: {
  question: Question;
  setChosenAnswers: Function;
  setUnansweredQuestionIds: Function;
  unansweredQuestionIds: number[] | undefined;
  quizItemId: number;
  chosenAnswers: string[];
}) => {
  const handleClick = () => {
    setChosenAnswers((prev: string[]) => [...prev, question.text]);
    setUnansweredQuestionIds(
      unansweredQuestionIds?.filter((id: number) => id !== quizItemId)
    );
  };

  const validPick =
    !chosenAnswers?.includes(question.text) &&
    !unansweredQuestionIds?.includes(quizItemId);

  return (
    <button
      type="button"
      className="question-block"
      disabled={validPick}
      onClick={handleClick}
    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit} </a>
        <a href={"https://www.unsplash.com"}>Unsplash</a>
      </p>
    </button>
  );
};

export default QuestionBlock;
