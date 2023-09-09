import { Stack, Text } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import QuestionCard from "components/home/QuestionCard";
import type { BigTalkQuestion } from "types/question";
import { dateFormatLong } from "utils/dateFormat";

import { fetchQuestions } from "./api/questions";

export type AllQuestionProps = {
  questions: Array<BigTalkQuestion>;
  lastUpdated: string;
};

const All = ({ questions, lastUpdated }: AllQuestionProps) => {
  return (
    <Stack mb={8} w="full" height="full" spacing={6}>
      {questions.map((question) => (
        <QuestionCard question={question} key={question.title} />
      ))}

      <Text align="center" fontSize="sm">
        Count: {questions.length} <br />
        Last Updated: {dateFormatLong(lastUpdated, true)}
      </Text>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps<AllQuestionProps> = async () => {
  const { questions, lastUpdated } = await fetchQuestions();

  return {
    props: {
      questions,
      lastUpdated,
    },
    revalidate: 10,
  };
};

export default All;
