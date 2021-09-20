import {
  Box,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const backgroundColor = useColorModeValue(
    "rgba(255,255,255, 0.4)",
    "rgba(45,55,72, 0.7)"
  );

  return (
    <Box
      width="full"
      position="sticky"
      top="0"
      zIndex="2"
      backgroundColor={backgroundColor}
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
