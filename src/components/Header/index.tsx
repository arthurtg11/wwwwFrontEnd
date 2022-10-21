import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiRightArrowAlt } from "react-icons/bi";
import { AuthContext } from "../../contexts/AuthContext";
import React, { useContext } from "react";

export function Header() {
  const router = useRouter();
  const { asPath } = useRouter();
  const { isAuthenticated, user } = useContext(AuthContext);
  return asPath != "/login" ? (
    <Flex
      as="header"
      w="100%"
      maxWidth={1680}
      mt="4"
      h="16"
      mx="auto"
      py="2"
      px="48"
      align="center"
      justifyContent="space-between"
    >
      <Flex as="div" align="center" w="64">
        <Text
          as="a"
          onClick={() => router.push("/")}
          cursor="pointer"
          fontSize={["2xl", "3xl"]}
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
          color="#FFFFFF"
        >
          Test
          <Text as="span" color="#8D5CF6" ml="1">
            .
          </Text>
          English
        </Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        {asPath == "/" ? (
          <>
            <Button
              bgColor="transparent"
              variant="unstyled"
              mr="12"
              _focus={{ border: "none" }}
              _hover={{
                color: "#8D5CF6",
              }}
              onClick={() => router.push("/login")}
            >
              Login
            </Button>

            <Button
              aria-label="Join Us"
              bgColor="#8D5CF6"
              _hover={{
                background: "white",
                color: "#8D5CF6",
              }}
              _highlighted={{ color: "white" }}
              color="white"
              padding="15px 25px"
              w="138px"
              h="52px"
              fontWeight="600"
              fontSize="14px"
              fontFamily="Montserrat"
              lineHeight="22px"
              letterSpacing="0.2px"
              variant="unstyled"
              _focus={{ border: "none" }}
            >
              JOIN US <Icon ml="3" w={5} h={5} as={BiRightArrowAlt} />
            </Button>
          </>
        ) : null}
        {isAuthenticated && (
          <Flex minW="300px" align="center" justifyContent="right">
            <Box mr="5%">
              <Text
                fontWeight="600"
                fontSize="14px"
                fontFamily="Montserrat"
                lineHeight="15px"
                letterSpacing="0.2px"
                textAlign="right"
              >
                Arthur Turini
              </Text>
              <Text
                fontWeight="600"
                fontSize="10px"
                fontFamily="Montserrat"
                lineHeight="22px"
                letterSpacing="0.2px"
                color="#8D5CF6"
              >
                {user.email}
              </Text>
            </Box>
            <Avatar name="Arthur Turini" />
          </Flex>
        )}
      </Flex>
    </Flex>
  ) : null;
}
