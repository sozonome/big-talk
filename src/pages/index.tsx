import { Button, Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useState } from "react";

import QuestionCard from "components/home/QuestionCard";
import { BigTalkQuestion } from "types/question";

import { fetchQuestions } from "./api/questions";

export type HomeProps = {
  questions: Array<BigTalkQuestion>;
};

const Home = ({ questions }: HomeProps) => {
  const total = questions.length;

  const [index, setIndex] = useState<number>(total - 1);
  const [show, setShow] = useState<boolean>(false);

  const handleGenerate = () => {
    setIndex(Math.floor(Math.random() * total));
    setShow(true);
  };

  return (
    <Stack mb={8} w="full" height="full" spacing={6}>
      {show && <QuestionCard question={questions[index]} />}

      <Button
        onClick={handleGenerate}
        colorScheme={`${questions[index].color}`}
      >
        Surprise Me
      </Button>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const questions: Array<BigTalkQuestion> = await fetchQuestions();

  return {
    props: {
      questions,
    },
    revalidate: 10,
  };
};

export default Home;
