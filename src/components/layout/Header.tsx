import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Box
      width="full"
      position="sticky"
      top="0"
      zIndex="2"
      backdropFilter="blur(35px)"
    >
      <Flex
        as="header"
        margin="0 auto"
        maxWidth={800}
        padding={8}
        align="center"
      >
        <Heading as="h1" size="md">
          <Link href="/">Big Talk</Link>
        </Heading>

        <Spacer />

        <Box>
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
