import { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title";
import { Content, QuizData } from "./interfaces";
import QuestionsBlock from "./QuestionsBlock";
import AnswerBlock from "./AnswerBlock";

type Props = {};

const App = ({}: Props) => {
  const [quiz, setQuiz] = useState<QuizData | null>();
  const [chosenAnswers, setChosenAnswers] = useState<string[]>([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState<
    number[] | undefined
  >([]);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const res = await fetch("");
      const json = await res.json();
      setQuiz(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unansweredIds = quiz?.content?.map(({ id }: Content) => id);
    setUnansweredQuestionIds(unansweredIds);
  }, [quiz]);

  useEffect(() => {
    if (unansweredQuestionIds) {
      if (unansweredQuestionIds.length <= 0 && chosenAnswers.length >= 1) {
        setShowAnswers(true);
        const answerBlock = document.getElementById("answer-block");
        answerBlock?.scrollIntoView({ behavior: "smooth" });
      }
      const highestId = Math.min(...unansweredQuestionIds);
      const highestEl = document.getElementById(String(highestId));

      highestEl?.scrollIntoView({ behavior: "smooth" });
    }
  }, [unansweredQuestionIds, chosenAnswers, showAnswers]);

  return (
    <div className="App">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content.map((content: Content, id: Content["id"]) => {
        <QuestionsBlock
          setChosenAnswers={setChosenAnswers}
          setUnansweredQuestionIds={setUnansweredQuestionIds}
          key={id}
          quizItem={content}
          unansweredQuestionIds={unansweredQuestionIds}
          chosenAnswers={chosenAnswers}
        />;
      })}
      {showAnswers && (
        <AnswerBlock
          answerOptions={quiz?.answers}
          chosenAnswersBlock={chosenAnswers}
        />
      )}
    </div>
  );
};

export default App;
