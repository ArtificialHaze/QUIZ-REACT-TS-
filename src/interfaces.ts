interface QuizData {
  title: string;
  subtitle: string;
  quizId: string;
  content: Content[];
  answers: Answer[];
}

interface Content {
  id: number;
  text: string;
  questions: Question[];
}

interface Answer {
  id: string;
  image: string;
  alt: string;
  text: string;
  combination: string[];
}

interface Question {
  text: string;
  image: string;
  alt: string;
  credit: string;
}

export type { QuizData, Content, Answer, Question };
