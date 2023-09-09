import { Box, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Header />
      <Stack
        justifyContent="space-between"
        padding="8"
        margin="0 auto"
        maxWidth={800}
      >
        <Stack as="main" marginY={22} minHeight="60vh" justifyContent="center">
          {children}
        </Stack>
        <Footer />
      </Stack>
    </Box>
  );
};

export default Layout;
