import { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <SidebarDrawerProvider>
          <Flex direction="column">
            <Header />
            <Flex pr="12" pl="6">
              <Sidebar />
              <Flex w="100%"  maxWidth={1680} minHeight={950} mx="auto">
                <Component {...pageProps} />
              </Flex>
            </Flex>
            <Footer />
          </Flex>
        </SidebarDrawerProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
