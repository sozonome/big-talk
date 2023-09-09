import { Stack, Text } from "@chakra-ui/react";

import type { BigTalkQuestion } from "types/question";

type QuestionCardProps = {
  question: BigTalkQuestion;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  const { title, color } = question;

  const qColor = color ?? "gray";

  return (
    <Stack
      borderRadius={[16, 24]}
      borderWidth={2}
      borderColor={`${qColor}.200`}
      backgroundColor={`${qColor}.100`}
      padding={6}
    >
      <Text fontWeight="black" fontSize="2xl" color={`${qColor}.600`}>
        {title}
      </Text>
    </Stack>
  );
};

export default QuestionCard;
