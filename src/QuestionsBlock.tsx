import QuestionBlock from "./QuestionBlock";
import { Content, Question } from "./interfaces";

const QuestionsBlock = ({
  quizItem,
  setChosenAnswers,
  setUnansweredQuestionIds,
  unansweredQuestionIds,
  chosenAnswers,
}: {
  quizItem: Content;
  setChosenAnswers: Function;
  setUnansweredQuestionIds: Function;
  unansweredQuestionIds: number[] | undefined;
  chosenAnswers: string[];
}) => {
  return (
    <>
      <h2 className="title-block" id={String(quizItem.id)}>
        {quizItem.text}
      </h2>
      <div className="questions-container">
        {quizItem.questions.map((question: Question, id: number) => {
          <QuestionBlock
            key={id}
            question={question}
            quizItemId={quizItem.id}
            setChosenAnswers={setChosenAnswers}
            unansweredQuestionIds={unansweredQuestionIds}
            setUnansweredQuestionIds={setUnansweredQuestionIds}
            chosenAnswers={chosenAnswers}
          />;
        })}
      </div>
    </>
  );
};

export default QuestionsBlock;
