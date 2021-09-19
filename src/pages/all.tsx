import { Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import QuestionCard from "components/home/QuestionCard";
import { BigTalkQuestion } from "types/question";

import { fetchQuestions } from "./api/questions";

export type AllQuestionProps = {
  questions: Array<BigTalkQuestion>;
};

const All = ({ questions }: AllQuestionProps) => {
  return (
    <Stack mb={8} w="full" height="full" spacing={6}>
      {questions.map((question) => (
        <QuestionCard question={question} />
      ))}
    </Stack>
  );
};

export const getStaticProps: GetStaticProps<AllQuestionProps> = async () => {
  const questions: Array<BigTalkQuestion> = await fetchQuestions();

  return {
    props: {
      questions,
    },
    revalidate: 10,
  };
};

export default All;
