import { Stack, Text } from "@chakra-ui/react";

import { BigTalkQuestion } from "types/question";

type QuestionCardProps = {
  question: BigTalkQuestion;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  const { title, color } = question;

  return (
    <Stack
      borderRadius={[16, 24]}
      borderWidth={2}
      borderColor={`${color}.200`}
      backgroundColor={`${color}.100`}
      padding={6}
    >
      <Text fontWeight="black" fontSize="2xl" color={`${color}.600`}>
        {title}
      </Text>
    </Stack>
  );
};

export default QuestionCard;
