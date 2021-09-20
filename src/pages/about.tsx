import { Heading, Link, Stack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack spacing={12}>
      <Stack spacing={2}>
        <Heading size="md">About</Heading>

        <Text>
          Big Talk is created by{" "}
          <Link
            isExternal
            href="https://www.makebigtalk.com/about/"
            fontWeight="bold"
          >
            Kalina Silverman
          </Link>
          . To learn more about Big Talk, visit the{" "}
          <Link
            isExternal
            href="https://www.makebigtalk.com/about/"
            fontWeight="bold"
          >
            original Big Talk website
          </Link>
          .
        </Text>

        <Text>
          This Big Talk web app is not affiliated nor sponsored by the official
          Big Talk. The questions on this app are sourced from personal
          database. This app only follow the philosophy and the goal of Big Talk
          (to skip small talk and talk about things that really mattered in
          life).
        </Text>
      </Stack>

      <Stack spacing={2} fontSize="sm" color="gray.500">
        <Heading size="sm">Tech Stacks</Heading>

        <Text>
          This site is initialized/generated using{" "}
          <Link
            isExternal
            href="https://nextchakra-starter.sznm.dev"
            fontWeight="bold"
          >
            nextchakra-starter
          </Link>{" "}
          (as development starting point). Powered by Notion as database.
        </Text>
      </Stack>
    </Stack>
  );
};

export default About;
