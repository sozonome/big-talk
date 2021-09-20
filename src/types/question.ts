export type BigTalkQuestion = {
  title: string;
  type?: string | null;
  color?: string | null;
};

export default BigTalkQuestion;

export type FetchQuestionsResponse = {
  questions: Array<BigTalkQuestion>;
  lastUpdated: string;
};
