import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FeedBackUser } from "../components/FeedbackUser";
import { withSSRGuest } from "../util/withSSRGuest";

export default function Home() {
  const router = useRouter();
  return (
    <VStack as="div" width={1680} px="8" mt="2%">
      <Flex as="div" w="100%">
        <VStack as="div" p="20" w="100%" alignItems="flex-start" mt="2%">
          <Box marginBottom="2%">
            <Text
              color="#8D5CF6"
              fontWeight="700"
              fontSize="16px"
              lineHeight="24px"
              letterSpacing="0.1"
              marginBottom="5%"
            >
              For a Better Future
            </Text>
            <Text
              maxW="542px"
              fontSize="58px"
              fontWeight="700"
              lineHeight="80px"
              letterSpacing="0.2px"
              marginBottom="4%"
            >
              HIGH QUALITY COURSE
            </Text>
            <Text
              fontWeight="300"
              fontSize="20px"
              lineHeight="30px"
              letterSpacing="0.2px"
              maxW="458px"
            >
              Find the right instructor for you from over 10,000 teachers
            </Text>
          </Box>
          <Flex>
            <Button
              bgColor="#8D5CF6"
              h="52px"
              w="193px"
              p="15px 40px"
              borderRadius="5px"
              variant="unstyled"
              fontSize="14px"
              fontWeight="700"
              letterSpacing="0.2px"
              mr="10px"
              _hover={{ color: "#8D5CF6", backgroundColor: "white" }}
              _focus={{ border: "" }}
            >
              Get Quote Now
            </Button>
            <Button
              h="52px"
              w="162px"
              p="15px 40px"
              borderRadius="5px"
              variant="unstyled"
              fontSize="14px"
              fontWeight="700"
              letterSpacing="0.2px"
              border="1px solid #ECECEC"
              background="transparent"
              _hover={{ color: "#8D5CF6", backgroundColor: "white" }}
              _focus={{ border: "" }}
            >
              Learn More
            </Button>
          </Flex>
        </VStack>
        <Flex w="100%" maxW="704px" maxH="682px">
          <Image src="/PlaceHolder.png" />
        </Flex>
      </Flex>
      <Flex>
        <Flex as="div" p="20" w="100%" alignItems="center" mt="12%">
          <Box w="608px" h="363px" mr="10%">
            <Image src="/Video card.png" h="100%" />
          </Box>
          <Box ml="4%" maxW="450px" maxH="246px" mt="1%">
            <Box bgColor="#E74040" w="94px" h="7px"></Box>
            <Text
              mt="10%"
              fontSize="40px"
              fontWeight="700"
              letterSpacing="0.2px"
              lineHeight="50px"
            >
              Watch our Courses
            </Text>
            <Text
              mt="10%"
              fontSize="14px"
              fontWeight="400"
              letterSpacing="0.2px"
              lineHeight="20px"
              w="78%"
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </Text>
            <Button
              _focus={{ border: "none" }}
              mt="8%"
              variant="unstyled"
              fontSize="14px"
              fontWeight="700"
              letterSpacing="0.2px"
              lineHeight="24px"
              color="#8D5CF6"
            >
              Learn More <Icon w={7} h={7} as={MdKeyboardArrowRight} />
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Flex as="div" p="20" w="100%" h="688px" mt="12%">
          <Box maxW="450px" maxH="246px" mt="10%" mr="40">
            <Box bgColor="#E74040" w="94px" h="7px"></Box>
            <Text
              mt="10%"
              fontSize="40px"
              fontWeight="700"
              letterSpacing="0.2px"
              lineHeight="50px"
            >
              Our Popular Courses
            </Text>
            <Text
              mt="10%"
              fontSize="14px"
              fontWeight="400"
              letterSpacing="0.2px"
              lineHeight="20px"
              w="78%"
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </Text>
            <Button
              mt="8%"
              variant="unstyled"
              fontSize="14px"
              fontWeight="700"
              letterSpacing="0.2px"
              lineHeight="24px"
              color="#8D5CF6"
              _focus={{ border: "none" }}
            >
              Learn More <Icon w={7} h={7} as={MdKeyboardArrowRight} />
            </Button>
          </Box>
          <Flex h="688px">
            <Box mr="7%">
              <VStack
                bgColor="white"
                p="10"
                h="288px"
                w="220px"
                boxShadow=" 0px 13px 19px rgba(0, 0, 0, 0.07)"
                spacing="4"
              >
                <Image src="014-school-1.png" mr="10" />
                <Text
                  color="#252B42"
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="700"
                  letterSpacing="0.1"
                >
                  training Courses
                </Text>
                <Box w="100%">
                  <Box bgColor="#E74040" w="50px" h="2px"></Box>
                </Box>
                <Text
                  color="#737373"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="20px"
                  letterSpacing="0.2px"
                >
                  The gradual accumulation of information about{" "}
                </Text>
              </VStack>
              <VStack
                mt="10%"
                bgColor="white"
                p="7"
                h="288px"
                w="262px"
                boxShadow=" 0px 13px 19px rgba(0, 0, 0, 0.07)"
                spacing="4"
              >
                <Image src="015-book.png" mr="24" />
                <Text
                  color="#252B42"
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="700"
                  letterSpacing="0.1"
                >
                  2,769 online courses
                </Text>
                <Box w="100%">
                  <Box bgColor="#E74040" w="50px" h="2px"></Box>
                </Box>
                <Text
                  color="#737373"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="20px"
                  letterSpacing="0.2px"
                >
                  The gradual accumulation of information about{" "}
                </Text>
              </VStack>
            </Box>
            <Flex mr="5" alignItems="center" mb="20">
              <VStack
                bgColor="white"
                p="8"
                h="288px"
                w="212px"
                boxShadow=" 0px 13px 19px rgba(0, 0, 0, 0.07)"
                spacing="4"
              >
                <Image src="016-knowledge.png" mr="10" />
                <Text
                  color="#252B42"
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="700"
                  letterSpacing="0.1"
                >
                  Books Liberary
                </Text>
                <Box w="100%">
                  <Box bgColor="#E74040" w="50px" h="2px"></Box>
                </Box>
                <Text
                  color="#737373"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="20px"
                  letterSpacing="0.2px"
                >
                  The gradual accumulation of information about
                </Text>
              </VStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as="div"
        p="5%"
        w="100%"
        justifyContent="center"
        flexDirection="column"
        mt="12%"
      >
        <VStack alignItems="left" spacing="1%" w="100%" mb="7%" px="10%">
          <Text
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
            color="#8D5CF6"
          >
            Practice Advice
          </Text>
          <Text fontWeight="700" fontSize="40px" lineHeight="50px">
            Get Quality Education
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            letterSpacing="0.2px"
            maxW="500px"
          >
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </Text>
        </VStack>
        <SimpleGrid
          alignItems="left"
          spacing="3%"
          px="10%"
          minChildWidth="300px"
        >
          <FeedBackUser
            level={4}
            name="Joao Cleber"
            profession="Cooker"
            picture="https://bit.ly/ryan-florence"
          >
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </FeedBackUser>
          <FeedBackUser
            level={4}
            name="Robson Alvez"
            profession="BackEnd Developer"
            picture="https://bit.ly/dan-abramov"
          >
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </FeedBackUser>
          <FeedBackUser
            level={5}
            name="Cleyton Santos"
            profession="Lawyer"
            picture="https://bit.ly/sage-adebayo"
          >
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </FeedBackUser>
        </SimpleGrid>
      </Flex>
      <Flex
        as="div"
        p="5%"
        w="100%"
        justifyContent="center"
        flexDirection="column"
        mt="12%"
      >
        <VStack
          alignItems="center"
          spacing="2%"
          w="100%"
          mb="7%"
          px="10%"
          mt="12"
        >
          <Text
            fontWeight="700"
            fontSize="14px"
            lineHeight="24px"
            color="#8D5CF6"
          >
            Newsletter
          </Text>
          <Text fontWeight="700" fontSize="40px" lineHeight="50px">
            Our Experts Teacher
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            letterSpacing="0.2px"
            maxW="500px"
            textAlign="center"
          >
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </Text>
        </VStack>
        <Flex w="50%" alignSelf="center" h="12">
          <Input
            h="100%"
            borderRight="none"
            borderY="1px solid white"
            borderLeft="1px solid white"
            variant="unstyled"
            padding="0% 15% 0% 2%"
            placeholder="Your Email"
            bgColor="white"
            fontWeight="400"
            fontSize="14px"
            lineHeight="28px"
            color="black"
          />
          <Button
            ml="-20"
            bgColor="#8D5CF6"
            fontWeight="400"
            fontSize="14px"
            lineHeight="28px"
            letterSpacing="0.2px"
            textAlign="center"
            borderY="1px solid white"
            borderRight="1px solid white"
            variant="unstyled"
            borderLeftRadius="none"
            w="20%"
            h="100%"
            _hover={{ color: "#8D5CF6", backgroundColor: "white" }}
            _focus={{ border: "" }}
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>
    </VStack>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
