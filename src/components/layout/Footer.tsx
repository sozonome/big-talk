import { Flex, Link as ChakraLink, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex as="footer" width="full" alignItems="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <ChakraLink href="https://sznm.dev" isExternal>
          sznm.dev
        </ChakraLink>
      </Text>

      <Spacer />

      <Link href="/about">About</Link>
    </Flex>
  );
};

export default Footer;
