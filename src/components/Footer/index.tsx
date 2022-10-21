import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

export function Footer() {
  const { asPath } = useRouter();
  if (asPath == "/") {
    return (
      <Flex
        as="footer"
        w="100%"
        bgColor="white"
        minH="20%"
        pt="2%"
        pb="2%"
        justifyContent="center"
      >
        <Box minH="170px" minW="300px">
          <Text
            color="#252B42"
            fontWeight="700"
            fontSize="16px"
            lineHeight="24px"
            letterSpacing="0.1px"
            mb="1%"
          >
            Get In Touch
          </Text>
          <HStack maxW="300">
            <Icon as={AiOutlinePhone} color="#8D5CF6" w="10%" h="10%" />
            <Text
              color="#737373"
              fontWeight="700"
              fontSize="14px"
              lineHeight="24px"
              letterSpacing="0.2px"
              mb="1%"
            >
              (480) 555-0103
            </Text>
          </HStack>

          <HStack
            color="#737373"
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="0.2px"
            maxW="275px"
            mb="0.5%"
            minH="60px"
          >
            <Icon as={GoLocation} color="#8D5CF6" w="10%" h="10%" />
            <Text>4517 Washington Ave. Manchester, Kentucky 39495</Text>
          </HStack>
          <HStack
            color="#737373"
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="0.2px"
            maxW="275px"
          >
            <Icon as={HiOutlineMail} color="#8D5CF6" w="10%" h="10%" />

            <Text>debra.holt@example.com</Text>
          </HStack>
        </Box>

        <Box minH="170px" minW="300px">
          <Text
            color="#252B42"
            fontWeight="700"
            fontSize="16px"
            lineHeight="24px"
            letterSpacing="0.1px"
            mb="2%"
          >
            Social Networks
          </Text>
          <HStack maxW="300">
            <Icon as={AiOutlineInstagram} color="#8D5CF6" w="11%" h="10%" />
            <Text
              as="a"
              href="#"
              color="#737373"
              fontWeight="700"
              fontSize="14px"
              lineHeight="24px"
              letterSpacing="0.2px"
            >
              Testing.company
            </Text>
          </HStack>

          <HStack
            color="#737373"
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="0.2px"
            maxW="275px"
            minH="50px"
          >
            <Icon as={AiFillFacebook} color="#8D5CF6" w="11%" h="10%" />
            <Text as="a" href="#">
              Teste_company
            </Text>
          </HStack>
          <HStack
            color="#737373"
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="0.2px"
            maxW="275px"
          >
            <Icon as={AiFillLinkedin} color="#8D5CF6" w="11%" h="10%" />

            <Text as="a" href="#">
              Teste.company_lkd
            </Text>
          </HStack>
        </Box>

        <Box minH="170px" minW="300px">
          <Text
            color="#252B42"
            fontWeight="700"
            fontSize="16px"
            lineHeight="24px"
            letterSpacing="0.1px"
            mb="2%"
          >
            Social Networks
          </Text>
          <HStack maxW="300">
            <Icon as={AiOutlineInstagram} color="#8D5CF6" w="11%" h="10%" />
            <Text
              as="a"
              href="#"
              color="#737373"
              fontWeight="700"
              fontSize="14px"
              lineHeight="24px"
              letterSpacing="0.2px"
            >
              Testing.company
            </Text>
          </HStack>

          <HStack
            color="#737373"
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="0.2px"
            maxW="275px"
            minH="50px"
          >
            <Icon as={AiFillFacebook} color="#8D5CF6" w="11%" h="10%" />
            <Text as="a" href="#">
              Teste_company
            </Text>
          </HStack>
          <HStack
            color="#737373"
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="0.2px"
            maxW="275px"
          >
            <Icon as={AiFillLinkedin} color="#8D5CF6" w="11%" h="10%" />

            <Text as="a" href="#">
              Teste.company_lkd
            </Text>
          </HStack>
        </Box>
      </Flex>
    );
  }

  return <></>;
}
